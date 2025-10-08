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
      alert("No fields should be empty");
    } else {
      let tr = document.createElement("tr");
      tr.innerHTML = `<td>${t}</td> <td>${i}</td><td>${a}</td><td>X</td>`;

      document.querySelector("#list").appendChild(tr);
    }
  }

  function clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#isbn").value = "";
    document.querySelector("#author").value = "";
  }
});
