
// 1


// let arr = [5, 8, 6, 3, 4];
// let juft = [];
// let toq = [];
// let count = 0;
// let count2 = 0;
// let newArr = [];

// arr.forEach((value) => {
//   value % 2 ? toq.push(value) : juft.push(value);
// });

// toq = toq.sort((a, b) => a - b);

// arr.forEach((value, index) => {
//   if (value % 2) {
//     newArr.push(toq[count]);
//     count++;
//   } else {
//     newArr.push(juft[count2]);
//     count2++;
//   }
// });

// console.log(newArr);



// 2






// let a = ["a", "b", "d", "e", "f", "j", "h", "l"];
// let b = ["a", "b", "c", "d", "e", "f"];

// let arr = [];

// if (a.length < b.length) {
//   for (let value of b) {
//     if (!a.includes(value)) arr.push(value);
//   }
// } else {
//   for (let value of a) {
//     if (!b.includes(value)) arr.push(value);
//   }
// }

// console.log(arr);

// 3

let arr = ["Olcha", "Anor", "Uzum", "Bexi"];

let newArr = arr.sort((a, b) => a.localeCompare(b));
console.log(newArr);