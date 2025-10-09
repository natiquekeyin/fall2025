window.addEventListener("DOMContentLoaded", function () {
  let form = this.document.querySelector("#form1");

  form.addEventListener("submit", function (evt) {
    let title = document.querySelector("#title").value;
    let isbn = document.querySelector("#isbn").value;
    let author = document.querySelector("#author").value;

    addBookToList(title, isbn, author);
    clearFields();
    evt.preventDefault();
  });

  function addBookToList(t, i, a) {
    // this funciton will actually create a row in the table below form...

    if (t === "" || i === "" || a === "") {
      showAlert("No fields should be empty", "error");
    } else {
      let tr = document.createElement("tr");
      tr.innerHTML = `<td>${t}</td> <td>${i}</td><td>${a}</td><td class="delete" style="cursor:pointer">X</td>`;

      document.querySelector("#list").appendChild(tr);
      showAlert("Book successfully added", "success");
    }
  }

  function clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#isbn").value = "";
    document.querySelector("#author").value = "";
  }
  // showAlert will take a message and display that message in a newly created paragraph above form
  function showAlert(m, c) {
    let p = document.createElement("p");
    p.innerText = m;
    p.id = "box";
    p.className = c;
    document.querySelector("#notification").appendChild(p);

    setTimeout(function () {
      document.querySelector("#box").remove();
    }, 3000);
  }

  this.document.querySelector("#list").addEventListener("click", handleDelete);

  function handleDelete(evt) {
    deleteBook(evt.target);
  }

  function deleteBook(elemToDelete) {
    if (elemToDelete.className === "delete") {
      elemToDelete.parentElement.remove();
      showAlert("Book successfully removed", "success");
    } else {
      showAlert("Wrong area, click on X", "error");
    }
  }
});

// We will convert this functional code to Object Oriented Programming, using classes and objects ...
// We will also implement functionality that will save the books in browswer memory, so that when we refresh the page, the books still exist in the memory and they are displayed...
