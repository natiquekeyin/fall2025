window.addEventListener("DOMContentLoaded", function () {
  let btn1 = this.document.querySelector("#btn1");
  btn1.addEventListener("click", loadData);
  let btn2 = this.document.querySelector("#btn2");
  btn2.addEventListener("click", loadJSON);
  let btn3 = this.document.querySelector("#btn3");
  btn3.addEventListener("click", loadJSONS);

  let btn4 = this.document.querySelector("#btn4");
  btn4.addEventListener("click", loadAPIData);

  function loadData() {
    fetch("../data/data.txt")
      .then((response) => {
        //   console.log(response);
        return response.text();
      })
      .then((data) => {
        // console.log(data);
        document.querySelector("#output").innerText = data;
      });
  }

  function loadJSON() {
    fetch("../data/user.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        document.querySelector(
          "#output"
        ).innerHTML = `<div class="profile"><h2>${data.first_name}</h2><h2>${data.last_name}</h2> <h2>${data.email}</h2></div>`;
      });
  }

  function loadJSONS() {
    fetch("../data/users.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        data.forEach((item) => {
          document.querySelector(
            "#output"
          ).innerHTML += `<div class="profile">ID: ${item.id} <br/> NAME: ${item.first_name} ${item.last_name}`;
        });
      });
  }

  function loadAPIData() {}
});
// We will apply some other programing here as well...
// We need to add API data calling here!...
