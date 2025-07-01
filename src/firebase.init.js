// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD718mtww3ANcqrd2CFg0pyxKR_w9tpSVk",
    authDomain: "profast-b4f1b.firebaseapp.com",
    projectId: "profast-b4f1b",
    storageBucket: "profast-b4f1b.firebasestorage.app",
    messagingSenderId: "38658101608",
    appId: "1:38658101608:web:80b7fddf56ae320e1546dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);