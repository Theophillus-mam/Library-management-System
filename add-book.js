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
document.getElementById("add").addEventListener('click', addBook)
const booktitle = document.getElementById("Book").value;
const author = document.getElementById("Author").value;
const isbn = document.getElementById("ISBN").value;
const publisher = document.getElementById("Publisher").value;
const year = document.getElementById("Year").value;
const category = document.getElementById("Category").value;
const copies = document.getElementById("totalCopies").value;



async function addBook(){
const booktitle = document.getElementById("Book").value;
const author = document.getElementById("Author").value;
const isbn = document.getElementById("ISBN").value;
const publisher = document.getElementById("Publisher").value;
const year = document.getElementById("Year").value;
const category = document.getElementById("Category").value;
const totalCopies = document.getElementById("totalCopies").value;
if(!booktitle || !author || !isbn || !publisher || !year || !category || !copies){
    alert("Please fill in all fields")
}

await addDoc(collection(db, "books"), {
    booktitle:booktitle,
    author:author,
    isbn:isbn,
    publisher:publisher,
    year:year,
    category:category,
    totalCopies:totalCopies,
    availableCopies: totalCopies

}); alert("Book added successfully")
 
}

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
        let totalbook = 0;
        books.forEach(book => {
            totalbook += parseInt(book.totalCopies) || 0;
        });
        let totalavailable = 0;
        books.forEach(book => {
            totalbook += parseInt(book.availableCopies) || 0;
        });

document.getElementById("green").innerHTML = totalbook;

        document.getElementById("totalbooks").innerHTML = totalbook;
        books.forEach(book => {
            const data = document.getElementById("Catalog");
            const list = document.createElement('tr')
            list.innerHTML = `
           <td><h4>${book.booktitle}</h4><p>"by"${book.author}</p><sub>${book.isbn}</sub></td>
            <td>${book.category}</td>
            <td>${book.totalCopies}</td>
            <td><button><img src="Assets/delete_14035763.png"></button><button><img src="Assets/edit_18437959.png"></button></td>
            `;data.appendChild(list);

    
        })
        
        
            
        
    } catch (error) {
        
    }
}
getBooks();
document.getElementById('Search').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const listItems = document.querySelectorAll('#Catalog tr');

    listItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(query) ? '' : 'none';
    });
});
 