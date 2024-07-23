// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Importar las credenciales desde src/firebase/credenciales
import { firebaseConfig } from "./credenciales";

// Importar Firestore
import { getFirestore } from "firebase/firestore";


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);