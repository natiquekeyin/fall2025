window.addEventListener("DOMContentLoaded", function () {
  let btn1 = this.document.querySelector("#btn1");
  btn1.addEventListener("click", loadData);

  function loadData() {
    //    1. create the XHR object
    let xhr = new XMLHttpRequest();

    // 2. configure the request
    xhr.open("GET", "../data/sample.txt");

    // 3.Action to take when request is completed...

    xhr.onload = function () {
      if (this.status === 200) {
        // console.log(this.responseText);
        document.querySelector("#output").innerText = this.responseText;
      } else {
        console.log("Error-data not received");
      }
    };

    // 4. execute the request
    xhr.send();
  }
});
