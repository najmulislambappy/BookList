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
  addToBooklist(book) {
    let list = document.querySelector('#book-list');
    let row = document.createElement('tr');
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href='#' class="delete">X</a></td>`;

    list.appendChild(row);
  }
  clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }

  showAlert(message, className) {
    let div = document.createElement('div');
    div.className = `alart ${className}`;
    div.appendChild(document.createTextNode(message));
    let container = document.querySelector('.container');
    let form = document.querySelector('#book-form');
    container.insertBefore(div, form);

    setTimeout(() => {
      document.querySelector('.alart').remove();
    }, 3000);
  }
}

// Add Event Listener

form.addEventListener('submit', newBook);

//Define function

function newBook(e) {
  e.preventDefault();
  let title = document.querySelector('#title').value,
    author = document.querySelector('#author').value,
    isbn = document.querySelector('#isbn').value;

  let ui = new UI();

  if (title === '' || author === '' || isbn === '') {
    ui.showAlert('Plese fill all the fields! ', 'error');
  } else {
    let book = new Book(title, author, isbn);

    let ui = new UI();
    ui.addToBooklist(book);
    ui.clearFields();
    ui.showAlert('Book added ', 'success');
  }
}
