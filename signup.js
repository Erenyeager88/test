import {  auth } from "./firebase.js"
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

// signup-page input fields start
let signupEmail = document.querySelector(".signup-email")
console.log(signupEmail.value)
let signupPass = document.querySelector(".signup-pass")
let signupBtn = document.querySelector("#signup-btn")
// signup-page input fields end
// validation start

signupEmail.onkeyup = () => {
    if (signupEmail.value === "" || signupEmail.value === null) {
     console.log("Please enter your email.")
     return false
     } else if (!signupEmail.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    
      return false
     } else if (signupEmail.value !== "" && signupEmail.value !== null && 
        signupEmail.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {  
   signupBtn.addEventListener("click", () => {
       console.log("working")
       // const auth = getAuth();
       createUserWithEmailAndPassword(auth, signupEmail.value, signupPass.value)
       .then((userCredential) => {
           // Signed up 
           const user = userCredential.user;
           console.log(user)
           window.location="./login.html"
           // ...
         
       })
       .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
           console.log(errorCode, errorMessage)
           Swal.fire({
            title: "signup failed",
            text: "account already exist",
            icon: "error",
          })
           // ..
       });
   })
   // sign up authentication end
  }
 }
// validation end
// sign up authentication start