// // a file to see what are test?

// const getFullName = (fname, lname) => {
//   return `${fname} ${lname}!`;
// };

// const actualFullName = getFullName("Alan", "Smith");
// const expectedFullName = "Alan Smith!";

// if (actualFullName !== expectedFullName) {
//   throw new Error("Test failed");
// } else {
//   console.log("Test Passed!");
// }
// //

// Write a function addPeriod() in a way that my test gets passed!

const addPeriod = (str) => {
  return str + ".";
};

const actualOutput = addPeriod("Keyin College");
const expectedOutput = "Keyin College.";

if (expectedOutput !== actualOutput) {
  throw new Error("Test Failed");
} else {
  console.log("Test Passed");
}
