// //TASK 1 - GAME WITH LLAMA!
// //function to map all messages inside the game
let gameMsgs = {
  start: "Do you want to go the arena?",
  selectWeapon: "What weapon do you choose: knife or axe or slingshot?",
  selectAttack:
    "The llama deciced to play dirty and hit your back with its tail. You can choose: 1.attack right in the head, 2.cut off one of its legs or 3.run away from the arena! Write the number of your choice!",
  selectRunAway: `You chose to run away from the arena.Are you sure? Type "yes" or "no"`,
};

let sysMsgs = {
  runAway: "You chose to run away from the arena!",
  chosenWeapon: `You chose to fight the llama Spaska with a `,
  selectedStart: "You chose to go to the arena for a battle",
  llamaWin: "You failed to hit the llama. So llama win the game! ",
  winGame: "The llama lost too much blood and died. YOU WIN THE GAME! :)",
  gameOver: "You are so stupid. You close the game, so you are losing! :(",
  invalidInfo:
    "Your choice is to close tha game or you typed invalid infromation. Do you want to close the game? If so, click OK,",
};

function clickToStart() {
  let elShowGameResult = document.getElementById("resultTheGame");
  let falseResponse = () => {
    return sysMsgs.invalidInfo;
  };

  //first step of the game
  let playGame = () => {
    return new Promise((resolve, reject) => {
      let startGame = confirm(gameMsgs.start);
      if (startGame) {
        resolve(sysMsgs.selectedStart);
      } else {
        reject(falseResponse());
      }
    });
  };

  // second step of the game if the first is resolved
  let whatWaepon = () => {
    return new Promise((resolve, reject) => {
      let chooseWeapon = prompt(gameMsgs.selectWeapon);
      let weapons = ["knife", "axe", "slingshot"];
      if (weapons.indexOf(chooseWeapon) >= 0) {
        resolve(sysMsgs.chosenWeapon + chooseWeapon);
      } else {
        reject(falseResponse());
      }
    });
  };

  let whoIsWinning = (chosenWeapon, role) => {
    let playerPoints = [100, 80, 60, 80];
    let llamaPoints = [20, 10, 30, 100];

    let randomPlayerPoints =
      playerPoints[Math.floor(Math.random() * playerPoints.length)];
    let randomLlamaPoints =
      llamaPoints[Math.floor(Math.random() * llamaPoints.length)];

    //1 or 2 = knife or axe
    if (role === "player") {
      return (
        (chosenWeapon === 1 && randomPlayerPoints > randomLlamaPoints) ||
        (chosenWeapon === 2 && randomPlayerPoints > randomLlamaPoints)
      );
    }
    if (role === "llama") {
      return (
        (chosenWeapon === 1 && randomPlayerPoints < randomLlamaPoints) ||
        (chosenWeapon === 2 && randomPlayerPoints < randomLlamaPoints)
      );
    }
  };

  // third step of the game if the second is resolved
  let theFight = () => {
    return new Promise((resolve, reject) => {
      let selectedOption = parseInt(prompt(gameMsgs.selectAttack));

      if (whoIsWinning(selectedOption, "player")) {
        resolve(sysMsgs.winGame);
      }
      if (whoIsWinning(selectedOption, "llama")) {
        resolve(sysMsgs.llamaWin);
      }

      if (selectedOption === 3) {
        resolve(prompt(gameMsgs.selectRunAway));
      } else {
        reject(falseResponse());
      }
    });
  };

  let asyncFunc = async () => {
    try {
      await playGame().then((message) => {
        alert(message);
      });
      await whatWaepon().then((message) => {
        alert(message);
      });
      await theFight().then((message) => {
        if (message === "yes") {
          alert(sysMsgs.runAway);
          elShowGameResult.innerHTML = sysMsgs.gameOver;
        } else if (message === "no") {
          asyncFunc();
        } else {
          alert(message);
          elShowGameResult.innerHTML = message;
        }
      });
    } catch (error) {
      let choice = confirm(error);
      if (choice) {
        elShowGameResult.innerHTML = sysMsgs.gameOver;
      } else {
        asyncFunc();
      }
    }
  };
  asyncFunc();
}

// //----------------------TASK 2 - GAME WITH MATH OPERATIONS!---------------------------
// (function () {
//   let playerStep = 1;
//   let rightAnswer = () => {
//     playerStep += 1;
//     return "Your answer is right. You continue to the next task! :)";
//   };

//   let falseAnswer = () => {
//     return `Your answer is not right. Try again!`;
//   };
//   const calculationMapResult = {
//     task1: {
//       expression: `Write the result of: 1 + 1 = ?`,
//       result: 2,
//     },
//     task2: {
//       expression: `Write the result of: 2 + 2 = ?`,
//       result: 4,
//     },
//     task3: {
//       expression: `Write the result of: 3 + 3 = ?`,
//       result: 6,
//     },
//     task4: {
//       expression: `Write the result of: 4 + 4 = ?`,
//       result: 8,
//     },
//   };

//   let playGame = (task) => {
//     let res = prompt(task.expression);
//     return new Promise((resolve, reject) => {
//       parseInt(res) === task.result
//         ? resolve(rightAnswer())
//         : reject(falseAnswer());
//     });
//   };

//   let asyncFunc = async () => {
//     try {
//       if (playerStep <= 4) {
//         await playGame(calculationMapResult[`task${playerStep}`]).then(
//           (message) => {
//             alert(message);
//             asyncFunc();
//           }
//         );
//       }
//     } catch (error) {
//       alert(error);
//       // if the answer is false, return the task again!
//       asyncFunc();
//     }
//   };

//   asyncFunc();
// })();

// let playerPoints = [100, 80, 60, 80];
// let llamaPoints = [20, 10, 30, 100];

// let randomPlayerPoints =
//   playerPoints[Math.floor(Math.random() * playerPoints.length)];

// let randomLlamaPoints =
//   llamaPoints[Math.floor(Math.random() * llamaPoints.length)];

// console.log(randomLlamaPoints);
// console.log(randomPlayerPoints);
