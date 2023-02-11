import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB9QqLe8igTVp99yNnS8-2SlnbX7c4kjaw",
    authDomain: "music-store01.firebaseapp.com",
    projectId: "music-store01",
    storageBucket: "music-store01.appspot.com",
    messagingSenderId: "10271848035",
    appId: "1:10271848035:web:b7bc8ae0f25c67ebb0ea56"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);