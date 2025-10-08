import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import{collection, addDoc, getFirestore, getDocs} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

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
const db = getFirestore(app);

async function getBooks(){
    try {
        const firebasebooks = await getDocs(collection(db, "books"));
        console.log(firebasebooks);
        const books = [];
       
        
        firebasebooks.forEach(doc => {
            
            
          books.push({id:doc.id ,
            ...doc.data()})
        });
        console.log(books);
    
            books.forEach(book => {
            const data = document.getElementById("book");
            const list = document.createElement('div');
            list.innerHTML = `
                <p>available</p><br>
                <h3>${book.booktitle}</h3><br>
                <p>by ${book.author}</p><br>
                <button class="Borrow">Borrow</button>
    
           `;data.appendChild(list);
        })
    
        
            
        
    } catch (error) {
        
    }
}
const googleLogin = document.getElementById("trans");
/*googleLogin.addEventListener('click', function(){
    signInWithPopup(auth, Provider)
    .then((result)=>{
      const credential = GoogleAuthProvider.credentialFromError(result);
      const user = result.user;
      window.location.href ='../logged.html'

    }).catch((error)=>{
  const errorCode = error.code;
  const errorMessage = error.message;
})
  
});*/
getBooks();

 