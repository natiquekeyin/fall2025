window.addEventListener("DOMContentLoaded", function () {
  let left = this.document.querySelector("#left-arrow");
  let right = this.document.querySelector("#right-arrow");

  let box1Count = this.document.querySelector("#box1Count");
  let box2Count = this.document.querySelector("#box2Count");

  let totalBalls = 10;
  let box2CountValue = 0;
  let box1CountValue = totalBalls - box2CountValue;

  box1Count.innerText = box1CountValue;
  box2Count.innerText = box2CountValue;

  left.addEventListener("click", () => {
    if (box1CountValue > 0) {
      box1CountValue--;
      box2CountValue++;
      box1Count.innerText = box1CountValue;
      box2Count.innerText = box2CountValue;
    }
  });

  right.addEventListener("click", () => {
    if (box2CountValue > 0) {
      box1CountValue++;
      box2CountValue--;
      //   console.log(box1CountValue, box2CountValue);
      box1Count.innerText = box1CountValue;
      box2Count.innerText = box2CountValue;
    }
  });
});

// In react we don't NEED to update the UI every time some variable changes like line 29 and 30! React actually achieves this by using "state".
