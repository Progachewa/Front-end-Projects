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

// let arr1 = [1, 2, 3, 4];

// function isOdd(num) {
//   if (num % 2 !== 0) {
//     return num;
//   }
// }

// console.log(arr1.filter(isOdd));

// let arr2 = [18, 23, 29, 35, 40, 17, 43, 36];

// function isOldEnough(age) {
//   if (age >= 18) {
//     return age;
//   }
// }

// console.log(arr2.filter(isOldEnough));

// let arr3 = ["Ivan", "Peter", "Hristian", "Nikolay"];

// function isLongEnough(word) {
//   if (word.length >= 5) {
//     return word;
//   }
// }

// console.log(arr3.filter(isLongEnough));

//-----------------------------------------------------------
//find();
//Връща 1-вия елемент от масива, който отговаря на определено условие, зададено от ф-ция. В момента, в който срещне елемент, който отговаря на условието - спира да обикаля останалите елементи от масива. Ако нито един елемент не отговаря на условието, връша  - "undefined".

// let arr1 = [20, 30, 40, 50, 100, 120, 140, 60];

// function isBigNumber(num) {
//   if (num > 100) {
//     return num;
//   }
// }

// console.log(arr1.find(isBigNumber)); //120

// let arr2 = [
//   { fruits: "apple", quantity: 5 },
//   { fruits: "banana", quantity: 10 },
//   { fruits: "cherries", quantity: 8 },
// ];

// function isBanana(fruit) {
//   if (fruit.fruits === "banana") {
//     return fruit;
//   }
// }
// console.log(arr2.find(isBanana));

// arr3 = [2, 4, 7];

// function isPrimeNumber(nums) {
//   if (nums > 1 && nums % nums === 0) {
//     return nums;
//   }
// }

// console.log(arr3.find(isPrimeNumber));

//-----------------------------------------------------------
//findIndex();
// //Връща първия елемент от масива, който отговаря на дадено условие, зададено от ф-ция. Като връща неговия индекс, а не стойност, т.е. на коя позиция се намира. Ако нито един елемент не отговаря на условието, връша "-1".

// let arr1 = [15, 18, 24, 26];

// function checkAge(age) {
//   if (age > 18) {
//     return age;
//   }
// }

// console.log(arr1.findIndex(checkAge));

// let arr2 = ["Mcdonalds", "KFC", "Subway"];

// function marketing(names) {
//   if (names === "Subway") {
//     return names;
//   }
// }

// console.log(arr2.findIndex(marketing));

// let arr3 = [{ name: "John" }, { name: "Smith" }, { name: "Jack" }];

// function firstName(somename) {
//   if (somename.name === "John") {
//     return somename;
//   }
// }

// console.log(arr3.findIndex(firstName));

//-----------------------------------------------------------
//indexOf();
//Връща индекса/позицията, на която се намира оказания от нас елемент. Той може да започне да търси зададената му стойност от определен индекс, ако му го зададем, ако не, ще започне да търси от началото до края на масива. Ако не намери елемент с определената стойност връща "-1";

// let arr1 = ["dog", "cat", "mouse"];

// console.log(arr1.indexOf("dog"));

// let arr2 = ["dogs", "cats", "dogs", "mouses"];

// console.log(arr2.indexOf("dogs", 1));

// let arr3 = ["elephant", "giraffe", "bison"];

// console.log(arr3.indexOf("dogs"));

//-----------------------------------------------------------
//forEach();
//Извиква ф-ция за всеки един елемент от масива.
// let nums = [1, 2, 3, 4, 8];

// let sum = 0;

// nums.forEach((a) => {
//   if (typeof a === "number") {
//     sum += a;
//   }
// });

// console.log(sum);

// let names = ["John", "Smith", "Jack", "Johnat", 5, "Nataly", "Ferro"];

// let result = "";

// names.forEach((b) => {
//   if (typeof b === "string") {
//     result += " " + b;
//   }
// });

// console.log(result);

// let someNumbers = [1, 2, 3, 4, 5];
// let oddResult = [];

// someNumbers.forEach((currentNum) => {
//   if (currentNum % 2 !== 0) {
//     oddResult.push(currentNum);
//   }
// });
// console.log(oddResult);

//-----------------------------------------------------------
//isArray();
//Проверява дали обектът е масив. И ако е да връща "true",а ако не връща "false";

// let arr1 = [15, 18, 30, 50];
// let check = Array.isArray(arr1);

// console.log(check);

// let arr2 = [
//   { fruit: "apple", price: 1.5 },
//   { fruit: "orange", price: 2.5 },
//   { fruit: "strawberry", price: 3.5 },
// ];

