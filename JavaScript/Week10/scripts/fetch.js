window.addEventListener("DOMContentLoaded", function () {
  let btn1 = this.document.querySelector("#btn1");
  btn1.addEventListener("click", loadData);
  let btn2 = this.document.querySelector("#btn2");
  btn2.addEventListener("click", loadJSON);
  let btn3 = this.document.querySelector("#btn3");
  btn3.addEventListener("click", loadJSONS);

  let btn4 = this.document.querySelector("#btn4");
  btn4.addEventListener("click", loadAPIData);

  let btn5 = this.document.querySelector("#btn5");

  btn5.addEventListener("click", loadReqRes);

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

  async function loadJSONS() {
    // fetch("../data/users.json")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     // console.log(data);
    //     data.forEach((item) => {
    //       document.querySelector(
    //         "#output"
    //       ).innerHTML += `<div class="profile">ID: ${item.id} <br/> NAME: ${item.first_name} ${item.last_name}`;
    //     });
    //   });

    let response = await fetch("../data/users.json");
    let data = await response.json();
    // console.log(data);
    data.forEach((item) => {
      document.querySelector(
        "#output"
      ).innerHTML += `<div class="profile">ID: ${item.id} <br/> NAME: ${item.first_name} ${item.last_name}`;
    });
  }

  async function loadAPIData() {
    // fetch("https://jsonplaceholder.typicode.com/todos")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     let output = "";
    //     data.forEach((item) => {
    //       if (item.completed === true) {
    //         output += `<div class="profile"><h3>${item.id}</h3><p>${item.title}</p><p>${item.completed}</p></div>`;
    //       }

    //       document.querySelector("#output").innerHTML = output;
    //     });
    //   });
    let response = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data = await response.json();
    console.log(data);
  }

  function loadReqRes() {
    fetch("https://reqres.in/api/users", {
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((info) => {
        // console.log(info);
        let output = "";
        info.data.forEach((user) => {
          output += `<div class="profile"><h1>${user.id}</h1>
          <img src="${user.avatar}" alt="pic" class="pic"/>
          <p>${user.email}<p><p>${user.first_name} ${user.last_name}</p></div>`;
        });

        document.querySelector("#output").innerHTML = output;
      });
  }
});
// We will apply some other programing here as well...
// We need to add API data calling here!...
