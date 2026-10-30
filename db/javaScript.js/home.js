import { getAllData} from "../db/db.js";
 let products = getAllData("bookings");
 console.log(products);

 
import { saveData } from "./db/javaScript.js/db.js";

// YOUR REAL ROOM DATABASE - from your Inventory page
const roomsData = {
  "Monastero Santa Rosa Hotel & Spa": {
    roomName: "Deluxe Sea View Suite",
    place: "Monastero Santa Rosa - Amalfi Coast",
    category: "Cliffside Suite",
    bed: "King Bed • Up to 2 Guests",
    base: 696, surge: 920,
    inventory: "Available - 3 left",
    state: "Available",
    statusColor: "#00c950",
    price: 780,
    desc: "A 17th-century Dominican monastery meticulously restored with terraced gardens and sea views.",
    image: "https://images.unsplash.com/photo-1566669437688-88b9c08e78f0"
  },
  "Le Sirenuse Luxury Enclave": {
    roomName: "Monastery Heritage Suite",
    place: "Monastero Santa Rosa - Amalfi Coast",
    category: "Historic Salon",
    bed: "Super King • 2 Guests",
    base: 1000, surge: 1150,
    inventory: "Critical Scarcity - 1 left",
    state: "Critical Scarcity",
    statusColor: "#ff4444",
    price: 850,
    desc: "An aristocratic summer home turned legendary family-run refuge...",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427"
  },
  "Hotel Santa Caterina": {
    roomName: "Sunset Terrace Room",
    place: "Monastero Santa Rosa - Amalfi Coast",
    category: "Terrace Deluxe",
    bed: "Queen Bed • 2 Guests",
    base: 750, surge: 860,
    inventory: "Available - 4 left",
    state: "Available",
    statusColor: "#00c950",
    price: 920,
    desc: "An Art Nouveau villa immersed in the beautiful scenery of the Amalfi Coast...",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
  }
};

let currentRoom = null;

document.querySelectorAll(".view-room-btn, button").forEach(btn => {
  if(btn.textContent.includes("View room")){
    btn.classList.add("view-room-btn");
    btn.addEventListener("click", () => {
      const name = btn.dataset.name || btn.closest(".card, [class*=card]")?.querySelector("h3, h2")?.textContent?.trim() || "Monastero Santa Rosa Hotel & Spa";
      const room = roomsData[name] || roomsData["Monastero Santa Rosa Hotel & Spa"];
      currentRoom = room;

      // Fill modal
      document.getElementById("modalImage").src = room.image;
      document.getElementById("modalRoomName").textContent = room.roomName;
      document.getElementById("modalPlace").textContent = room.place;
      document.getElementById("modalCategory").textContent = room.category;
      document.getElementById("modalCategory2").textContent = room.category;
      document.getElementById("modalBed").textContent = room.bed;
      document.getElementById("modalBase").textContent = "R" + room.base;
      document.getElementById("modalSurge").textContent = "R" + room.surge;
      document.getElementById("modalInventory").textContent = room.inventory;
      document.getElementById("modalState").textContent = room.state;
      document.getElementById("modalStatus").textContent = room.inventory;
      document.getElementById("modalStatus").style.background = room.statusColor;
      document.getElementById("modalDesc").textContent = room.desc;
      document.getElementById("modalPrice").textContent = "R" + room.price + " / night";

      document.getElementById("roomModal").style.display = "flex";
    });
  }
});

document.getElementById("closeModal").onclick = () => {
  document.getElementById("roomModal").style.display = "none";
};

// Book from modal -> Save to Firestore
document.getElementById("modalBookBtn").onclick = async () => {
  if(!currentRoom) return;
  const booking = {
    place: currentRoom.roomName,
    name: currentRoom.place,
    category: currentRoom.category,
    bed: currentRoom.bed,
    price: currentRoom.price,
    basePrice: currentRoom.base,
    surgePrice: currentRoom.surge,
    inventoryState: currentRoom.inventory,
    status: currentRoom.state === "Available" ? "pending" : currentRoom.state,
    date: new Date().toISOString().split('T')[0],
    createdAt: new Date()
  };
  const id = await saveData("bookings", booking);
  alert(`Booked ${currentRoom.roomName}!\nID: ${id}`);
  document.getElementById("roomModal").style.display = "none";
};
