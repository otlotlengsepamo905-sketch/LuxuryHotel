
import { initializeApp } from 'https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkmGzJ17_YmTgLRZ_ThEep6sg9gxu7h-c",
  authDomain: "hotel-booking-2bb67.firebaseapp.com",
  projectId: "hotel-booking-2bb67",
  storageBucket: "hotel-booking-2bb67.firebasestorage.app",
  messagingSenderId: "158489814433",
  appId: "1:158489814433:web:11c989e20b23a084bad7e0",
  measurementId: "G-84PXRD32TF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export { firebaseConfig };