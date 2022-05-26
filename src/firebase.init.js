// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA88bayJhdJqzYAjqRw8Ghs-OqkUQDRaI0",
    authDomain: "music-store-3bd02.firebaseapp.com",
    projectId: "music-store-3bd02",
    storageBucket: "music-store-3bd02.appspot.com",
    messagingSenderId: "329748862667",
    appId: "1:329748862667:web:dfd97d1fa9298fb7eeed4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;