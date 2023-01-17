// Напишете функция, която изчислява колко решения в естествените числа (включително и нулата) има уравнението:
// x1 + x2 + x3 = n
// Числото n е цяло число и се въвежда от конзолата.
// Estimated time: 30min; Start: 21:00; End: 21:15;

// function combination(input) {
//   let num = Number(input);

//   if (num > 0) {
//     for (let i = 0; i <= num; i++) {
//       let result = "";
//       for (let e = 0; e <= num; e++) {
//         for (let a = 0; a <= num; a++) {
//           result = i + e + a;
//           if (result === num) {
//             console.log(result);
//           }
//         }
//       }
//     }
//   }
// }
// combination(["5"]);

// Напишете функция, която проверява всички възможни комбинации от двойка числа в интервала от две дадени числа. На изхода се отпечатва, коя поред е първата комбинацията, чийто сбор от числата е равен на дадено магическо число. Ако няма нито една комбинация отговаряща на условието се отпечатва съобщение, че не е намерено.
// Вход
// Функцията получава масив от 3 елемента:
// •	Първи – начало на интервала – цяло число в интервала [1...999]
// •	Втори – край на интервала – цяло число в интервала [по-голямо от първото число...1000]
// •	Трети – магическото число – цяло число в интервала [1...10000]
// Изход
// На конзолата трябва да се отпечата един ред, според резултата:
// •	При първата намерена комбинация, чиито сбор на числата е равен на магическото число:
// o	"Combination N:{пореден номер} ({първото число} + {второ число} = {магическото число})"
// •	Ако не е намерена комбинация отговаряща на условието:
// o	"{броят на всички комбинации} combinations - neither equals {магическото число}"

// Estimated time: 60min; Start: 23:00; End: 00:30;

// function sumTwoNumbers(input) {
//   let firstNum = Number(input[0]);
//   let secondNum = Number(input[1]);
//   let magicNum = Number(input[2]);
//   let numberCombination = 0;
//   isFound = false;

//   for (let i = firstNum; i <= secondNum; i++) {
//     for (let e = firstNum; e <= secondNum; e++) {
//       numberCombination++;
//       if (i + e === magicNum) {
//         console.log(
//           `Combination N:${numberCombination} (${i} + ${e}) = ${magicNum}`
//         );
//         isFound = true;
//         break;
//       }
//     }
//     if (isFound) {
//       break;
//     }
//   }
//   if (!isFound) {
//     console.log(
//       `${numberCombination} combinations - neither equals ${magicNum}`
//     );
//   }
// }

// sumTwoNumbers(["88", "888", "2000"]);

// Ани обича да пътува и иска тази година да посети няколко различни дестинации. Като си избере дестинация, ще прецени колко пари ще й трябват, за да отиде до там и ще започне да спестява. Когато е спестила достатъчно, ще може да пътува.
// Функцията получава масив, като всеки път ще се четат първо дестинацията и минималния бюджет, който ще е нужен за пътуването.
// След това ще се четат няколко суми, които Ани спестява като работи и когато успее да събере достатъчно за пътуването, ще заминава, като на конзолата трябва да се изпише:
//  "Going to {дестинацията}!"
// Когато е посетила всички дестинации, които иска, вместо дестинация ще въведе "End" и програмата ще приключи.

// Estimated time: 60-80min; Start: 10:00; End: 12:30;

// function travelling(input) {
//   let index = 0;
//   let destination = input[index];
//   index++;
//   let price = Number(input[index]);
//   index++;

//   while (destination !== "End") {
//     let allSavings = 0;
//     while (allSavings < price) {
//       let saving = Number(input[index]);
//       index++;
//       allSavings += saving;
//     }
//     console.log(`Going to ${destination}!`);
//     destination = input[index];
//     index++;
//     price = Number(input[index]);
//     index++;
//   }
// }

// travelling([
//   "Greece",
//   "1000",
//   "200",
//   "200",
//   "300",
//   "100",
//   "150",
//   "240",
//   "Spain",
//   "1200",
//   "300",
//   "500",
//   "193",
//   "423",
//   "End",
// ]);

//Напишете функция, която получава цяло число n и отпечатва пирамида от числа, като в примерите:
// 7 -> 1
//     2 3
//     4 5 6
//     7

//Write a function that receives a string and a repeat count n. The function should return a new string (the old one repeated n times).
// function repeat(input) {
//   let txt = input[0];
//   let num = Number(input[1]);
//   let result = "";

//   if (num > 0) {
//     for (let i = 0; i < num; i++) {
//       result += txt;
//     }
//     console.log(result);
//   }
// }
// repeat(["abc", "3"]);

// Write a function that calculates the total price of an order and prints it on the console. The function should receive one of the following products: coffee, coke, water, snacks; and a quantity of the product. The prices for a single piece of each product are:
// •	coffee - 1.50
// •	water - 1.00
// •	coke - 1.40
// •	snacks - 2.00
// Print the result formatted to the second decimal place.
//Estimated time: 20min; Start: 10:00; End: 10:15;

