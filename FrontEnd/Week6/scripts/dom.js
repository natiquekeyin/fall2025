window.addEventListener("DOMContentLoaded", function () {
  let body = this.document.body;
  body.addEventListener("mousemove", function (evt) {
    // console.log("Body clicked");
    // console.log(evt.clientX, evt.clientY);

    let x = document.querySelector("#xPos");
    let y = document.querySelector("#yPos");

    x.innerHTML = evt.clientX;
    y.innerHTML = evt.clientY;
  });

  let cat = this.document.querySelector("#cat");
  cat.addEventListener("click", function (e) {
    // console.log("Cat clicked!");
    // console.log(e.clientX, e.clientY);

    cat.src = nextImageUrl();
    e.stopPropagation();
  });

  let currentCatIndex = 0;
  function nextImageUrl() {
    currentCatIndex++;
    if (currentCatIndex === cats.length - 1) {
      currentCatIndex = 0;
    }

    return cats[currentCatIndex];
  }

  let moreBtn = this.document.querySelector("#btn");
  moreBtn.addEventListener("click", function (e) {
    moreBtn.remove();

    let ul = document.createElement("ul");
    let i = 1;
    cats.forEach(function (url) {
      let li = document.createElement("li");
      // let a = document.createElement("a");
      // a.href = url;
      // a.innerText = `<strong>Image</strong> - ${i++}`;
      // a.target = "_blank";
      // li.appendChild(a);
      // li.innerText = url;

      li.innerHTML = `<a href="${url}"> Image - ${i++}</a>`;
      ul.appendChild(li);
    });

    document.querySelector("#list").appendChild(ul);
  });

  // this.setTimeout(function () {
  //   // // alert("hello 3 seconds elapsed");
  //   // cat.remove();
  //   // moreBtn.remove();

  //   cat.src = nextImageUrl();
  // }, 3000);

  let counter = 0;
  this.setInterval(function () {
    cat.src = nextImageUrl();
    document.querySelector("#num").innerHTML = `${counter++}`;
  }, 1000);
});

// Timer functions
// 1. setTimeout(function(){},3000); this will run the given function after 3 seconds(3000 milliseconds)
