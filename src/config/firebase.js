import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCHQ-rfIfLHEZCR8O5IXVOSwwMxHxM9_Tk",
    authDomain: "tiktok----jornada.firebaseapp.com",
    projectId: "tiktok----jornada",
    storageBucket: "tiktok----jornada.appspot.com",
    messagingSenderId: "283010620522",
    appId: "1:283010620522:web:3bb0dff74310d1dbb33e13",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;