// let fruits = Array.isArray(arr2);

// console.log(fruits);

// let arr3 = { name: "Hristo", age: 45 };

// let checkName = Array.isArray(arr3);

// console.log(checkName);

//map();
//Създава нов масив, с ф-цията, която му е задена, за всеки един елемент от оригиналния масив.

// let arr1 = [2, 5, 3];
// let newArr1 = arr1.map(multyply);

// function multyply(a) {
//   return a * 2;
// }

// console.log(newArr1);

// let arr2 = [1, 2, 3];

// let newArr2 = arr2.map(plusOne);

// function plusOne(b) {
//   return b + 1;
// }

// console.log(newArr2);

// let arr3 = [4, 2, 5, 10];

// let newArr3 = arr3.map(square);

// function square(c) {
//   return Math.sqrt(c);
// }

// console.log(newArr3);

//-----------------------------------------------------------
//slice();
//Връща копие на оригиналния масив, като може да се зададат параметри от къде да започне да копира и до къде.

// let arr1 = ["Orange", "Apple", "Strawberry"];
// console.log(arr1.slice(1, 2)); // Apple;

// let arr2 = ["dogs", "cats", "mouses", "tigers"];
// console.log(arr2.slice(0)); // връща клониран целия масив;

// let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr3.slice(-3, -1)); // започва от 6 до 9 -> връща [7, 8];

//-----------------------------------------------------------
//splice();
//Променя контекста на зададения масив като премахва или заменя съществуващия елемент или добавя нор елемент към масива.

// let months = ["Jan", "Feb", "March"];
// months.splice(3, 0, "April");

// console.log(months);

// let days = ["Monday", "Wednesday", "Thursday", "Friday"];
// days.splice(1, 0, "Tuesday");

// console.log(days);

// let animals = ["dogs", "cats", "mouses", "sheeps", "cows"];
// animals.splice(3, 1, "pigs");

// console.log(animals);

//-----------------------------------------------------------
//sort();
//Сортира елементите на масива, ако е стринг, по азбучен ред, а ако са числа по големина, но гледа първото число.Т.е. ако имам 20 и 100 ще ми покаже първо 100 и после 20!

// let alphabet = ["A", "B", "D", "E", "F", "H", "C", "G"];

// console.log(alphabet.sort());

// let nums = ["1", "22", "20", "3", "100"];

// console.log(nums.sort());

// let simpleNums = ["2", "3", "4", "5", "6", "7", "8", "9"];
// simpleNums.sort();

// console.log(simpleNums.reverse());

//-----------------------------------------------------------
//shift();
//Премахва първия елемент от масива, но пази стойността му, т.е. дори и премахнат можем да го достъпим.

// let a = [1, 2, 3, 4, 5];
// let removeFirst = a.shift();

// console.log(a, removeFirst);

// let b = [10, 20, 30, 40];
// let result = 0;
// let rmv = b.shift();

// for (let i = 0; i < b.length; i++) {
//   result += b[i];
//   console.log(result);
// }
// rmv += result;
// console.log(rmv);

// let c = ["Orange", "Apple", "Banana"];
// let rmvFruit = c.shift();

// console.log(c);

//-----------------------------------------------------------
//pop();
//Премахва последния елемент от масива, но пази стойността му.

// let ages = [25, 29, 34, 20, 18];
// let rmvLast = ages.pop();
// console.log(ages);

// let animals = ["dog", "cat", "mouse"];
// let rmvAnimal = animals.pop();
// console.log(rmvAnimal);

// let names = ["Hristo", "Ivan", "Maria"];
// console.log(names.pop());

//-----------------------------------------------------------
//push();
//Добавя нов елемент в края на масива.

// let a = ["dog", "cat"];
// a.push("mouse");

// console.log(a);

// let b = [1, 2, 3, 4, 5, 6, 7];
// b.push(8, 9);

// console.log(b);

// let c = [1, 2, 3];
// let d = [4, 5, 6];
// c.push(...d);

// console.log(c);

//-----------------------------------------------------------
//reduce();
//Изпълнява зададена мъ фунцкия за всеки един елемент от масива, но връща единична стойност от натрупания резултат.

// let sum = [10, 10, 10];

// function sumNumbers(a, b) {
//   return a + b;
// }
// console.log(sum.reduce(sumNumbers));

// let tasks = [1, 2, 3, 4, 5];

// function testTask(c, d) {
//   return c * d;
// }

// console.log(tasks.reduce(testTask));

// let arr = [15.5, 2.3, 1.1, 4.7];

