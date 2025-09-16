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

let firstName = new String("Alan");

console.log(firstName.toUpperCase());
console.log(firstName.length);
console.log(firstName.startsWith("A"));
