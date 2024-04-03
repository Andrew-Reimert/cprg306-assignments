import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";


export const getItems = async (userId) => {
    const items = []; // Initialize an empty array to store items
    const q = query(collection(db, `users/${userId}/items`)); // Create a query against the collection
    const querySnapshot = await getDocs(q); // getDocs returns a promise
    querySnapshot.forEach((doc) => { // Loop through the documents
        items.push({ id: doc.id, ...doc.data() }); // Add the document ID and data to the items array
    }); 
    return items; // Return the items array
}

export const addItem = async (userId, item) => {
    const docRef = await addDoc(collection(db, `users/${userId}/items`), item); // Add a new document to the collection
    return docRef.id; // Return the ID of the newly added document
}

