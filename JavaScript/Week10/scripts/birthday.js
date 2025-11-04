// // If Kayo is well, I will get some cakes.Otherwise I wont get any cakes

// const onMyBirthday = (isKayoSick) => {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       if (!isKayoSick) {
//         resolve(2); //Kayo brings 2 cakes
//       } else {
//         reject(new Error("I am Sad - No cakes")); //Kayo does not bring ... because Kayo is sick
//       }
//     }, 5000);
//   });
// };

// // onMyBirthday( ) will return either resolve() or reject... when resolve is returned, the "then()" part will execute, and if reject is called ... the catch() part executes!!!

// onMyBirthday(false)
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Party goes on");
//   });

console.log(fetch("https://api.github.com/users"));
