// get the UI element
let form = document.querySelector('#book-form');

//Book class
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

//UI class
class UI {
  constructor() {}
  addToBookllist(book) {
    let list = document.querySelector('#book-list');
    let row = document.querySelector('tr');
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href='#' class="delete">X</a></td>`;

    list.appendChild(row);
    console.log(row);
  }
  clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }
}

// Add Event Listener

form.addEventListener('submit', newBook);

//Define function

function newBook(e) {
  let title = document.querySelector('#title').value,
    author = document.querySelector('#author').value,
    isbn = document.querySelector('#isbn').value;

  let book = new Book(title, author, isbn);

  let ui = new UI();
  ui.addToBookllist(book);
  ui.clearFields();

  e.preventDefault();
}