// function getSum(total, num) {
//   return total + Math.round(num);
// }

// console.log(arr.reduce(getSum, 0));

//----------------------------------------------------------- ЗАДАЧИ ARRAY

//ЗАДАЧА 1 --> Write a JavaScript function to check whether an `input` is an array or not.

// function check(a, b) {
//   a = Array.isArray(a);
//   b = Array.isArray(b);
//   console.log(a, b);
// }

// check("w3resource", [1, 2, 4, 0]);

//ЗАДАЧА 2 --> Write a JavaScript function to clone an array.

// function clone(first, second) {
//   let cloneFirst = first.slice(0);
//   let CloneSecond = second.slice(0);
//   console.log(cloneFirst, CloneSecond);
// }

// clone([1, 2, 4, 0], [1, 2, [4, 0]]);

//ЗАДАЧА 3 --> Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

// function firstElement(elements, counter) {
//   if (counter <= elements.length && counter > 0) {
//     console.log(elements.slice(0, counter));
//   }
//   if (counter == null) {
//     console.log(elements[0]);
//   }
//   if (counter > elements.length) {
//     console.log(elements);
//   }
//   if (counter < 0) {
//     console.log([]);
//   }
// }
// firstElement([7, 9, 0, -2], 6);

//ЗАДАЧА 4 --> Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

// function lastElement(element, counter) {
//   let lastElement = element.slice(-1);
//   if (counter > element.length) {
//     console.log(element.length);
//   }
//   if (counter <= element.length) {
//     console.log(element.slice(0, counter));
//   }
//   if (counter == null) {
//     console.log(lastElement);
//   }
// }

// lastElement([7, 9, 0, -2], 3);

//ЗАДАЧА 5 --> Write a simple JavaScript program to join all elements of the following array into a string.

// function returnString(elements) {
//   let result = "";
//   result = elements.join("+");
//   console.log(result);
// }

// returnString(["Red", "Green", "White", "Black"]);

//ЗАДАЧА 6 --> Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

// function evenResult(str) {
//   let num = str.split(""); //показва всеки един символ от елемента, като масив.
//   let numArr = num.map(Number); // прави всеки един символ от масива - число.

//   let result = "";

//   for (let i = 0; i < numArr.length; i++) {
//     if (
//       numArr[i - 1] % 2 === 0 &&
//       num[i] % 2 === 0 &&
//       numArr[i + 1] !== undefined
//     ) {
//       result = result + numArr[i] + "-";
//     } else {
//       result = result + numArr[i];
//     }
//   }
//   return result;
// }

// console.log(evenResult("025468"));

//ЗАДАЧА 7 -->  Write a JavaScript program to sort the items of an array.

// let nums = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

// nums.sort((a, b) => {
//   if (a < b) {
//     return -1;
//   }
//   if (a > b) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

// console.log(nums);

//ЗАДАЧА 8 --> Write a JavaScript program to find the most frequent item of an array.

// let elements = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
// let counter = 0;
// let maxCounter = 0;
// let item = "";

// for (let i = 0; i < elements.length; i++) {
//   for (let j = i; j < elements.length; j++) {
//     if (elements[i] == elements[j]) {
//       counter++;
//     }
//     if (counter > maxCounter) {
//       maxCounter = counter;
//       item = elements[i];
//     }
//   }
//   counter = 0;
// }
// console.log(`${item} (${maxCounter} times)`);

//ЗАДАЧА 9 -->Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'

// let str = "The Quick Brown Fox";

// let strArr = str.split("");
// let result = "";

// for (let i = 0; i < strArr.length; i++) {
//   if (strArr[i] === strArr[i].toUpperCase()) {
//     result += strArr[i].toLowerCase();
//   }
//   if (strArr[i] === strArr[i].toLowerCase()) {
//     result += strArr[i].toUpperCase();
//   }
// }
// console.log(result);

//ЗАДАЧА 10 --> Write a JavaScript program which prints the elements of the following array.

// let arr = [
//   [1, 2, 1, 24], // row 0
//   [8, 11, 9, 4], // row 1
//   [7, 0, 7, 27], // row 2
//   [7, 4, 28, 14], // row 3
//   [3, 10, 26, 7], // row 4
// ];

// let result = "";

// for (let i = 0; i < arr.length; i++) {
//   console.log(`row ${i}`);
//   for (let j = 0; j < arr[i].length; j++) {
//     result = arr[i][j];
//     console.log(result);
//   }
// }

//ЗАДАЧА 11 -->  Write a JavaScript program to find the sum of squares of a numeric vector.

// let arr = [0, 1, 2, 3, 4];

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i] * arr[i];
// }
// console.log(sum);

