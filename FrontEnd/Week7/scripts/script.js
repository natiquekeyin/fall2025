// let course = {
//   code: 102,
//   title: "JavaScript",
//   college: "Keyin College",
// };

// console.log(course.title);
// console.log(course["college"]);

// let user = {
//   first_name: "Alan",
//   last_name: "Smith",
//   age: 20,
//   email: "alan@gmail.com",
// };

// console.log(user);

// let users = [
//   { first_name: "Alan", last_name: "Smith", age: 20, email: "alan@gmail.com" },
//   { first_name: "John", last_name: "Doe", age: 22, email: "john@gmail.com" },
//   {
//     first_name: "Christa",
//     last_name: "Lee",
//     age: 19,
//     email: "christa@gmail.com",
//   },
// ];

// users.forEach(function (user) {
//   console.log(user.email);
// });

// Constructor Function: A special function in JS that can create objects for us at run time.. and we don't need define array, rather the constructor function defines the object for us..

// Constructor function always start with a capital letter...

// function User(f, l, a, e) {
//   this.first_name = f;
//   this.last_name = l;
//   this.age = a;
//   this.email = e;
//   this.loggedIn = false;
//   this.hobbies = ["cycling", "reading", "gym"];
//   this.prefs = { color: "red", model: "Tesla" };
//   this.logIn = function () {
//     this.loggedIn = true;
//   };
//   this.logOut = function () {
//     this.loggedIn = false;
//   };
// }

// // how to create object by using constructor function...

// let user1 = new User("Michael", "Tony", 20, "michael@gmail.com");
// let user2 = new User("Simon", "Doel", 23, "simon@gmail.com");
// let user3 = new User("Christina", "Lee", 21, "christina@gmail.com");

// let user1000 = new User("Zander", "Chris", 20, "zander@gmail.com");

// console.log(user1);
// user1.logIn();
// console.log(user1);
// console.log(user1.hobbies[0]);
// user1.hobbies[0] = "Internet";
// console.log(user1);

// user2.logIn();
// console.log(user2);
// user2.logOut();
// console.log(user2);

// Prototypal Inhertiance:

// function User(f, l, a, e) {
//   this.first_name = f;
//   this.last_name = l;
//   this.age = a;
//   this.email = e;
//   this.loggedIn = false;
//   // this.hobbies = ["cycling", "reading", "gym"];
//   // this.prefs = { color: "red", model: "Tesla" };
// }

// User.prototype.hobbies = ["Cycling", "Reading", "Gym"];
// User.prototype.prefs = { color: "red", model: "Tesla" };

// User.prototype.login = function () {
//   this.loggedIn = true;
// };
// User.prototype.logOut = function () {
//   this.loggedIn = false;
// };

// let user1 = new User("Ali", "Khan", 23, "ali@gmail.com");
// console.log(user1.hobbies);
// // user1.login();
// // console.log(user1);

// Advanced way (ES5/ES6) of doing object oriented programming:

// We use something which is called "class" and we create objects of that class to use the class

// Class is a a colleciton of "CODE & DATA", code are the functions, while data are the fields/variables
// How to write class in js?

// class User {
//   first_name;
//   last_name;

//   setName(f, l) {
//     this.first_name = f;
//     this.last_name = l;
//   }
// }

// let user1 = new User();
// user1.setName("Ali", "Khan");
// console.log(user1);

class User {
  // constructor function: it will actually initialize the object of the class

  first_name;
  last_name;
  constructor() {
    this.first_name = "Alan";
    this.last_name = "Smith";
  }
}

let user1 = new User();
console.log(user1);
