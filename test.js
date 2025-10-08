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
const db = getFirestore(app);;




async function getBooks(){
    try {
        const firebasebooks = await getDocs(collection(db, "books"));
        console.log(firebasebooks);
        const books = [];
        firebasebooks.forEach(doc => {
            
            
          books.push({id:doc.id ,
            ...doc.data()})
        });
        const display = document.getElementById("display");
        books.forEach((index) => {
            const list = document.createElement('li')
            list.innerHTML = `
            ${index.category}<br>
            ${index.publisher}`;
            display.appendChild(books)
        });
        console.log(books);
            
        
    } catch (error) {
        
    }
}
getBooks();