//ЗАДАЧА 12 --> Write a JavaScript program to compute the sum and product of an array of integers

// function sumAndMultiply(nums) {
//   let sum = 0;
//   let multiply = 1;

//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//     multiply *= nums[i];
//   }
//   console.log(sum, multiply);
// }
// sumAndMultiply([1, 2, 3, 4, 5]);

//ЗАДАЧА 13 --> Write a JavaScript program to add items in an blank array and display the items.

// let a = 0;
// let arr = Array();

// function addItem() {
//   arr[a] = document.getElementById("txt").value;
//   alert("Your text: " + " " + arr[a] + " " + " at index: " + a);
//   a++;
//   document.getElementById("txt").value = "";
// }

// function displayItem() {
//   let display = "";
//   for (let i = 0; i < arr.length; i++) {
//     display += "Element" + " " + i + " " + "=" + " " + arr[i] + "<br/>";
//   }
//   document.getElementById("result").innerHTML = display;
// }

//ЗАДАЧА 14 --> Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

// function removeDuplicate(items) {
//   let duplicate = items.filter((item, value) => {
//     return items.indexOf(item) === value;
//   });
//   console.log(duplicate);
// }

// removeDuplicate([1, 2, 3, 1, 4, 5, 1, 1, 2]);

//ЗАДАЧА 15 --> We have the following arrays :color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
//o = ["th","st","nd","rd"]. Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."

// let a = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// let b = ["th", "st", "nd", "rd"];

// // изписва ми числата
// for (let i = 0; i < a.length; i++) {
//   // проверявам дали има досататъчно елементи в "b", които да отговарят на "a". Ако няма, т.е. са "undefined" добавям 1-вия елемент от масив "b";
//   if (b[i + 1] == undefined) {
//     b[i + 1] = b[0];
//   }
//   console.log(`${i + 1} ${b[i + 1]} choice is ${a[i]}`);
// }

//ЗАДАЧА 16 --> Write a JavaScript program to find the leap years in a given range of years

// function leapYear(years) {
//   let result = "";
//   for (let i = 0; i < years.length; i++) {
//     let year = years[i];
//     if (year % 4 === 0 && year % 400 === 0) {
//       result = `${year} - It is a leap year`;
//     }
//     if (year % 100 !== 0) {
//       result = `${year} - It is not a leap year`;
//     }
//     console.log(result);
//   }
// }
// leapYear([2000, 2002]);

//ЗАДАЧА 17 --> Write a JavaScript program to shuffle an array.

// let nums = [0, 1, 2, 3, 4];
// let shuffleNums = nums.sort((a, b) => 0.5 - Math.random());

// console.log(shuffleNums);

//ЗАДАЧА 18 --> Write a JavaScript program to perform a binary search.

// function binary(items, index) {
//   return items.indexOf(index);
// }
// console.log(binary([1, 2, 3, 4, 5, 7, 8, 9], 5));

//ЗАДАЧА 19 --> There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]

// let arr1 = [1, 0, 2, 3, 4];
// let arr2 = [3, 5, 6, 7, 8, 13];

// let result = [];

// for (let i = 0; i < arr2.length; i++) {
//   if (arr1.length === arr2.length) {
//     result.push(arr1[i] + arr2[i]);
//   } else {
//     result.push(arr2[i]);
//   }
// }
// console.log(result);

//..Proba
// let arr = [1, 2, 6, 6, 8, 9, 1, 1, 2, 3, 6];

// let cloneArr = arr.slice().sort();

// let result = [];

// for (let i = 0; i < cloneArr.length; i++) {
//   if (cloneArr[i + 1] === cloneArr[i]) {
//     result.push(cloneArr[i]);
//   }
// }
// console.log(`The duplicates in ${cloneArr} are : ${result}`);

//ЗАДАЧА 20 -->Write a JavaScript program to find duplicate values in a JavaScript array.
//[1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6] - output: ["4","7"]

// function findDuplicateItem(items) {
//   let duplicateItem = items.filter((item, value) => {
//     return items.indexOf(item) !== value;
//   });
//   console.log(duplicateItem);
// }
// findDuplicateItem([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]);

//ЗАДАЧА 22 -->  Write a JavaScript program to compute the union of two arrays.
//[1, 2, 3], [100, 2, 1, 10] -> output: [1, 2, 3, 10, 100];

// function concatArray(arr1, arr2) {
//   let mergeArrays = arr1.concat(arr2);
//   let removeDuplicateItem = mergeArrays.filter((item, value) => {
//     return mergeArrays.indexOf(item) === value;
//   });
//   console.log(removeDuplicateItem);
// }

