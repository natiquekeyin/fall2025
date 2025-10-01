window.addEventListener("DOMContentLoaded", function () {
  // Step1: Find the element you want to associate event with!
  let h1 = document.querySelector("#ha");

  // Step2: Attach the event listnere with this element...

  h1.addEventListener("click", function () {
    //   let li = document.querySelector("#item1");
    //   li.innerText = "Clicked!";
    //   let pic1 = document.querySelector("#img1");
    //   pic1.src = "./images/image3.jpg";
    //   pic1.alt = "new tree";
    let newpic = document.createElement("img");
    newpic.src = "./images/image4.jpg";
    newpic.width = "300";
    document.body.appendChild(newpic);
    let newli = document.createElement("li");
    newli.innerText = "Fourth Item";
    document.querySelector("#list").appendChild(newli);
  }); //whenever someone clicks on h1, then run the given function...

  let pic2 = document.querySelector("#img1");

  pic2.addEventListener("click", function () {
    pic2.src = "./images/image2.jpg";
    document.querySelector("#img2").src = "./images/image3.jpg";
  });

  let hide = this.document.querySelector("#hide");
  hide.addEventListener("click", function () {
    document.querySelector("#img1").remove();
    document.querySelector("#img2").remove();
    let pic2 = document.createElement("img");
    pic2.src = "./images/image3.jpg";
    pic2.width = "300";
    document.body.appendChild(pic2);
  });
});
