(async function initFunc() {
  let savedCards = [];
  let deckId = "";
  let allSavedCards = [];
  let allFaceCards;
  let slots = 16;
  let cardOne;
  let cardTwo;
  let matchFlipCards;
  let flipCount = 0;
  //todo: it does not work with const;
  let timeCount = 60;
  let timerFunction;
  let slotsContainer = [];
  let matchCardsCounter = 0;
  let maxPairCards = 8;
  let savedDataFromGame = JSON.parse(localStorage.getItem("gameResults")) || [];
  let imgURL;
  let takeResultLocalStorage;
  let currentResult;
  let lockCards = false;
  let newHTMLTable;
  const imgURLGameOver = "images/gameover.png";
  const imgURLWin = "images/win.png";
  const animationDuration = 1200;
  const showPopUp = 1000;
  let currentMatchedCards = 0;
  let heightScore;

  let uiElements = {
    $containerCards: document.querySelector(".containerCards"),
    $popupContainer: document.querySelector(".popup"),
    $closePopup: document.querySelector(".close"),
    $faceCard: document.querySelectorAll(".faceCard"),
    $flipCounter: document.querySelector(".flipCounter"),
    $backCard: document.querySelector(".backCard"),
    $timeCounter: document.querySelector(".timeCounter"),
    $resetBtn: document.querySelector(".resetBtn"),
    $gameResults: document.querySelector(".gameResults"),
  };

  let sysMsg = {
    popup: document.querySelector(".popup"),
    popupWinLose: document.querySelector(".sysMsg"),
    popupImage: document.querySelector(".popupContent"),
    resultGameOver: "Game Over",
    resultWin: "Win",
  };

  //wait response from API;
  await handleRequestDeckId();
  await handleRequestCards();

  //take data from API;
  async function handleRequestDeckId() {
    return fetch(
      `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`
    )
      .then((response) => response.json())
      .then((data) => {
        deckId = data.deck_id;
      })
      .catch(() => {
        document.body.innerHTML =
          "<div style='text-align: center; margin: 25%; font-size: 40px;'>Error: Site not found</div>";
      });
  }

  async function handleRequestCards() {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=8`)
      .then((response) => response.json())
      .then((data) => {
        savedCards.push(data.cards);
        let mergeSavedCards = savedCards.flat(1);

        //copy the 8 cards from API;
        let cloneSavedCards = [...mergeSavedCards];

        //make an array with 16 cards - 8 pairs of cards;
        allFaceCards = mergeSavedCards.concat(cloneSavedCards);
        allFaceCards
          .map((cardFace) => {
            allSavedCards.push(cardFace.images.png);

            //randomize the cards from API;
            return allSavedCards.sort(() => Math.random() - 0.5);
          })
          .join("");

        //call it here, because I wait for data from API!
        handleStartingGame();
      })
      .catch(() => {
        document.body.innerHTML =
          "<div style='text-align: center; margin: 25%; font-size: 40px;'>Error: Site not found</div>";
      });
  }

  //if "x" is clicked, hide the popup;
  function closePopup() {
    document.querySelector(".close").onclick = () => {
      uiElements.$popupContainer.style.display = "none";
    };
  }

  //generate the number of card slots;
  function handleStartingGame() {
    uiElements.$containerCards.innerHTML = "";
    for (let i = 0; i < slots; i++) {
      slotsContainer.push(slots[i]);
    }
    generateCardSlots();
    flipOnClick();
    generateTable();
  }

  //function to generate the slots with backCard and faceCard(from API);
  function generateCardSlots() {
    for (let i = 0; i < slotsContainer.length; i++) {
      HTMLCards = `<div class="cardSlot" >
        <div class="flipCard">
            <div class="backCard">
                <img src="images/cardback_158.png" alt="backCard"/>
            </div>
            <div class="faceCard">
              <img src="${allSavedCards[i]}"/>
            </div>
        </div>`;

      uiElements.$containerCards.innerHTML += HTMLCards;
    }
  }

  //function to add and remove class on click;
  function flipOnClick() {
    console.log(allSavedCards);
    let flipCards = document.querySelectorAll(".flipCard");
    for (let i = 0; i < flipCards.length; i++) {
      let selectedCard = flipCards[i];

      matchFlipCards = function (event) {
        // make target = parent element (in this case parent = (".flipcard"))
        let clickedCard = event.currentTarget;

        //if clickedCard is different from the first clicked card - add class and unlock the card;
        if (clickedCard !== cardOne && !lockCards) {
          clickedCard.classList.add("rotateOnClick");

          //if first clicked card = false; first clicked card will be the card user click;
          if (!cardOne) {
            return (cardOne = clickedCard);
          }
          //second clicked card = next clicked card;
          cardTwo = clickedCard;
          lockCards = true;
          //select first clicked card img and next one clicked card img;
          let cardOneImg = cardOne.querySelector(".faceCard img").src;
          let cardTwoImg = cardTwo.querySelector(".faceCard img").src;
          //add func to selected 2 clicked;
          matchCards(cardOneImg, cardTwoImg);
        }
      };
      selectedCard.addEventListener("click", matchFlipCards);
    }
    flipCounter();
  }

  //increment ui element on every click when flip a card;
  function flipCounter() {
    flipCount = 0;
    //select the new created back cards;
    uiElements.$backCard = document.querySelectorAll(".backCard");

    for (let i = 0; i < uiElements.$backCard.length; i++) {
      let upgradeBackCard = uiElements.$backCard[i];
      upgradeBackCard.onclick = () => {
        flipCount++;
        uiElements.$flipCounter.innerHTML = flipCount;
      };
    }
  }

  //if two cards img matched;
  function matchCards(cardOneImg, cardTwoImg) {
    //it these two clicked cards have same value, remove function on click and show clicked cards` faces; do not rotate;
    if (cardOneImg === cardTwoImg) {
      //increment the match counter if two clicked cards are the same;
      matchCardsCounter++;

      //if user flips all cards and have remaininng time, show pop up msg with time and flips and image win;
      if (matchCardsCounter === maxPairCards && timeCount > 0) {
        uiElements.$timeCounter.innerHTML = "";
        uiElements.$timeCounter.innerHTML += timeCount;

        stopTimer();

        //show popup msg with win img and game statistic;
        result = sysMsg.resultWin;
        imgURL = imgURLWin;
        popupContent(timeCount, flipCount, imgURL);

        // when popup msg is shown, disable cards to be clicked;
        uiElements.$containerCards.classList.add("disableClick");
      }

      cardOne.removeEventListener("click", matchFlipCards);
      cardTwo.removeEventListener("click", matchFlipCards);

      //make them = "" so to take next two clicked cards and compare them, not to compare with the previous one;
      cardOne = cardTwo = "";

      lockCards = false;

      //it these two clicked cards do not have same value, wait 2 seconds and remove class rotate;( after 2 second rotate and show clicked cards` backs);
    } else {
      setTimeout(() => {
        cardOne.classList.remove("rotateOnClick");
        cardTwo.classList.remove("rotateOnClick");

        //make them = "" so to take next two clicked cards and compare them, not to compare with the previous one;
        cardOne = cardTwo = "";
        lockCards = false;
      }, animationDuration);
    }
  }

  //popup - game statistic;
  function popupContent(time, flips, img) {
    //save data from popup;
    console.log(savedDataFromGame);
    savedDataFromGame.push({
      result: `${result}`,
      flips: parseInt(`${flips}`),
      time: parseInt(`${time}`),
      matchedCards: parseInt(`${matchCardsCounter}`),
    });

    //save the result of game in local storage;
    localStorage.setItem("gameResults", JSON.stringify(savedDataFromGame));

    generateNewTableRowGameResult();

    //show popup in 1 sec => to see the last flipped card face;
    setTimeout(() => {
      uiElements.$popupContainer.style.display = "block";
    }, showPopUp);

    sysMsg.popupWinLose.innerHTML = "";
    sysMsg.popupWinLose.innerHTML = `Time left: ${time}s | Flips: ${flips} <span class="close">&times;</span>`;
    sysMsg.popupImage.style.backgroundImage = `url('${img}')`;

    popupCheckNewRecord(savedDataFromGame);

    closePopup();
  }

  function generateNewTableRowGameResult() {
    //get results from local storage;
    takeResultLocalStorage = localStorage.getItem("gameResults");
    //make current result to be object;
    currentResult = JSON.parse(takeResultLocalStorage);

    //add new table row with data from last game;
    uiElements.$gameResults.innerHTML += `<tr>
                        <td>${
                          currentResult[currentResult.length - 1].result
                        }</td>
                        <td>${
                          currentResult[currentResult.length - 1].flips
                        }</td>
                        <td>${currentResult[currentResult.length - 1].time}</td>
                        <td>${
                          currentResult[currentResult.length - 1].matchedCards
                        }</td>
                      </tr>`;
  }

  //generate new table with data from local storage;
  function generateTable() {
    takeResultLocalStorage = localStorage.getItem("gameResults");
    //make current result to be object;
    currentResult = JSON.parse(takeResultLocalStorage);
    // console.log(currentResult.length);

    document.querySelector(".gameResults").innerHTML = "";
    newHTMLTable = `<table class="gameResults">
      <tr>
          <th>Win/Lose</th>
          <th>Flips</th>
          <th>Remaining Time</th>
          <th>Matched Cards</th>
      </tr>
    </table>`;

    if (currentResult?.length) {
      for (let i = 0; i < currentResult.length; i++) {
        newHTMLTable += `<tr>
                          <td>${currentResult[i].result}</td>
                          <td>${currentResult[i].flips}</td>
                          <td>${currentResult[i].time}</td>
                          <td>${currentResult[i].matchedCards}</td>
                        </tr>`;
      }
    }
    document.querySelector(".gameResults").innerHTML += newHTMLTable;
  }

  //logic to take the most matched cards for minimal time;
  function popupCheckNewRecord(gameResults) {
    gameResults.map((currentResult) => {
      let mostMatchedCards = currentMatchedCards < currentResult.matchedCards;

      //check numbers of matched cards;
      if (mostMatchedCards) {
        currentMatchedCards = currentResult.matchedCards;
        heightScore = `<br/>
        <span style="font-size: 20px;">New record</span>`;
      } else {
        heightScore = "";
      }
    });
    sysMsg.popupWinLose.innerHTML += `${heightScore}`;
  }

  //function to show the popup msg when 1 min is gone;
  function startTimer() {
    timerFunction = setInterval(() => {
      timeCount--;
      uiElements.$timeCounter.innerHTML = timeCount;

      // if time is up and user does not collect all cards pairs = pop up msg(gameover);
      if (timeCount === 0 && matchCardsCounter < maxPairCards) {
        //show popup msg with gameover img and game statistic;
        imgURL = imgURLGameOver;
        result = sysMsg.resultGameOver;
        popupContent(timeCount, flipCount, imgURL);

        // when popup msg is shown, disable cards to be clicked;
        uiElements.$containerCards.classList.add("disableClick");

        stopTimer();
      }
    }, 1000);
  }
  startTimer();

  function stopTimer() {
    clearInterval(timerFunction);
  }

  function resetBtn() {
    uiElements.$resetBtn.addEventListener("click", () => {
      // stop the timer
      stopTimer();
      // make timer starts again;
      timeCount = 60;
      uiElements.$timeCounter.innerHTML = timeCount;
      startTimer();

      //make flips start again;
      uiElements.$flipCounter.innerHTML = 0;
      flipCounter();

      // allow cards to be clicked again, when reset is clicked;
      uiElements.$containerCards.classList.remove("disableClick");

      // hide the popup msg;
      uiElements.$popupContainer.style.display = "none";

      //delete the old one HTML;
      uiElements.$containerCards.innerHTML = "";

      //shuffle the cards again and create new HTML with new 16 card slots;
      allSavedCards.sort(() => Math.random() - 0.5);
      generateCardSlots();

      //clear the match counter;
      matchCardsCounter = 0;

      flipOnClick();
    });
  }
  resetBtn();
})();
