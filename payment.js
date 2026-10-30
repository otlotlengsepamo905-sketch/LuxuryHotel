
/**
 * Haven Stays - Hotel Booking Operations HQ
 * Operational Command Script Engine
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initActionButtons();
    initInventoryTable();
});

/**
 * 1. Sidebar Navigation Handler
 */
function initNavigation() {
    const menuItems = document.querySelectorAll('.sidebar .menu-item');
    
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            // Remove active state from all items
            menuItems.forEach(nav => nav.classList.remove('active'));
            // Add active state to clicked item
            item.classList.add('active');
            
            // Log target context for operational tracking
            console.log(`Navigation shifted to context: ${item.textContent.trim()}`);
        });
    });
}

/**
 * 2. Header & Action Control Triggers
 */
function initActionButtons() {
    const bulkAdjustBtn = document.querySelector('.btn-secondary');
    const addNewRoomBtn = document.querySelector('.btn-primary');

    if (bulkAdjustBtn) {
        bulkAdjustBtn.addEventListener('click', () => {
            alert('Initializing Algorithmic Bulk Rate Adjustment Engine...');
        });
    }

    if (addNewRoomBtn) {
        addNewRoomBtn.addEventListener('click', () => {
            alert('Opening Blueprint Provisioner for New Room / Suite.');
        });
    }
}

/**
 * 3. Inventory State Engine & Data Hydration
 * Generates the requested remaining 8 configuration records out of the 10 displayed.
 */
function initInventoryTable() {
    const tableBody = document.querySelector('.data-table tbody');
    if (!tableBody) return;

    // Remaining operational inventory metadata array
    const extendedSuites = [
        { name: "Sunset Terrace Room", property: "Monastero Santa Rosa • Amalfi Coast", category: "Terrace Deluxe", specs: "Queen Bed • 2 Guests", base: 750, surge: 860, count: 4, state: "available" },
        { name: "Ocean Vista Penthouse", property: "Haven Heights • Cape Town", category: "Presidential Sky-Suite", specs: "Grand King • Up to 4 Guests", base: 4500, surge: 5175, count: 1, state: "critical" },
        { name: "Cape Dutch Classic Suite", property: "Haven Heights • Cape Town", category: "Heritage Wing", specs: "King Bed • 2 Guests", base: 1200, surge: 1380, count: 0, state: "soldout" },
        { name: "Garden Pavilion Villa", property: "Sanctuary Oasis • Bali", category: "Private Compound", specs: "2 x Super King • 4 Guests", base: 2100, surge: 2415, count: 5, state: "available" },
        { name: "Volcanic View Sanctuary", property: "Sanctuary Oasis • Bali", category: "Ridge Chalet", specs: "King Bed • Up to 2 Guests", base: 1800, surge: 2070, count: 2, state: "available" },
        { name: "Forest Canopy Studio", property: "Sanctuary Oasis • Bali", category: "Eco Loft", specs: "Queen Bed • 2 Guests", base: 950, surge: 1090, count: 1, state: "critical" },
        { name: "Nordic Fjord Hideaway", property: "Lofoten Haven • Norway", category: "Glacier Cabana", specs: "King Bed • 2 Guests", base: 3100, surge: 3565, count: 3, state: "available" },
        { name: "Aurora Observation Suite", property: "Lofoten Haven • Norway", category: "Glass Dome Salon", specs: "Super King • 2 Guests", base: 5200, surge: 5980, count: 0, state: "soldout" }
    ];

    // Append mock data dynamically to fill out the 10 rows
    extendedSuites.forEach(suite => {
        const row = document.createElement('tr');
        
        // Resolve structural indicators 
        let statusBadge = '';
        if (suite.state === 'available') {
            statusBadge = `<span class="status-indicator available">Available • ${suite.count} left</span>`;
        } else if (suite.state === 'critical') {
            statusBadge = `<span class="status-indicator critical">Critical Scarcity • ${suite.count} left</span>`;
        } else {
            statusBadge = `<span class="status-indicator soldout" style="color: #ef4444;">Fully Booked</span>`;
        }

        row.innerHTML = `
            <td>
                <strong>${suite.name}</strong><br>
                <small>${suite.property}</small>
            </td>
            <td>${suite.category}<br><small>${suite.specs}</small></td>
            <td><strong>R${suite.surge.toLocaleString()}</strong> <span class="old-price">R${suite.base.toLocaleString()}</span></td>
            <td>${statusBadge}</td>
        `;
        
        tableBody.appendChild(row);
    });

    // Update the counter structural badge dynamically
    const badge = document.querySelector('.table-header .badge');
    if (badge) {
        const rowCount = tableBody.querySelectorAll('tr').length;
        badge.textContent = `${rowCount} displayed`;
    }
}
const navLinks = [
  { label: 'home', url: 'home.html', buttonText: 'Go Home' },
  { label: 'signup', url: 'signup.html', buttonText: 'Join Now' },
  { label: 'explore', url: 'explore.html', buttonText: 'Discover' },
  { label: 'payment', url: 'payment.html', buttonText: 'Pay Now' },
  { label: 'card', url: 'card.html', buttonText: 'View Card' }
];

