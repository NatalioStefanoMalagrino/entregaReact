import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAl2J0kZzuhv0uoPP7F0iXfsO3IlFeC5ew",
    authDomain: "react-38930.firebaseapp.com",
    projectId: "react-38930",
    storageBucket: "react-38930.appspot.com",
    messagingSenderId: "285707072496",
    appId: "1:285707072496:web:7bab50f62e178553aba335"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)