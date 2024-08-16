import { app, auth ,db} from "./firebase.js"
// import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
// import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js"; 
import {onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
// signup-page input fields start
// let signupEmail = document.querySelector(".signup-email")
// console.log(signupEmail.value)
// let signupPass = document.querySelector(".signup-pass")
// let signupBtn = document.querySelector("#signup-btn")
// signup-page input fields end

// login page input fields
// let  = document.querySelector("#floatingInput")
// let  = document.querySelector("#floatingPassword")
// let  = document.querySelector("#login")
// // login page input fields end


// dashboard input fields
let blogTitle = document.querySelector(".inpTitle")
let blogDiscription = document.querySelector(".inpBlogDiscription")
let addBlogBtn = document.querySelector("#addBlogBtn")
console.log(blogTitle, blogDiscription, addBlogBtn)

// dashboard functionality start
let addBlog = async() => {
    let obj ={
        title: blogTitle.value,
        discription: blogDiscription.value
    }
    try {
        const docRef = await addDoc(collection(db, "obj"), obj);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

    let carddiv = document.createElement("div")
    carddiv.className = "card";

    let h1 = document.createElement("h2")
    h1.className = "card-title";
    h1.innerText = blogTitle.value;

    let cardPara = document.createElement("p")
    cardPara.className = "card-discription"
    cardPara.innerText = blogDiscription.value;

    let cardDateDiv = document.createElement("div")
    cardDateDiv.className = "card-date"
    cardDateDiv.innerText = "14-August-1947"

    carddiv.append(h1)
    carddiv.append(cardPara)
    carddiv.append(cardDateDiv)

    document.querySelector("#blog-section").append(carddiv)
    blogTitle.value = ""
    blogDiscription.value = ""
}

addBlogBtn.addEventListener("click", addBlog)
// dashboard functionality end

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log("user",uid)
        document.querySelector("#section-dashboard").classList.remove("display_none")
        document.querySelector(".signOut-btn").classList.remove("display_none")
        document.querySelector(".before-signIn").classList.add("display_none")
       
        // ...
    } else {
        // User is signed out
        // ...
    }
  });
  document.querySelector(".signOut-btn").addEventListener("click",()=>{
    signOut(auth).then(() => {
        // Sign-out successful.    
        window.location ="./index.html"
        Swal.fire({
                title: "Thanks",
                text: "Signed out Successfully",
                icon: "success"
              })
      }).catch((error) => {
        // An error happened.
      });
  })