// concatArray([1, 2, 3], [100, 2, 1, 10]);

//ЗАДАЧА 21 -->Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened a single level.
// [1, [2], [3, [[4]]],[5,6]] -> output: [1, 2, 3, 4, 5, 6]
// ([1, [2], [3, [[4]]],[5,6]], true) -> output: [1, 2, 3, [[4]], 5, 6];

// flat();
// Обединява вложени масиви, като може да му се зададе параметър до каква дълбочина да ги обединява.
//Пример:
// let a = [1, [2], [3, [[4]]], [5, 6]];
// let b = a.flat(3);
// let c = a.flat(0);

// console.log(b); // [1, 2, 3, 4, 5, 6];
// console.log(c); // [1, 2, 3, [4], 5, 6];

// function nestedArrays(nestedArray, deep) {
//   let nested = nestedArray.flat(deep);
//   if (deep === undefined) {
//     console.log(nested.flat(100));
//   } else {
//     console.log(nested);
//   }
// }
// nestedArrays([1, [2], [3, [[4]]], [5, 6]]);

//ЗАДАЧА 24 --> Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
//[NaN, 0, 15, false, -22, '',undefined, 47, null] -- > output:  [15, -22, 47];

// function removeFalseValue(items) {
//   return items.filter((value) => {
//     if (value) {
//       return value;
//     }
//   });
// }
// console.log(
//   removeFalseValue([NaN, 0, 15, false, -22, "", undefined, 47, null, 0])
// );

//ЗАДАЧА 25 -->  Write a JavaScript function to sort the following array of objects by title value.
// var library = [
// { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
// { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
// { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
// ];

// function sortArray() {
//   let library = [
//     { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
//     { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
//     {
//       author: "Suzanne Collins",
//       title: "Mockingjay: The Final Book of The Hunger Games",
//       libraryID: 3245,
//     },
//   ];

//   library.sort((a, b) => {
//     if (a.title < b.title) {
//       return -1;
//     }
//     if (a.title > b.title) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });
//   console.log(library);
// }

// sortArray();

//ЗАДАЧА 26-->Write a JavaScript program to find a pair of elements (indices of the two numbers) from an given array whose sum equals a specific target number.

// function sumTwoNumbers(nums, target) {
//   let result = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] + nums[i + 1] === target) {
//       result.push(nums.indexOf(nums[i]), nums.indexOf(nums[i + 1]));
//     }
//   }
//   console.log(result);
// }

// sumTwoNumbers([10, 20, 10, 40, 50, 60, 70], 50);

//ЗАДАЧА 27--> Write a JavaScript function to retrieve the value of a given property from all elements in an array.
//[NaN, 0, 15, false, -22, '',undefined, 47, null] -> output: [15, -22, 47];

// function valueOfArray(items) {
//   return items.filter((item) => {
//     if (item) {
//       return item;
//     }
//   });
// }
// console.log(valueOfArray([NaN, 0, 15, false, -22, "", undefined, 47, null]));

//ЗАДАЧА 28--> Write a JavaScript function to find the longest common starting substring in a set of strings.
//['go', 'google'] --> output "go";

// function longestSubstring(arr) {
//   let index = 0;
//   let element = arr[0];
//   let nextElement = arr[1];

//   while (
//     index < element.length &&
//     element.charAt(index) === nextElement.charAt(index)
//   )
//     index++;
//   {
//     return element.substring(0, index);
//   }
// }
// console.log(longestSubstring(["go", "google"]));

//----------------------------------------------------------Fundamentals JS SOFTUNI ARRAYS
//Задача 1 --> Write a function that receives an array of numbers and prints the sum of the first and last element in that array.

// function sumFirstLast(arr) {
//   let first = Number(arr[0]);
//   let last = Number(arr[arr.length - 1]);
//   let result = first + last;
//   console.log(result);
// }
// sumFirstLast([20, 30, 40]);

//Задача 2 --> Write a program, which receives a number and prints the corresponding name of the day of the week (in English).
//If the number is NOT a valid day, print: "Invalid day!".

// function days(day) {
//   let daysOfWeek = [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday",
//   ];

//   let result = "";
//   for (let i = 0; i < daysOfWeek.length; i++) {
//     if (daysOfWeek.indexOf(daysOfWeek[i + 1]) === day) {
//       result += daysOfWeek[i];
//     }
//   }
//   if (day === daysOfWeek.length) {
//     result += daysOfWeek[daysOfWeek.length - 1];
//   }
//   if (day > daysOfWeek.length) {
//     result += "Invalid date";
//   }
//   console.log(result);
// }
// days(3);

