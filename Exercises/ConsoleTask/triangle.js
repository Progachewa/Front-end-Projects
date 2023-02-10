// Triangle of Numbers:
// Write a function, which receives a single number – n, and prints a triangle from 1 to n as in the examples.

function triangle(number) {
  for (let i = 1; i <= number; i++) {
    let result = "";
    for (let e = 1; e <= i; e++) {
      result += i;
    }
    console.log(result);
  }
}

triangle(6);
