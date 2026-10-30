
document.addEventListener("DOMContentLoaded", () => {
    // 1. Curated Filter State Management & Dynamic Filtering Simulation
    const filterButtons = document.querySelectorAll(".filters .btn");
    const hotelCards = document.querySelectorAll(".hotel-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove active style from all layout buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            // Set current clicked button as active
            button.classList.add("active");

            const selectedTier = button.textContent.trim();
            
            // Client-side demonstration filter logic
            // (Simulates updating results matching the filter categories)
            hotelCards.forEach(card => {
                const hotelName = card.querySelector("h2").textContent.toLowerCase();
                
                if (selectedTier === "All Tiers") {
                    card.style.display = "flex";
                } else if (selectedTier === "Private Villa" && hotelName.includes("enclave")) {
                    card.style.display = "flex";
                } else if (selectedTier === "Oceanfront Suite" && hotelName.includes("spa")) {
                    card.style.display = "flex";
                } else {
                    // Soft fallback hiding unselected elements for visual feedback
                    card.style.display = "none";
                }
            });
        });
    });

    // 2. Map Marker State Interactivity
    const mapMarkers = document.querySelectorAll(".map-marker");

    mapMarkers.forEach(marker => {
        marker.addEventListener("click", () => {
            // Reset alternative nodes highlight configuration
            mapMarkers.forEach(m => {
                m.style.backgroundColor = "#ffffff";
                m.style.color = "#222222";
            });

            // Highlight chosen marker directly
            marker.style.backgroundColor = "#222222";
            marker.style.color = "#ffffff";

            // Extract price token data
            const targetPrice = marker.textContent.trim();
            console.log(`User focused sanctuary mapped around rate: ${targetPrice}`);

            // Programmatically match map coordinate targets to the list items 
            hotelCards.forEach(card => {
                const priceText = card.querySelector(".price strong").textContent.trim();
                if (priceText === targetPrice) {
                    card.scrollIntoView({ behavior: "smooth", block: "nearest" });
                    card.style.borderColor = "#222222";
                    setTimeout(() => card.style.borderColor = "#eae6e1", 1500);
                }
            });
        });
    });

    // 3. CTA Booking / View Action Binding
    const viewButtons = document.querySelectorAll(".btn-action");

    viewButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const cardElement = e.target.closest(".hotel-card");
            const propertyTitle = cardElement.querySelector("h2").textContent;
            const propertyPrice = cardElement.querySelector(".price strong").textContent;

            alert(`Redirecting to details panel for:\n✨ ${propertyTitle}\n💰 Rate: ${propertyPrice} / night`);
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const inputGroups = document.querySelectorAll(".search-input-group");

    inputGroups.forEach(group => {
        group.addEventListener("click", (e) => {
            const input = group.querySelector("input");
            
            // If the user didn't click the input directly, trigger it manually
            if (e.target !== input) {
                input.focus();
                
                // If it's a native datepicker, this programmatically forces it open
                if (input.type === "date" && typeof input.showPicker === "function") {
                    input.showPicker();
                }
            }
        });
    });
});

