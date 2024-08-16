// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVsK-cIhflwMtWodDvvCrt0iFb2EJCYiM",
  authDomain: "testing-1-7f115.firebaseapp.com",
  projectId: "testing-1-7f115",
  storageBucket: "testing-1-7f115.appspot.com",
  messagingSenderId: "333170081039",
  appId: "1:333170081039:web:f51f1aec93f780c72fd27a"
};



    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);
    export{app,auth,db}