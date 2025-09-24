// Rest paramters "..."

// function mySum(a, b, c, ...numbers) {
//   let total = 0;return
//   for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i];
//   }
//   return total;
// }

// console.log(mySum(1, 2, 3));
// the list starting with ... should always be the last argument in the function
// function findNum(a, b, c, ...list) {
//   let num_a = 0;
//   let num_b = 0;
//   for (let i = 0; i < list.length; i++) {
//     if (list[i] === a) {
//       num_a++;
//     }
//     if (list[i] === b) {
//       num_b++;
//     }
//   }
//   console.log(num_a);
//   console.log(num_b);
//   //   NO RETURN- by default "undefined" is returned..
// }

// console.log(findNum(12, 33, 12, 33, 34, 12, 56, 44, 12));

// function udpateScore(currentScore, value, bonus = 1) {
//   // 1. using if-else statemnt
//   //   if (bonus) {
//   //     return currentScore + value * bonus;
//   //   } else {
//   //     return currentScore + value;
//   //   }
//   //   2. Using ternary operator
//   //   return bonus ? currentScore + value * bonus : current + value;
//   //   3. Using ||
//   //   bonus = bonus || 1;
//   //   return currentScore + value * (bonus || 1);

//   //   4. Default value for bonus parameter!!!!
//   return currentScore + value * bonus;
// }

// console.log(udpateScore(100, 10, 2));

// let height = "5.5feet";
// let height_no = parseFloat(height);
// console.log(parseFloat(height_no));

// let firstName = new String("Alan");

// console.log(firstName.toUpperCase());
// console.log(firstName.length);
// console.log(firstName.startsWith("A"));

// function f() {
//   var y = x + 1;
//   var x = 2;
//   console.log(y);
// }

// f();
// g();

// function g() {
//   console.log("I am g funciton");
// }

// let str = "The best. sound. in this world, is your name.";

// // let's write a function that adds period at the end of a string...

// function addPeriod(s) {
//   //   return s + ".";
//   //   if (s.endsWith(".")) {
//   //     return s;
//   //   } else {
//   //     return s + ".";
//   //   }
//   //   return s.endsWith(".") ? s : s + ".";
//   let lastPos = s.length - 1;
//   //   return s.charAt(lastPos) === "." ? s : `${s}.`;

//   return s.lastIndexOf(".") === lastPos ? s : `${s}.`;
// }

// console.log(addPeriod("hello."));
// console.log(addPeriod(str));

// let str = "Programming is fun.";
// console.log(str.slice(0, 11));
// console.log(str.slice(-5));
// console.log(str.substring(15));

// let data = "apple,banana,cherry,oranges";
// let fruits = data.split(",");
// console.log(fruits);

// let email = "alan@gmail.com";
// let parts = email.split("@");
// console.log(parts[0]);
// console.log(parts[1]);

// let words = ["Hello", "World", "Keyin"];
// let sentence = words.join(" ");
// console.log(sentence);

// let messyData = "         alan@gmai.com                 ";
// console.log(messyData);
// console.log(messyData.trim());

// let orderNumber = "23";
// console.log(orderNumber.padStart(5, "0"));
// console.log(orderNumber.padEnd(10, "."));

// let makeAbbr = function (str) {
//   let split_names = str.trim().split(" ");
//   if (split_names.length > 1) {
//     return split_names[0].charAt(0) + " " + split_names[1].charAt(0) + ".";
//   }

//   return split_names[0];
// };

// console.log(makeAbbr("Alan Smith"));

// We will start with Arrays!

// Declaring arrays:

// let numbers = [1, 2, 4, 5];
// let numbers2 = new Array(6, 7, 8, 9);

// console.log(numbers[1]);
// console.log(numbers2[0]);

// Accessing elements in array:

// let arr = [20, 35, 67, 88, 44, 44, 42, 45, 12, 78, 23, 56];
// // console.log(arr[0], arr[1], arr[2], arr[3]);

// console.log(`First number in array is: ${arr[0]}`);
// console.log(`The last number in array is: ${arr[arr.length - 1]}`);

// let position = [42.3332, -90.1234];

// // 1. Index notation

// // let lat = position[0];
// // let lng = position[1];

// // 2. Destructing the array values

// let [lat, lng] = position;

// console.log(lat, lng);

// let dateString = `23/09/2025`;

// let [day, , year] = dateString.split("/");

// console.log(day, year);

// let email = "alan@gmail.com";
// let [, domain] = email.split("@");

// console.log(`The user name is .. and the domain here is ${domain}`);

let list = [1, 2, 3, 4];

// create a new list that adds 3 to eaach iitem in the list [4,5,6,7]

// let listCopy = [];

// // Method 1: for loop

// for (let i = 0; i < list.length; i++) {
//   let element = list[i];
//   element += 3;
//   listCopy.push(element);
// }

// Method 2: forEach function

// list.forEach(function (element) {
//   listCopy.push(element + 3);
// });

// Method 3: By using map() funcion,

// let listCopy = list.map(function (element) {
//   return element + 3;
// });

// let listCopy = list.map((element) => element + 3);

// let listCopy = list.filter((element) => element > 1);
// console.log(list);
// console.log(listCopy);

// let fruits = ["Apple", "Banana", "Orange", "Pineapple", "Oxy"];

// let newFruits = fruits.map((fruit) => fruit.startsWith("A"));
// let newFruits2 = fruits.filter((fruit) => fruit.startsWith("A"));
// let newFruits3 = fruits.forEach((fruit) => fruit.startsWith("A")); //We dont use forEach like this! WHY? becasue forEach does not automatically return anything!
// console.log(fruits);
// console.log(newFruits);
// console.log(newFruits2);
// console.log(newFruits3);

// .every() returns true if all of the elemnts in the array meet a condition you define in the function..

// let nums = [34, 24, 12, 78, 34, 56];
// console.log(nums.every((element) => element > 10));

// Iterating over strings...

// let str = "Hello Keyin College";

// // for (let i = 0; i < str.length; i++) {
// //   let char = str.charAt(i);
// //   console.log(i, char);
// // }

// // for of

// for (let char of str) {
//   console.log(char);
// }

// let nums = [1, -4, 12, 0, -3, 29, -150];

// let nonzero = nums.filter((num) => num > 0);

// console.log(nonzero);

// let str = "The best sound in this world is your name";

// let createNum = (word) => word[0] + (word.length - 2) + word[word.length - 2];

// console.log(createNum("helloworld"));

// console.log(
//   str
//     .split(" ")
//     .map((word) => {
//       if (word.length >= 4) {
//         return createNum(word);
//       }
//       return word;
//     })
//     .join(" ")
// );

// Converting an array of names to uppercase

// let names = ["alan", "bob", "christina", "sara"];

// let names_in_upper = names.map(
//   (name) =>
//     name[0].toUpperCase() +
//     name.slice(1, name.length - 1) +
//     name[name.length - 1].toUpperCase()
// );
// console.log(names_in_upper);

// Check if all strings have length greater than 3

// let words = ["html", "java", "csss", "node", "javascript"];

// let allLong = words.every((word) => word.length > 3);

// console.log(allLong);

// https://www.youtube.com/watch?v=0CGJrkKa9Ic&t=4s

// Regular Expressons
