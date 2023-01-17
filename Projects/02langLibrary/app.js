// ---------------CLOSURE-------------------
// Фунция и лексикалната среда, в която е декларирана тази фунцкия! Позволява на другите фунции в нея, да имат достъп до променливите, които са създанени в тази декларирана ф-ция (parent function), дори и когато нейният execution context вече го няма. НО тези променливи стоят в паметта и затова се достъпват от другите ф-ции!!!

//1. GLOBAL
// function getName(name) {
//   return function (lastname) {
//     console.log(`Your name is: ${name} ${lastname}`); // имам достъп до "name"!
//   };
// }

// let getTheName = getName("TOM"); // ПРИСВОЯВАМ НА ПРОМЕНЛИВАТА "getTheName" РЕЗУЛТАТА ОТ ФУНЦКИЯТА, КОЙТО ВСЪЩНОСТ Е ДРУГА ФУНКЦИЯ И СЛЕДОВАТЕЛНО "getTheName" СТАВА ФУНЦКИЯ И МОГА ДА ПОДАМ ПАРАМЕТРИ!
// getTheName("DJERY"); // Параметър на "lastname";

// console.log("--------------------------");
// //2. LOCAL
// (function (name) {
//   let takeLastName = function (lastname) {
//     console.log(`Your name is: ${name} ${lastname}`);
//   };
//   takeLastName("DJERY 2");
// })("TOM");

// console.log("--------------------------");

//3. Counter to 100! --------- FUNCTION FACTORIES ----------
// let mainFunc = (function (maxPoints) {
//   let counter = 0;
//   const increment10 = 10;
//   return function () {
//     // не позволявам да се кликва на стойност по-голяма от точките(100);
//     if (counter < maxPoints) {
//       counter += increment10;
//       document.getElementById("containerBtnIncrement").innerHTML = counter;
//     } else if (counter >= maxPoints) {
//       // в момента, в който стойността стигне 100 точки, изписвам точките!
//       document.getElementById(
//         "systemMessages"
//       ).innerHTML = `You have the max points: ${counter}. You win the game!`;
//     }
//     console.log(maxPoints, counter);
//     return counter;
//   };
// })(100);

// console.log("--------------------------");

//4. Which greeting to take depends on the language --------- FUNCTION FACTORIES ----------
// let sortLanguage = function (language) {
//   return function getName(name) {
//     if (language === "en") {
//       console.log("Hello " + name);
//     }
//     if (language === "es") {
//       console.log("Hola " + name);
//     }
//   };
// };

// let englishVersion = sortLanguage("en"); // englishVersion вече е функция и взима параметър (name);
// let spanishVersion = sortLanguage("es"); //spanishVersion вече е функция и взима параметър (name);

// englishVersion("TOM");
// spanishVersion("DJERY");

// console.log("--------------------------");

//---------------------- CALLBACKS -------------------
// Callback ф-ция е тази ф-ция, която е поставена като параметър на друга ф-ция!!! Когато ф-цията майка приключи работата си, извиква ф-цията, която й е подадена като параметър - ( ф-цията дете )!

//5.
// function sayHiLater(greeting, callback) {
//   //създавам ф-цията майка!
//   // let greeting = "Hi"; // тя има създадена променлива в лексикалната си среда и тя е достъпна за ф-цията дете!

//   setTimeout(function () {
//     //създавам ф-ция дете!
//     callback(greeting);
//     // console.log(greeting); // ф-цията дете взима тази променлива( има право! )
//   }, 3000); // ф-цията на детето е да покаже стойността на променливата от ф-цията майка след 3 секунди!
// }

// function typeGreeting(greet) {
//   console.log(greet);
// }

// sayHiLater("hi2", typeGreeting); // извикване на ф-цията майка!

//console.log("--------------------------");

//6.
//function testCallback(callback) {
//слагам параметър друга ф-ция!
//callback();
//}

// testCallback(function () {
//   console.log(`I am callback function of test `);
//}); // извиквам фунцкията майка с нейния параметър(т.е. другата ф-ция)

//testCallback(function () {
//console.log(`I am a callback function of test again!`);
//}); // отново извиквам ф-цията майка със същия параметър ф-ция, но ф-цията върши други неща!

