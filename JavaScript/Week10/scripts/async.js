// function myFunction() {
//   return "hello keyin college";
// }

// console.log(myFunction());

// async function myFunction() {
//   return "hello keyin college";
// }

// // console.log(myFunction());
// myFunction().then((info) => {
//   console.log(info);
// });

async function loadText() {
  let response = await fetch("../data/data.txt");
  let data = await response.text();
  console.log(data);
}

loadText();