// function order(input) {
//   let product = input[0];
//   let quantity = Number(input[1]);

//   let price = 0;
//   let result = "";

//   for(let i = 0; i < quantity; i++) {
//     result = (price * quantity).toFixed(2);
//   switch (product) {
//     case "coffee": price = 1.50;break;
//     case "water": price = 1.00;break;
//     case "coke": price = 1.40;break;
//     case "snacks": price = 2.00;break;
//     }
//   }
//   console.log(result);
// }

// order(["water", "3"]);

// Write a function that receives three parameters – two numbers and an operator (string) – and calculates the result depending on the operator. Operator can be 'multiply', 'divide', 'add' or 'subtract'. Try to solve this task using arrow functions.•	Use a switch statement for the different operators.
//Estimated time: 20min; Start: 11:00; End: 11:17;

// simpleCalculation = (input) => {
//   let num1 = Number(input[0]);
//   let num2 = Number(input[1]);
//   let operator = input[2];

//   let result = "";

//   switch (operator) {
//     case "multiply":
//       result = num1 * num2;
//       break;
//     case "divide":
//       result = num1 / num2;
//       break;
//     case "add":
//       result = num1 + num2;
//       break;
//     case "subtract":
//       result = num1 - num2;
//       break;
//   }
//   console.log(result);
// };

// simpleCalculation(["50", "13", "subtract"]);

//Write a function, that checks whether the result of the multiplication numOne * numTwo * numThree is positive or negative. Try to do this WITHOUT multiplying the 3 numbers.The input comes as parameters named numOne, numTwo, numThree.•	If the result is positive, print on the console -> "Positive"
//•	Otherwise, print -> "Negative"
//Estimated time: 30min; Start: 11:30; End: 11:50;

// function positive(input) {
//   let num1 = Number(input[0]);
//   let num2 = Number(input[1]);
//   let num3 = Number(input[2]);

//   let result = "";

//   if (
//     (num1 >= 0 && num2 >= 0 && num3 >= 0) ||
//     (num1 < 0 && num2 < 0 && num3 < 0) ||
//     (num1 < 0 && num2 < 0 && num3 > 0) ||
//     (num1 > 0 && num2 < 0 && num3 < 0) ||
//     (num1 < 0 && num2 > 0 && num3 < 0)
//   ) {
//     result = `Positive`;
//   } else {
//     result = `Negative`;
//   }
//   console.log(result);
// }
// positive(["-5", "1", "1"]);

//Write a function that receives three integers and prints the smallest number. Use an appropriate name for the function.
//Estimated time: 10min; Start: 14:00; End: 14:07;

// function min(numbers) {
//   let minNum = Number(numbers[0]);
//   for (let i = 0; i < numbers.length; i++) {
//     if (minNum > numbers[i]) {
//       minNum = numbers[i];
//     }
//   }
//   console.log(minNum);
// }
// min(["-10", "5", "23", "-15"]);

// You will receive three integer numbers.
// Write a function sum() to calculate the sum of the first two integers and a function subtract(), which subtracts the result of the function the sum() and the third integer.
//Estimated time: 40min; Start: 15:00; End: 15:55;

// function sumAndSubtract(numbers) {
//   let sumResult = Number("");
//   let finalResult = Number("");
//   let lastNumber = Number(numbers[2]);

//   for (let i = 0; i < numbers.length - 1; i++) {
//     sumResult += Number(numbers[i]);
//   }

//   finalResult = sumResult - lastNumber;
//   console.log(finalResult);
// }

// sumAndSubtract(["23", "6", "10"]);

//Write a function that receives two characters and prints on a single line all the characters in between them according to the ASCII code. Keep in mind that the second character code might be before the first one inside the ASCII table.
//Estimated time: 30min; Start: 09:10; End: 09:30;

// function characters(input) {
//   let start = String(input[0]);
//   let end = String(input[1]);

//   for (var i = start.charCodeAt() + 1; i < end.charCodeAt(); i++) {
//     console.log(String.fromCharCode(i));
//   }
// }

// characters(["a", "d"]);

//You will receive a single number. You have to write a function, that returns the sum of all even and all odd digits from that number.
//Estimated time: 30min; Start: 10:00; End: 10:30;

function sumEvenOdd(input) {
  let num = input[0];
  let even = 0;
  let odd = 0;
  resultOdd = 0;
  resultEven = 0;

  for (let i = 0; i < num.length; i++) {
    let currentNum = Number(num[i]);
    if (currentNum % 2 === 0) {
      even = currentNum;
      resultEven += even;
    }
    if (currentNum % 2 !== 0) {
      odd = currentNum;
      resultOdd += odd;
    }
  }
  console.log(`Odd sum = ${resultOdd}, Even sum = ${resultEven}`);
}

sumEvenOdd(["3495892137259234"]);
