// concat();
// Конкатенира два или повече масива. Връща нов масив.

// let a = ["1", "2", "3"];
// let b = ["4", "5", "6"];

// console.log(a.concat(b));

// let names = ["Pollie", "Lara"];
// let nums = [2, 3, 5];

// console.log(names.concat(nums));

// let c = ["1", "2", "3", "4", "5"];
// let d = ["6", "7", "8", "9", "10"];
// let e = ["11", "12", "13", "14", "15"];

// console.log(c.concat(d, e[0]));

//-----------------------------------------------------------

// every();
//Обикаля всички елементи от масива и връща "true" или "false". Ако всеки един елемент отговаря на определеното условие( на функцията ) връща "true", но ако само един елемент се окаже "false" - връща цялото "false".

// let a = ["1", "2", "3"];

// function isNum(b) {
//   return typeof b === "number";
// }

// console.log(a.every(isNum)); // false

// let c = [1, 3, 5, 7];

// function isOdd(d) {
//   return d % 2 !== 0;
// }

// console.log(c.every(isOdd)); // true

// let arr = [10, 50, 100];

// function isBigger(element) {
//   return element >= 10;
// }

// console.log(arr.every(isBigger)); // true

//-----------------------------------------------------------
//fill();
// Пренаписва елемент/и от масива с определена стойност. Може да се подаде стартова позиция и финална.Ако не се подадат се пренаписват всички елементи с подадената стойност.

// let fruits = ["Banana", "Apple", "Strawberry"];

// console.log(fruits.fill("kiwi"));

// let vegetables = ["Cucumber", "Pepper", "Onion"];

// console.log(vegetables.fill("Carrot", 2, 3)); // "Onion" = "Carrot";

// let stars = Array(5).fill({});
// stars[0].name = "somename";
// stars[1].ages = 25;

// console.log(stars);

//-----------------------------------------------------------
//filter();
//Обикаля елементите от подадения масив и проверява дали отговартя на определено условие, подадено от ф-ция. Създава нов масив само от елементите, които отговарят на условието.

let arr1 = [1, 2, 3, 4];

function isOdd(num) {
  if (num % 2 !== 0) {
    return num;
  }
}

console.log(arr1.filter(isOdd));

let arr2 = [18, 23, 29, 35, 40, 17, 43, 36];

function isOldEnough(age) {
  if (age >= 18) {
    return age;
  }
}

console.log(arr2.filter(isOldEnough));

let arr3 = ["Ivan", "Peter", "Hristian", "Nikolay"];

function isLongEnough(word) {
  if (word.length >= 5) {
    return word;
  }
}

console.log(arr3.filter(isLongEnough));