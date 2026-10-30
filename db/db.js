
import {db} from "../../config.js";

import {
    collection,
    getDocs,
    addDoc,
    doc,
    setDoc,
    getDoc,
    updateDoc,
    deleteDoc,
} from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";

//load all bookings
export async function loadBookings() {
    try {
        const snapshot = await getDocs(collection(db,"bookings"));
        const bookings = snapshot.docs.map ((d)=> ({
            id: d.id,
            ...d.data()
        }));
        console.log("Bookings loaded:", bookings);
        return bookings;

    } catch (error) {
        console.error("Error loading bookings:", error);
    }
};

loadBookings();
//SAVE with auto ID

export async function saveData(collectionName,data){
const docRef =await addDoc(collection(db,collectionName),data);
return docRef.id;

};

 
 export async function saveDataWithId(collectionName,id,data){
    await setDoc(doc(db,collectionName,id),data);
    return id;
 }

 
 export async function getDataById(collectionName, id) {
    const snapshot = await getDoc(
        doc(db,collectionName,id)
    );
 

    if(!snapshot.exists()) return null;
    return {
        id: snapshot.id,
        ...snapshot.data()
 };
}


 export async function updateData(collectionName,id,data){
    await updateDoc(
        doc(db,collectionName,id),
        data
    );
 }
 
 
 export async function deleteData(collectionName,id){
    await deleteDoc(
        doc(db,collectionName,id)
    );
 }
 
 //test it
 loadBookings();