// let's convert the library.js which is functional progrmaming into real Object oriented programmin useing the concepts of classes and objects...

window.addEventListener("DOMContentLoaded", function () {
  class Book {
    constructor(t, i, a) {
      this.title = t;
      this.isbn = i;
      this.author = a;
    }

    addBookToList(book) {
      if (book.title === "" || book.isbn === "" || book.author === "") {
        this.showAlert("No fields should be empty", "error");
      } else {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${book.title}</td> <td>${book.isbn}</td><td>${book.author}</td><td class="delete" style="cursor:pointer">X</td>`;

        document.querySelector("#list").appendChild(tr);

        this.clearFields();
      }
    }

    clearFields() {
      document.querySelector("#title").value = "";
      document.querySelector("#isbn").value = "";
      document.querySelector("#author").value = "";
    }

    showAlert(m, c) {
      let p = document.createElement("p");
      p.innerText = m;
      p.id = "box";
      p.className = c;
      document.querySelector("#notification").appendChild(p);

      setTimeout(function () {
        document.querySelector("#box").remove();
      }, 3000);
    }

    deleteBook(elemToDelete) {
      if (elemToDelete.className === "delete") {
        elemToDelete.parentElement.remove();
        this.showAlert("Book successfully removed", "success");
      } else {
        this.showAlert("Wrong area, click on X", "error");
      }
    }
  }

  class Store {
    // Store books permanently in borwser memory unless we remove them from memory ... books will be there and shown whenever pages gets refreshed..

    // static members of a class: If any class has "static" members(variables or functions), they "CAN BE ACCESSED" without creating object.

    //   static members are not "object level", rather they are "CLASS LEVEL" members

    static addBook(book) {
      let books = Store.getBooks();

      books.push(book);
      localStorage.setItem("books", JSON.stringify(books));
    } //will add a book to the browser memory
    static getBooks() {
      let books;
      if (localStorage.getItem("books") === null) {
        books = [];
      } else {
        books = JSON.parse(localStorage.getItem("books")); //everything is stored in browser memory as JSON object
      }

      return books;
    } // will read all the books from browser memory
    static displayBooks() {
      let books = Store.getBooks();

      books.forEach(function (book) {
        let objBook = new Book();

        objBook.addBookToList(book);
      });
    } //will display the stored books from browser memory
    static removeBook() {} //will remove a book from browser memory
  }

  let form = this.document.querySelector("#form1");

  form.addEventListener("submit", function (evt) {
    let title = document.querySelector("#title").value;
    let isbn = document.querySelector("#isbn").value;
    let author = document.querySelector("#author").value;

    let book = new Book(title, isbn, author);
    book.addBookToList(book);
    Store.addBook(book);

    book.showAlert("Book successfully added", "success");

    // Store.xyz();
    // Math.random();
    // Math.round();
    evt.preventDefault();
  });
  this.document.querySelector("#list").addEventListener("click", handleDelete);

  function handleDelete(evt) {
    let book = new Book();
    book.deleteBook(evt.target);
    //   nothing from class Book can be accessed without creating object of Book class..
    //   we cannot access any property of a class, unless we create its objects
  }

  Store.displayBooks();
});
