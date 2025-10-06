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
    cats.forEach(function (url) {
      let li = document.createElement("li");
      li.innerText = url;
      ul.appendChild(li);
    });

    document.querySelector("#list").appendChild(ul);
  });
  //   these li's which are display should be the links to their respecive text
  //   if user clicks on any of the list item that picture should open only
  //   submit it today .. mandatory submission :)
});
