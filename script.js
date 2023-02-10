// for (let i = 0; i <= 23; i++) {
//   let h = i;
//   for (let e = 0; e <= 59; e++) {
//     let m = e;

//     console.log(`${h}:${m}`);
//   }
// }

// for (let num1 = 1; num1 <= 10; num1++) {
//     console.log(`${num1}*${num2}=${sum}`);
//   for (let num2 = 1; num2 <= 10; num2++) {
//     let sum = num1 * num2;
//   }
// }

// Напишете булев израз, който да проверява дали дадено цяло число се
// дели на 5 и на 7 без остатък.

// function nums(numArr) {
//   for (let i = 0; i < numArr.length; i++) {
//     //debugger;
//     if (numArr[i] % 5 === 0 && numArr[i] % 7 === 0) {
//       console.log(`The num:${numArr[i]} is divided by 5 and 7`);
//     } else {
//       console.log("The num is not divided");
//     }
//   }
// }

// nums([5, 2, 123, 333, 11, 33, 56, 1, 35]);

// Напишете програма, която чете от конзолата положително цяло число
// N (N < 20) и отпечатва матрица с числа като на фигурата по-долу:
// N = 3
// 1 2 3
// 2 3 4
// 3 4 5

// N = 4
// 1 2 3 4
// 2 3 4 5
// 3 4 5 6
// // 4 5 6 7
// let numbers = "";

// function matrix(num) {
//   for (let i = 1; i <= num; i++) {
//     numbers += i + " ";
//   }
//   console.log(numbers);
// }
// matrix([3]);

// function building(floors) {
//   for (let i = 1; i <= floors; i++) {
//     if (i % 2 === 0) {
//       console.log(`O${i}`);
//     }
//     if (i % 2 !== 0) {
//       console.log(`A${i}`);
//     }
//     if (i === floors) {
//       console.log(`L`);
//     }
//   }
// }

// building([6]);
