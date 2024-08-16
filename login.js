import { auth } from "./firebase.js"
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

// login page input fields
let loginEmail = document.querySelector("#floatingInput")
let loginPass = document.querySelector("#floatingPassword")
let loginBtn = document.querySelector("#login")
// // login page input fields end
loginBtn.addEventListener("click", () => {
    signInWithEmailAndPassword(auth, loginEmail.value, loginPass.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            window.location="./index.html"
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Swal.fire({
                title: "login failed",
                text: "login information not correct!",
                icon: "error"
              })
        })
})
