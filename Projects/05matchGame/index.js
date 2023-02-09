(async function initFunc() {
  let isNotMobile = window.matchMedia(
    "only screen and (min-width: 700px)"
  ).matches;
  let savedCards = [];
  let deckId = "";
  let allSavedCards = [];
  let allFaceCards;
  let slots = 16;
  let cardOne;
  let cardTwo;
  let matchFlipCards;
  let flipCount = 0;
  let timeCount = 60;
  let timerFunction;
  let matchCardsCounter = 0;
  let maxPairCards = 8;
  let savedDataFromGame = JSON.parse(localStorage.getItem("gameResults")) || [];
  let takeResultLocalStorage;
  let currentResult;
  let lockCards = false;
  let newHTMLTable;
  const imgURLGameOver = "images/gameover.png";
  const imgURLWin = "images/win.png";
  const flipAnimationDuration = 1200;
  const showPopUp = 1000;
  const imgURLNewRecord = "images/newRecord.jpg";
  let currentMatchedCards = 0;
  let result = "";
  let currentTime = 0;

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
    $secondCounter: document.querySelector(".counterSeconds"),
    $numbersOfFlips: document.querySelector(".counterFlips"),
    $heightScore: document.querySelector(".heightScoreMsg"),
  };

  let sysMsg = {
    popup: document.querySelector(".popup"),
    popupWinLoseNotResponse: document.querySelector(".sysMsg"),
    popupImage: document.querySelector(".popupContent"),
    resultGameOver: "Game Over",
    resultWin: "Win",
    notResponseAPI: "Error: Site not found",
  };

  //check the screen size - the game starts only for screens 700px+;
  if (isNotMobile) {
    //init game and start first game;
    await handleRequestDeckId();
    await handleRequestCards();
    await handleStartingGame();

    //get deckId from API;
    async function handleRequestDeckId() {
      return fetch(
        `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`
      )
        .then((response) => response.json())
        .then((data) => {
          deckId = data.deck_id;
        })
        .catch(() => {
          notResponseApi();
        });
    }

    //get cards from API;
    async function handleRequestCards() {
      return fetch(
        `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=8`
      )
        .then((response) => response.json())
        .then((data) => {
          savedCards.push(data.cards);
          let mergeSavedCards = savedCards.flat(1);

          //copy the 8 cards from API - make an array with 16 cards - 8 pairs of cards;
          let cloneSavedCards = [...mergeSavedCards];

          allFaceCards = mergeSavedCards.concat(cloneSavedCards);
          allFaceCards
            .map((cardFace) => {
              allSavedCards.push(cardFace.images.png);

              //randomize the cards from API;
              return allSavedCards.sort(() => Math.random() - 0.5);
            })
            .join("");
        })
        .catch(() => {
          notResponseApi();
        });
    }

    //show popup with sysMsg - not response from API;
    function notResponseApi() {
      document.querySelector(".pageGame").innerHTML = "";
      uiElements.$popupContainer.style.display = "block";
      sysMsg.popupWinLoseNotResponse.innerHTML = sysMsg.notResponseAPI;
      sysMsg.popupWinLoseNotResponse.classList.add("centerSysMsg");
    }

    //if "x" is clicked, hide the popup;
    function closePopup() {
      document.querySelector(".close").onclick = () => {
        uiElements.$popupContainer.style.display = "none";
      };
    }

    //generate the number of card slots;
    async function handleStartingGame() {
      uiElements.$containerCards.innerHTML = "";

      generateCardSlots();
      flipOnClick();
      generateTable();
      uiElements.$resetBtn.addEventListener("click", resetBtn);
    }

    //function to generate the slots with backCard and faceCard(from API);
    function generateCardSlots() {
      for (let i = 0; i < slots; i++) {
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
      let flipCards = document.querySelectorAll(".flipCard");
      for (let i = 0; i < flipCards.length; i++) {
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
        //on eventedCard -eventListener;
        flipCards[i].addEventListener("click", matchFlipCards);
      }
      flipCounter();
    }

    //increment ui element on every click when flip a card;
    function flipCounter() {
      flipCount = 0;
      //select the new created back cards;
      uiElements.$backCard = document.querySelectorAll(".backCard");

      for (let i = 0; i < uiElements.$backCard.length; i++) {
        let $upgradeBackCard = uiElements.$backCard[i];
        $upgradeBackCard.onclick = () => {
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
          uiElements.$secondCounter.innerHTML = timeCount;

          stopTimer();

          //show popup msg with win img and game statistic;
          popupContent(timeCount, flipCount, imgURLWin, sysMsg.resultWin);

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
        }, flipAnimationDuration);
      }
    }

    //popup - game statistic;
    function popupContent(time, flips, img, result) {
      //save data from popup;
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

      uiElements.$secondCounter.innerHTML = time;
      uiElements.$numbersOfFlips.innerHTML = flips;

      sysMsg.popupImage.style.backgroundImage = `url('${img}')`;

      popupCheckNewRecord(savedDataFromGame, img);

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
    function popupCheckNewRecord(gameResults, img) {
      gameResults.map((currentResult) => {
        let mostMatchedCards = currentMatchedCards < currentResult.matchedCards;
        let maxTime = currentTime < currentResult.time;
        uiElements.$heightScore.style.display = "none";
        sysMsg.popupImage.style.backgroundImage = `url('${img}')`;

        //check numbers of matched cards;
        if (mostMatchedCards) {
          currentMatchedCards = currentResult.matchedCards;
          uiElements.$heightScore.style.display = "block";
          sysMsg.popupImage.style.backgroundImage = `url('${imgURLNewRecord}')`;
        } //check if all cards are flipped and if remaining time is more;
        else if (currentMatchedCards === maxPairCards && maxTime) {
          currentTime = currentResult.time;
          uiElements.$heightScore.style.display = "block";
          sysMsg.popupImage.style.backgroundImage = `url('${imgURLNewRecord}')`;
        }
      });
    }

    //function to show the popup msg when 1 min is gone;
    function startTimer() {
      timerFunction = setInterval(() => {
        timeCount--;
        uiElements.$timeCounter.innerHTML = timeCount;

        // if time is up and user does not collect all cards pairs = pop up msg(gameover);
        if (timeCount === 0 && matchCardsCounter < maxPairCards) {
          //show popup msg with gameover img and game statistic;
          popupContent(
            timeCount,
            flipCount,
            imgURLGameOver,
            sysMsg.resultGameOver
          );

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
    }

    //if screen size is smaller than 700px - the game does not start;
  } else {
    document.querySelector(".pageGame").innerHTML = "";
    document.querySelector(".sysMsgNotMobile").style.display = "block";
  }
})();