//7.
// function calculatorPlus(num1, num2, myCallback) {
//   let sum = num1 + num2;
//   myCallback(sum);
// }
// function theSum(wholeSum) {
//   console.log(wholeSum);
// }
// calculatorPlus(5, 5, theSum);

//---------------------- bind(); apply(); call()-------------------
// Всички ф-ции са обекти и като такива имат пропъртита и методи. И съответно имат следните атрибути: име на ф-цията; код(тялото на ф-цията); call(), apply(), bind() методи. Всички ф-ции имат достъп до тези методи. И те се използват, за да можем да контролираме "this"!!!

//bind();
//Връща нова ф-ция(прави копие на ф-цията, която сме поставили) и вътре в () посочва на къде да сочи "this"! Но bind() не извиква ф-цията!!!
//8.
// създавам метод на обекта;
// let person = {
//   fname: "Josh",
//   lname: "Samuel",
//   fullname: function () {
//     return this.fname + " " + this.lname;
//   },
// };
// създавам нов обект с нови имена;
// let member = {
//   fname: "TOM",
//   lname: "DJERY",
// };
//присвоявам на променливата "takeFullName" метода "fullname" от обекта "person" и вече "this" сочи към новия обект и взима  fname и lname от member!
// let takeFullName = person.fullname.bind(member);
// console.log(takeFullName());

// let member2 = {
//   fname: "John",
//   lname: "Smith",
// };
// console.log(person.fullname.call(member2));
// console.log(person.fullname.apply(member2));

//call();
//Директно извиква ф-цията като приема 2 аргумента: 1-вия на къде да сочи this и 2-рия параматрите на ф-цията;

// let person = {
//   fname: "TOM",
//   lname: "DJERY",
//   fullname: function () {
//     return this.fname + this.lname;
//   },
// };

// let person2 = {
//   fname: "TOM2",
//   lname: "DJERY2",
// };
// console.log(person.fullname.call(person2));

// //apply();
// //Ф-цията му е същата като на call(), само че параметрите се подават като масив!

// let logName = function (lang1, lang2) {
//   console.log("Logged: " + this.fullname());
//   console.log("Arguments: " + lang1 + " " + lang2);
// };

// let logPersonName = logName.bind(person);

// logName.apply(person, ["EN", "ES"]);
// logName.call(person, "EN", "ES");

// (function (lang1, lang2) {
//   console.log("Logged: " + this.fullname());
//   console.log("Arguments: " + lang1 + " " + lang2);
// }.call(person, "ES", "EN"));

// //Function currying;

// function multiply(a, b) {
//   return a * b;
// }

// let newMultiply = multiply.bind(this, 2);
// console.log(newMultiply(2));

// function sum(a, b, c) {
//   return a + b + c;
// }

// function newSum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(newSum(2)(2)(2));

//-------------Functional Programming--------------
//Когато пишем код, го пишем само и единствено с ф-ции!!!

//Нормално писане:
// let arr1 = [1, 2, 3];
// console.log(arr1);

// let arr2 = [];
// for (let i = 0; i < arr1.length; i++) {
//   arr2.push(arr1[i] * 2);
// }
// console.log(arr2);

//За да избегнем повторенията в горния код и да минимизаме кода си, използваме functional programming!!!
// Functional programming:

// function mapForEach(arr, fn) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(fn(arr[i]));
//   }
//   return newArr;
// }

// let arr3 = mapForEach([2, 4, 6], function (item) {
//   return item * 2;
// });
// console.log(arr3);

// let arr4 = mapForEach([1, 2, 5], function (item) {
//   if (item < 2) {
//     return item;
//   }
//   return false;
// });
// console.log(arr4);

// let person = {
//   fname: "John",
//   lname: "Smith",
//   fullname: function () {
//     return this.fname + " " + this.lname;
//   },
//   id: [
//     {
//       name: "credit card",
//       id: 123456789,
//     },
//     {
//       name: "EGN",
//       id: 435263426,
//     },
//   ],
//   getIdData: function () {
//     return this.id.map((x) => `${x.name} - ${x.id}`);
//   },
// };

