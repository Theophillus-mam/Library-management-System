import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import {getAuth, signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyAp2Ts3IfaDqQ_3PsMTsMzBl3f0Utq3KDs",
  authDomain: "library-management-syste-960fa.firebaseapp.com",
  projectId: "library-management-syste-960fa",
  storageBucket: "library-management-syste-960fa.firebasestorage.app",
  messagingSenderId: "82492556435",
  appId: "1:82492556435:web:bbdd2b0e5beaf2edd13966",
  measurementId: "G-8CVKZM1MS7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Provider = new GoogleAuthProvider();
auth.languageCode = 'en';

const Signin = document.getElementById("SignIn")
if(Signin){
Signin.addEventListener('click', SignIn)
}
function SignIn(){
  const email = document.getElementById("Email").value;
  const password = document.getElementById("Password").value; 
  signInWithEmailAndPassword(auth, email ,password ).then(()=>{
        if(email === "admin@gmail.com"){   
          window.location.href = 'index1.html';
        }else{
          window.location.href = 'index.html'
        }
  }).catch((error)=>{
    alert(error.message)
  });
  onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in.
            console.log("Current user:", user.uid);
           const view = document.getElementById("user")
           const list = document.createElement('h1')
           list.innerHTML = `Welcome Back, ${firstname}`;
           view.appendChild(list)
        } else {
            // No user is signed in.
            console.log("No user is signed in.");
            window.location.href = "login.html"
        }
    });
}
const googleLogin = document.getElementById("trans");
if(googleLogin){
   googleLogin.addEventListener('click', function(){
    signInWithPopup(auth, Provider)
    .then((result)=>{
      const credential = GoogleAuthProvider.credentialFromError(result);
      const user = result.user;
      window.location.href ='../index.html'

    }).catch((error)=>{
  const errorCode = error.code;
  const errorMessage = error.message;
})
  
});
}

 