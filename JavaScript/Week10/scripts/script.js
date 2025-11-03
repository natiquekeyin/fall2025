// Defining the promise
let p = new Promise(function (resolve, reject) {
  let a = 5 + 3;
  if (a === 8) {
    resolve("Success!!");
  } else {
    reject("Failed/rejected");
  }
});
// Calling the promise:

p.then(function (msg) {
  console.log("Congrats! Promise fullfilled", msg);
}).catch(function (err) {
  console.log("Alas! promise is rejected", err);
});
