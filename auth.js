import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import {getFirestore, doc, setDoc} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";
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
document.getElementById("create").addEventListener('click', Register)

function Register(){
  const Email = document.getElementById("email").value;
  const Password = document.getElementById("password").value;
  const firstname = document.getElementById("first").value;
  const Lastname = document.getElementById("last").value;
  const Role = document.getElementById("role").value;
  const agree = document.getElementById("agree").value;
  const Cpassword = document.getElementById("Cpassword").value;
  const db = getFirestore(app); 
  if(Password !== Cpassword ){
    alert("Passwords do not match")
    return;
  }
  if(!agree.checked){
    alert("You did not agree to the terms & condition")
  }

  createUserWithEmailAndPassword(auth, Email, Password).then(async(userCredentials)=>{
    const user = userCredentials.user;
    await setDoc(doc(db, "users", user.uid ), {
      
      firstname:firstname ,
      Lastname:Lastname ,
      Role:Role,
      Email:Email,
      
  
    })
        alert("signed up successfully")
        window.location.href = 'login.html';
  }).catch((error)=>{
        alert(error.message)
  });
}


