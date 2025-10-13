import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import{collection, getFirestore, getDocs, updateDoc, increment, getDoc, doc} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

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



async function getBooks() {
  try {
    const firebasebooks = await getDocs(collection(db, "books"));
    const books = [];

    firebasebooks.forEach(docSnap => {
      books.push({ id: docSnap.id, ...docSnap.data() });
    });

    const container = document.getElementById("book");
    container.innerHTML = ""; 

    books.forEach(book => {
      const list = document.createElement('div');
      list.innerHTML = `
        <p>${book.status}</p>
        <h3>${book.booktitle}</h3>
        <p>by ${book.author}</p>
        <div class="button">
        <button class="borrow-btn" data-id="${book.id}">Borrow</button>
        <button class="return-btn" data-id="${book.id}">Return</button>
        </div>
      `;
      container.appendChild(list);

      
      list.querySelector(".borrow-btn").addEventListener("click", () => borrow(book.id));
      list.querySelector(".return-btn").addEventListener("click", () => Return(book.id));
    });

  } catch (error) {
    console.error("Error fetching books:", error);
  }
}

async function borrow(id) {
  const bookRef = doc(db, "books", id);
  await updateDoc(bookRef, {
    availableCopies: increment(-1)
  });

  const bookSnap = await getDoc(bookRef);
  const book = bookSnap.data();

  if (book.availableCopies <= 0) {
    await updateDoc(bookRef, { status: "Unavailable" });
  }


}

async function Return(id) {
   
  const bookRef = doc(db, "books", id);
  await updateDoc(bookRef, {
    availableCopies: increment(1)
  });

  const bookSnap = await getDoc(bookRef);
  const book = bookSnap.data();

  if (book.availableCopies > 0) {
    await updateDoc(bookRef, { status: "Available" });
  }
  if(book.availableCopies >= book.totalCopies){
      alert("exceed total copies")
 }
}

document.getElementById('Search').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const listItems = document.querySelectorAll('#book div');

    listItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(query) ? '' : 'none';
    });
});


getBooks();



 function myFunction() {
  document.getElementById("relevance").classList.toggle("show");
}

function filterFunction() {
  const input = document.getElementById("relevance");
  const filter = input.value.toUpperCase();
  const div = document.getElementById("options");
  const items = div.getElementsByTagName("a"); // or use querySelectorAll('.option-item')

  for (let i = 0; i < items.length; i++) {
    const txtValue = items[i].textContent || items[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      items[i].style.display = "";
    } else {
      items[i].style.display = "none";
    }
  }
}
myFunction()
filterFunction()
