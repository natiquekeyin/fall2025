// throw new error().. statement that is used to intentionally generate and throw a new nerror, interrupting the normal flow of the program...
// throw is a keyword that intitiates the processing of throwing exception..
// new Error(): this creates a new instance of a built in Error object..

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

try {
  let result = divide(10, 0);
  console.log(result);
} catch (e) {
  console.log("0 is not allowed as denominator", e.message);
}