// //Задача 3 -->Write a program, which receives a number n and an array of elements. Your task is to create a new array with n numbers from the original array, reverse it and print its elements on a single line, space-separated.

// function reverseArray(counter, nums) {
//   let copyOfArray = nums.slice(0); // създавам копие, защото reverse() директно модифицира оригиналния масив!!!
//   let result = [];
//   for (let i = 0; i < counter; i++) {
//     result.push(copyOfArray[i]);
//   }
//   result.reverse();
//   console.log(result.join(" "));
// }
// reverseArray(3, [10, 20, 30, 40, 50]);

// //Задача 4 --> Write a program, which receives an array of strings. Your task is to reverse the array without creating a new array. Print the resulting elements on a single line, space-separated.

// function reserveArray(items) {
//   let result = [];
//   for (let i = items.length - 1; i > -1; i--) {
//     result.push(items[i]);
//   }
//   console.log(result.join(" "));
// }

// reserveArray(["a", "b", "c", "d", "e"]);

//Задача 5 --> Write a program, which receives an array of strings, parse them into numbers, and sum only the even numbers..

// function sumEvenNumbers(nums) {
//   let result = 0;
//   nums.map((num) => {
//     num = parseInt(num);
//     if (num % 2 === 0) {
//       return (result += num);
//     }
//   });
//   console.log(result);
// }

// sumEvenNumbers(["2", "4", "6", "8", "10"]);

//Задача 6 --> Write a program that calculates the difference between the sum of the even and the sum of the odd numbers in an array.

// function differenceSum(nums) {
//   let resultOdd = 0;
//   let resultEven = 0;
//   let difference = 0;

//   nums.map((num) => {
//     num = parseInt(num);
//     if (num % 2 === 0) {
//       resultEven += num;
//     }
//     if (num % 2 !== 0) {
//       resultOdd += num;
//     }
//   });
//   difference = resultEven - resultOdd;
//   console.log(difference);
// }

// differenceSum([2, 4, 6, 8, 10]);

// Задача 7 --> Write a program, which receives two string arrays containing number representations, and prints on the console whether they are identical.
// Arrays are identical if their elements at same indexes are equal. If they are identical, find the sum of the first array and print the following message:
// `Arrays are identical. Sum: {sum}`
//  If the arrays are NOT identical, find the first index where the arrays differ and print the following message:
//  `Arrays are not identical. Found difference at {index} index`

// function identicalArrays(arr1, arr2) {
//   let sum = 0;
//   let result = "";

//   for (let i = 0; i < arr1.length; i++) {
//     arr1[i] = parseInt(arr1[i]);
//     arr2[i] = parseInt(arr2[i]);
//     if (arr1[i] !== arr2[i]) {
//       result = `Arrays are not identical. Found difference at ${i} index`;
//       break;
//     }
//     if (arr1[i] === arr2[i]) {
//       sum += arr1[i];
//       result = `Arrays are identical. Sum: ${sum}`;
//     }
//   }
//   console.log(result);
// }

// identicalArrays(["1"], ["10"]);

// ЗАДАЧА 29--> Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds. ('a', "z", 2) -> output ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]

// function fillArray(start, end, step) {
//   let arr = [];

//   if (typeof start === "string" && typeof end === "string") {
//     for (let i = start.charCodeAt(0); i < end.charCodeAt(0); i += step) {
//       arr.push(String.fromCharCode(i));
//     }
//   } else if (typeof start === "number" && typeof end === "number") {
//     for (let i = start; i < end; i += step) {
//       arr.push(i);
//     }
//   }
//   console.log(arr);
// }
// fillArray("a", "z", 2);

// function addPlayer() {
//   let newArr = [];
//   let index = 0;
//   let display = "";
//   newArr[index] = document.getElementById("txt").value;
//   index++;
//   document.getElementById("txt").value = "";

//   function displayNamePlayer() {
//     for (let i = 0; i < newArr.length; i++) {
//       display += `Player name:  ${newArr[i]}`;
//       document.getElementById("printName").innerHTML = display;
//     }
//   }
//   return displayNamePlayer();
// }

//-------------- Closure!!!!!!
// function greet(sayHi) {
//   return function (name) {
//     console.log(sayHi + " " + name); // sayHi ще го вземе от горната ф-ция, без значение, че exec.context го няма вече на greet(), защото неговите променливи все още са някъде в паметта !
//   };
// }

// let greetVariable = greet("HI"); // създавам променлива, която е равна на резултата от функцията! Тази променлива вече е фунцкия! ( в случая тази променлива е функцията function(name))!

