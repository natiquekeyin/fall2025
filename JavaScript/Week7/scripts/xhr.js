window.addEventListener("DOMContentLoaded", function () {
  let btn1 = this.document.querySelector("#btn1");
  btn1.addEventListener("click", loadData);
  let btn2 = this.document.querySelector("#btn2");
  btn2.addEventListener("click", loadJSON);
  let btn3 = this.document.querySelector("#btn3");
  btn3.addEventListener("click", loadJSONS);

  function loadData() {
    //    1. create the XHR object
    let xhr = new XMLHttpRequest();

    // 2. configure the request
    xhr.open("GET", "../data/sample.txt");

    // 3.Action to take when request is completed...

    xhr.onload = function () {
      if (this.status === 200) {
        // console.log(this.responseText);
        document.querySelector(
          "#output"
        ).innerHTML = `<strong>${this.responseText}</strong>`;
      } else {
        document.querySelector("#output").innerText = "Something went wrong";
      }
    };

    // 4. execute the request
    xhr.send();
  }

  function loadJSON() {
    // create the XHR object
    let xhr = new XMLHttpRequest();

    // configure it
    xhr.open("GET", "../data/user.json");

    // what todo when data is received..

    xhr.onload = function () {
      if (this.status === 200) {
        let user = JSON.parse(this.responseText); //converted the JSON into normal javascript object
        document.querySelector(
          "#output"
        ).innerHTML = `<div class="profile"><h1>First Name: ${user.first_name}</h1><h2>Last Name: ${user.last_name}</h2><h2>Email:${user.email}</h2></div>`;
      } else {
        document.querySelector("#output").innerText = "NO data received";
      }
    };

    // execute the request..
    xhr.send();
  }

  function loadJSONS() {
    // create the XHR object
    let xhr = new XMLHttpRequest();

    // configure it
    xhr.open("GET", "../data/users.json");

    // what todo when data is received..

    xhr.onload = function () {
      if (this.status === 200) {
        let users = JSON.parse(this.responseText); //converted the JSON into normal javascript object
        let output = "";
        users.forEach(function (user) {
          output += `<div class="profile"><h1>${user.id}</h1><p>NAME: ${user.first_name} ${user.last_name}</p><p>AGE: ${user.age}<p><p>EMAIL:${user.email}</div>`;
        });
        document.querySelector("#output").innerHTML = output;
      } else {
        document.querySelector("#output").innerText = "NO data received";
      }
    };

    xhr.send();
  }
});
// We will apply some other programing here as well...
// We need to add API data calling here!...