// let person2 = {
//   fname: "Jack",
//   lname: "Holi",
//   id: [
//     {
//       name: "credit card",
//       id: 987654321,
//     },
//     {
//       name: "EGN",
//       id: 11111111,
//     },
//   ],
// };
// console.log(person.fullname.call(person2));

// console.log(person.getIdData.apply(person2));

// let person = {
//   fname: "JACK",
//   lname: "ROUZ",
//   getFullName: function () {
//     this.fname + " " + this.lname;
//   },
// };

// let person2 = {
//   fname: "JACK2",
//   lname: "ROUZ2",
// };

// console.log(person);

// person.getFullName.bind(person2)();

// let numbers = [1, 2, 3, 4, 5];

// for (let num in numbers) {
//   if (numbers[num] % 2 === 0) {
//     console.log(numbers[num]);
//   }
// }
// // type of arrays!
// let a = [];
// console.log(typeof a);
// console.log(Object.prototype.toString.call(a));

// let b = {};
// console.log(typeof b);
// console.log(Object.prototype.toString.call(b));

// let someString = "Pollie";
// console.log(someString.length);
// console.log(typeof someString);
// let someString2 = new String("Pollie");
// console.log("Pollie".length);
// console.log(typeof someString2);

// let test1 = G$("John", "Smith");
// console.log(test1);

// test1.greet();
// test1.greet(true);
// test1.greet().setLanguage("es").greet().log();

$("#login").click(function () {
  G$.setNames();
  G$.setLanguage($("#lang").val());
  G$.changeSelector("#greeting", true);
  G$.log();
  // .setLanguage($("#lang").val())
  // .changeSelector("#greeting", true)
  // .log();
  //let loginGreet = new G$("TOM", "jONY");
  $("#loginContainer").hide();
});

//-----------------------------------------------------------------------
//----------PROMISES, ASYNC AND AWAIT!!!-----------
//Функциите са FIRST CLASS OBJECTS!

//функция която се подава като параметър на др ф-ция!
// function test(otherFunction) {
//   console.log("Running...");
//   otherFunction();
// }

// test(function () {
//   console.log("Function 1....");
// });

// test(function () {
//   console.log("Function 2...");
// });
//PROMISES

// syntax of Promises:

//new Promise = създава нов обект
// let p = new Promise((resolve, reject) => {
//   let a = 1 + 2;
//   if (a === 2) {
//     resolve("Success");
//   } else {
//     reject("Failed");
//   }
// });

//.then -> всичко вътре в .then ще се отнася до успешния резултат,т.е. resolve!
//.then -> Ще направя това(обещавам) и след това ти ще направиш еди какво си, след като аз съм готов с обещанието си!
//then === resolve;
// p.then((message) => {
//   console.log(`This is in the .then : ${message}`);
//   //catch === reject;
// }).catch((message) => {
//   console.log(`This is in the .catch : ${message}`);
// });
//.catch -> всичко вътре в .catch се отнася до неизпълнено обещание, до допуснати грешки.

// let feedDogOne = new Promise((resolve, reject) => {
//   resolve(`The dog one is fed!`);
// });

// let feedDogTwo = new Promise((resolve, reject) => {
//   resolve(`The dog two is fed!`);
// });

// let feedDogThree = new Promise((resolve, reject) => {
//   resolve(`The dog three is fed!`);
// });

// //.all -> хваща всички промиси в масив и връща масив
// Promise.([feedDogOne, feedDogTwo, feedDogThree]).then((messages) => {
//   console.log(messages);
// });

// //-------------------

// let doWork = new Promise((resolve, reject) => {
//   let a = 1 + 1;
//   if (a === 2) {
//     resolve("the first work is done");
//   }
// });

// let afterDoWork = new Promise((resolve, reject) => {
//   let b = 2 + 2;
//   if (b === 4) {
//     resolve("the second work is done");
//   }
// });
// doWork;
// .then((message) => {
//   console.log(`1st log: ${message}`);
//   //afterDoWork да се изпълни след като doWork е готова! Тази ф-ция връща Promise
//   return afterDoWork;
// })
// .then((value) => {
//   console.log(`2nd log: ${value}`);
// });