// greetVariable("Pollie"); // Тъй като greetVariable e вече функция, подавам параметри на тази функция!

// function buildFunction() {
//   let arr = [];

//   for (let i = 0; i < 5; i++) {
//     arr.push(function () {
//       console.log(i);
//     });
//   }
//   return arr;
// }
// let buildFunc = buildFunction();
// buildFunc[0]();
// buildFunc[1]();
// buildFunc[2]();
// buildFunc[3]();
// buildFunc[4]();

// console.log("-------------");

// function blood(points) {
//   return function () {
//     if (points >= 100) {
//       console.log(`You Win.Your points are: ${points}`);
//     }
//     if (points < 100) {
//       console.log(`Sorry!...Your points are: ${points} `);
//     }
//   };
// }

// let victory = blood(120);
// let loss = blood(80);

// victory();
// loss();

// let personNames = {
//   name: "John",
//   lastName: "Smith",
//   fullName: function () {
//     let getNames = this.name + " " + this.lastName;
//     return getNames;
//   },
// };

// let logName = personNames.fullName;
// console.log(logName());

// let getFullName = logName.bind(personNames);
// console.log(getFullName());

// console.log("--------------------");

// let getFullNameUser = (function logFullName(name) {
//   return name; // getFullNameUser има стойност , която е равна на стойността на фунцкията(това ,което връща ф-цията, тоест стринг)
//   //function getFulllName() {
//   //console.log(name);
//   //return name;
//   //};

//   //getFulllName();
// })("John");
// console.log(getFullNameUser);

// let getFullNameUser2 = (function logFullName(name) {
//   return function getFulllName(lastname) {// от този ред getFullNameUser2 става ф-цуя!
//     return name + " " + lastname;
//   };
// })("John");
// console.log(getFullNameUser2("Smith"));

//ЗАДАЧА 30 --> Write a JavaScript function to merge two arrays and removes all duplicates elements.
//var array1 = [1, 2, 3];
//var array2 = [2, 30, 1];
//output: [3, 2, 30, 1];

// (function (arr1, arr2) {
//   let newArr = arr1.concat(arr2); // [1, 2, 3, 2, 30, 1];
//   let rmvDuplicate = newArr.filter((num, element) => {
//     return newArr.indexOf(num) === element;
//   });
//   console.log(rmvDuplicate);
// })([1, 2, 3], [2, 30, 1]);

//ЗАДАЧА 31 --> Write a JavaScript function to remove a specific element from an array.
//([2, 5, 9, 6], 5) --> [2, 9, 6];

// function removeSpecificElement(nums, specificElement) {
//   let modifiedNumArray = nums.filter((num) => {
//     if (num !== specificElement) {
//       return num;
//     }
//   });
//   console.log(modifiedNumArray);
// }

// removeSpecificElement([2, 5, 9, 6], 5);

//ЗАДАЧА 32 -->Write a JavaScript function to find an array contains a specific element!
//arr = [2, 5, 9, 6] --> console.log(contains(arr, 5)); [True];

// function findSpecificElement(elements, specificElement) {
// //let newArray = elements.indexOf(specificElement) !== -1;
// //   for (let i = 0; i < elements.length; i++) {
// //     if (elements[i] === specificElement) {
// //       return true;
// //     }
// //   }
// //   return false;
// }
// console.log(findSpecificElement([2, 5, 9, 6], 5));

//ЗАДАЧА 33 -->Write a JavaScript script to empty an array keeping the original;

// function emptyArray(arr) {
//   let cloneArr = arr.filter((element) => {
//     if (element.length < 0) {
//       return cloneArr.pop();
//     }
//   });
//   console.log(cloneArr);
// }
// emptyArray([1, 2, 3, 4, 5]);

//ЗАДАЧА 34 --> Write a JavaScript function to get nth largest element from an unsorted array.
//console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4)); -> output: 89;

// function getSpecificLargestElement(elements, specificLength) {
//   let largestElement = 0;
//   for (let i = 0; i < specificLength; i++) {
//     if (elements[i] > largestElement) {
//       largestElement = elements[i];
//     }
//   }
//   console.log(largestElement);
// }

// getSpecificLargestElement([43, 56, 23, 89, 88, 90, 99, 652], 6);

//ЗАДАЧА 35 -->Write a JavaScript function to get a random item from an array.

// function getRandomItem(items) {
//   let randomNum = items[Math.floor(Math.random() * items.length)];
//   console.log(randomNum);
// }
// getRandomItem([2, 4, 6, 1, -5, 10, 23, 3]);

