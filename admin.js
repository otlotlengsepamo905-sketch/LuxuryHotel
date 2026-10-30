
document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('table-body');
    
    // --- FUNCTION: RECALCULATE ALL METRICS LIVE ---
    function recalculateDashboard() {
        const rows = tableBody.querySelectorAll('tr');
        document.getElementById('row-count-badge').textContent = `${rows.length} displayed`;
        document.getElementById('metric-total-rooms').value = rows.length;

        let totalBeds = 0;
        let occupiedRooms = 0;
        let activeRevenue = 0;

        rows.forEach(row => {
            const bedCount = parseInt(row.getAttribute('data-beds')) || 0;
            const priceInput = row.querySelector('.price-input');
            const price = parseFloat(priceInput.value) || 0;
            const isAvailable = row.querySelector('.status-indicator').classList.contains('available');

            if (isAvailable) {
                totalBeds += bedCount;
                activeRevenue += price;
            } else {
                // Maintenance counts as occupied capacity out of circulation
                occupiedRooms++;
            }
        });

        // Update DOM inputs
        document.getElementById('metric-available-beds').value = totalBeds;
        document.getElementById('metric-occupied').value = occupiedRooms;
        document.getElementById('metric-active-rev').value = activeRevenue.toLocaleString('en-ZA');

        // Compute occupancy rate percentages
        const totalRoomsCount = rows.length || 1;
        const occupancyPercentage = Math.round((occupiedRooms / totalRoomsCount) * 100);
        document.getElementById('occupancy-text').textContent = `${occupancyPercentage}% Allocation Rate`;
        document.getElementById('occupancy-progress').style.width = `${occupancyPercentage}%`;
    }

    // --- FUNCTION: ATTACH CLICK / INPUT EVENT LISTENERS ---
    function attachRowEventListeners(row) {
        // 1. Live Price Modification Counter Hook
        const priceInput = row.querySelector('.price-input');
        priceInput.addEventListener('input', recalculateDashboard);

        // 2. Interactive Status Badges Click Lifecycle Toggle
        const statusBadge = row.querySelector('.status-indicator');
        statusBadge.addEventListener('click', () => {
            if (statusBadge.classList.contains('available')) {
                statusBadge.className = 'status-indicator maintenance';
                statusBadge.textContent = 'Maintenance';
            } else {
                statusBadge.className = 'status-indicator available';
                statusBadge.textContent = 'Available';
            }
            recalculateDashboard();
        });
    }

    // --- ENGINE: DRAG AND DROP SWAPPING LOGIC ---
    let draggedRow = null;

    tableBody.addEventListener('dragstart', (e) => {
        if(e.target.tagName === 'TR') {
            draggedRow = e.target;
            e.target.classList.add('dragging');
        }
    });

    tableBody.addEventListener('dragend', (e) => {
        if(e.target.tagName === 'TR') {
            e.target.classList.remove('dragging');
            draggedRow = null;
        }
    });

    tableBody.addEventListener('dragover', (e) => {
        e.preventDefault();
        const targetRow = e.target.closest('tr');
        if (targetRow && targetRow !== draggedRow && targetRow.parentElement === tableBody) {
            const bounding = targetRow.getBoundingClientRect();
            const offset = e.clientY - bounding.top;
            if (offset > bounding.height / 2) {
                tableBody.insertBefore(draggedRow, targetRow.nextSibling);
            } else {
                tableBody.insertBefore(draggedRow, targetRow);
            }
        }
    });

    // Run initial metrics configuration on application launch
    tableBody.querySelectorAll('tr').forEach(attachRowEventListeners);
    recalculateDashboard();
});
