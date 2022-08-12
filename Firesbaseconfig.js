import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCMuYigD0wsyCupHTU40X5ZcPNmp9le63s",
    authDomain: "foodtogo-3e098.firebaseapp.com",
    projectId: "foodtogo-3e098",
    storageBucket: "foodtogo-3e098.appspot.com",
    messagingSenderId: "199557284499",
    appId: "1:199557284499:web:0fc542af95c4e4bfc10366",
    measurementId: "G-BEMJB1LYYV"
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app)