//ЗАДАЧА 36 -->Write a JavaScript function to create a specified number of elements with pre-filled numeric value array.
//console.log(array_filled(6, 0));--> ouput: [0, 0, 0, 0, 0, 0];

// function specificNumberOfElements(nums, specificElement) {
//   let num = Number(nums);
//   let specElement = Number(specificElement);
//   let newArr = [];

//   for (let i = 0; i < num; i++) {
//     newArr.push(specElement);
//   }
//   console.log(newArr);
// }
// specificNumberOfElements(4, 11);

//ЗАДАЧА 37 --> Write a JavaScript function to create a specified number of elements with pre-filled string value array.
//console.log(array_filled(3, 'default value')); output: ["default value", "default value", "default value"]

// function specificElementsStrings(numberElements, stringValue) {
//   let numElement = Number(numberElements);
//   let strValue = String(stringValue);
//   let newArr = [];

//   for (let i = 0; i < numElement; i++) {
//     newArr.push(strValue);
//   }
//   console.log(newArr);
// }
// specificElementsStrings(3, "default value");

//ЗАДАЧА 38 --> Write a JavaScript function to move an array element from one position to another.
//console.log(move([10, 20, 30, 40, 50], 0, 2)); output: [20, 30, 10, 40, 50];

// function moveElementPosition(elements, position, newPosition) {
//   let moveElement = elements.splice(position, 1)[0];
//   console.log(moveElement);
//   elements.splice(newPosition, 0, moveElement);
//   console.log(elements);
// }

// moveElementPosition([10, 20, 30, 40, 50], 0, 2);

//ЗАДАЧА 39 --> Write a JavaScript function to filter false, null, 0 and blank values from an array.
//console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));output: [58, "abcd", true];

// function removeFalse(items) {
//   let newArr = items.filter((item) => {
//     if (item) {
//       return item;
//     }
//   });
//   return newArr;
// }

// console.log(removeFalse([58, "", "abcd", true, null, false, 0]));

//ЗАДАЧА 40 --> Write a JavaScript function to generate an array of specified length, filled with integer numbers, increase by one from starting position.
//console.log(array_range(1, 4)); output: [1, 2, 3, 4];
//console.log(array_range(-6, 4)); output: [-6, -5, -4, -3];

// function specLength(startNum, arrayLength) {
//   startNum = Number(startNum);
//   arrayLength = Number(arrayLength);

//   for (let i = 0; i < arrayLength; i++) {
//     console.log(startNum++);
//   }
// }
// specLength("-6", "4");

//ЗАДАЧА 41 --> Write a JavaScript function to generate an array between two integers of 1 step length.
//console.log(rangeBetwee(4, 7)); output: [4, 5, 6, 7];

// function twoIntegers(startPostion, finalPosition) {
//   let start = parseInt(startPostion);
//   let final = parseInt(finalPosition);
//   let newArr = [];

//   for (let i = start; i <= final; i++) {
//     newArr.push(i);
//   }
//   console.log(newArr);
// }
// twoIntegers(-4, 7);

//ЗАДАЧА 42 -->Write a JavaScript function to find the unique elements from two arrays.
//console.log(difference([1, 2, 3], [100, 2, 1, 10])); output: ["1", "2", "3", "10", "100"];

// (function (arr1, arr2) {
//   let mergeArrays = arr1.concat(arr2);

//   let uniqueElement = mergeArrays.filter((element, item) => {
//     return mergeArrays.indexOf(element) === item;
//   });
//   console.log(uniqueElement);
// })([1, 2, 3], [100, 2, 1, 10]);

//ЗАДАЧА 43 -->Write a JavaScript function to create an array of arrays, ungrouping the elements in an array produced by zip.
//unzip[['a', 1, true], ['b', 2, false]] --> [["a","b"],[1,2],[true,false]];

function zipArray(groupingArray) {
  let mergeArray = groupingArray.flat(1);
  let stringArray = [];
  let numberArray = [];
  let booleanArray = [];
  let newGroupingArray = [];
  for (let i = 0; i < mergeArray.length; i++) {
    if (typeof mergeArray[i] === "string") {
      stringArray.push(mergeArray[i]);
    } else if (typeof mergeArray[i] === "number") {
      numberArray.push(mergeArray[i]);
    } else if (typeof mergeArray[i] === "boolean") {
      booleanArray.push(mergeArray[i]);
    }
  }
  newGroupingArray.push(stringArray, numberArray, booleanArray);
  return newGroupingArray;
}
console.log(
  zipArray([
    ["a", 1, true],
    ["b", 2, false],
  ])
);
