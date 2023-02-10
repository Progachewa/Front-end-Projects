// let todo = fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     data.map((todos) => {
//       console.log(todos);
//     });
//   });

// console.log(todo);

// async, await, try catch - syntax:
// let doWork = (resolve, reject) => {
//   let a = 1 + 1;
//   if (a === 2) {
//     resolve(`the task is done`);
//   } else {
//     reject(`the task is not done`);
//   }
// };

// let afterDoWork = (resolve, reject) => {
//   let a = 2 + 2;
//   if (a === 4) {
//     resolve(`the second task is done`);
//   } else {
//     reject(`the second task is not done`);
//   }
// };

// let asyncFunc = async () => {
//   try {
//     await new Promise(doWork).then((message) => {
//       console.log(message);
//     });
//     await new Promise(afterDoWork).then((message) => {
//       console.log(message);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// asyncFunc();
