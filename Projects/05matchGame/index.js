(async function initFunc() {
  const imgURLGameOver = "images/gameover.png";
  const imgURLWin = "images/win.png";
  const flipAnimationDuration = 1200;
  const showPopUp = 1000;
  const imgURLNewRecord = "images/newRecord.jpg";

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
  let currentMatchedCards = 0;
  let currentTime = 0;
  let HTMLCards = "";
  let loopAllCards;

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
    $popupWinLoseNotResponse: document.querySelector(".sysMsg"),
    $popupImage: document.querySelector(".popupContent"),
  };

  let sysMsg = {
    resultGameOver: "Game Over",
    resultWin: "Win",
    notResponseAPI: "Error: Site not found",
  };

  const cssClass = {
    centerSysMsg: "centerSysMsg",
    rotateOnClick: "rotateOnClick",
    disableRepeatClick: "disableRepeatClick",
    disableClick: "disableClick",
  };

  // Check resolution
  function isMobile() {
    let isWidthLess700px = false;
    let windowWidth = window.innerWidth;
    if (windowWidth <= 700) {
      isWidthLess700px = true;
    } else {
      isWidthLess700px = false;
    }

    return isWidthLess700px;
  }

  window.onresize = handleMobileSupport;

  // Resolution < 700 -> nothing to show
  function handleMobileSupport() {
    if (!isMobile()) {
      document.querySelector(".pageGame").style.display = "block";
      document.querySelector(".sysMsgNotMobile").style.display = "none";
    } else {
      document.querySelector(".pageGame").style.display = "none";
      document.querySelector(".sysMsgNotMobile").style.display = "block";
    }
  }

  handleMobileSupport();
  // Init game and start first game
  await handleRequestDeckId();
  await handleRequestCards();
  await handleStartingGame();

  // Get deckId from API
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

  // Get cards from API
  async function handleRequestCards() {
    return fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=8`)
      .then((response) => response.json())
      .then((data) => {
        savedCards.push(data.cards);
        let mergeSavedCards = savedCards.flat(1);

        // Copy the 8 cards from API - make an array with 16 cards - 8 pairs of cards
        let cloneSavedCards = [...mergeSavedCards];

        allFaceCards = mergeSavedCards.concat(cloneSavedCards);
        allFaceCards
          .map((cardFace) => {
            allSavedCards.push(cardFace.images.png);

            // Randomize the cards from API
            return allSavedCards.sort(() => Math.random() - 0.5);
          })
          .join("");
      })
      .catch(() => {
        notResponseApi();
      });
  }

  // show popup with sysMsg - not response from API
  function notResponseApi() {
    document.querySelector(".pageGame").innerHTML = "";
    uiElements.$popupContainer.style.display = "block";
    uiElements.$popupWinLoseNotResponse.innerHTML = sysMsg.notResponseAPI;
    uiElements.$popupWinLoseNotResponse.classList.add(cssClass.centerSysMsg);
  }

  // If "x" is clicked, hide the popup
  function closePopup() {
    document.querySelector(".close").onclick = () => {
      uiElements.$popupContainer.style.display = "none";
    };
  }

  // Generate the number of card slots
  async function handleStartingGame() {
    uiElements.$containerCards.innerHTML = "";

    generateCardSlots();
    flipOnClick();
    generateTable();
    uiElements.$resetBtn.addEventListener("click", resetBtn);

    loopAllCards = () => {
      let cards = document.querySelectorAll(".flipCard");
      for (let i = 0; i < cards.length; i++) {
        // On eventedCard -eventListener
        cards[i].addEventListener("click", matchFlipCards);
      }
      flipCounter();
    };
    loopAllCards();
  }

  // Function to generate the slots with backCard and faceCard(from API)
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

  // Function to add and remove class on click
  function flipOnClick() {
    matchFlipCards = function (event) {
      // Make target = parent element (in this case parent = (".flipcard"))
      let clickedCard = event.currentTarget;

      // If clickedCard is different from the first clicked card - add class and unlock the card
      if (clickedCard !== cardOne && !lockCards) {
        clickedCard.classList.add(cssClass.rotateOnClick);

        // If first clicked card = false; first clicked card will be the card user click
        if (!cardOne) {
          return (cardOne = clickedCard);
        }
        // Second clicked card = next clicked card
        cardTwo = clickedCard;
        lockCards = true;
        // Select first clicked card img and next one clicked card img
        let firstFace = cardOne.querySelector(".faceCard img").src;
        let secondFace = cardTwo.querySelector(".faceCard img").src;
        // Add func to selected 2 clicked
        matchCards(firstFace, secondFace);
      }
    };
  }

  // Increment ui element on every click when flip a card
  function flipCounter() {
    flipCount = 0;
    // Select the new created back cards
    uiElements.$backCard = document.querySelectorAll(".backCard");

    for (let i = 0; i < uiElements.$backCard.length; i++) {
      let $upgradeBackCard = uiElements.$backCard[i];
      $upgradeBackCard.onclick = () => {
        flipCount++;
        uiElements.$flipCounter.innerHTML = flipCount;
      };
    }
  }

  // If two cards img matched
  function matchCards(firstFace, secondFace) {
    let cardOneContainsClass = cardOne.classList.contains(
      cssClass.rotateOnClick
    );
    let cardTwoContainsClass = cardTwo.classList.contains(
      cssClass.rotateOnClick
    );

    // It these two clicked cards have same value, remove function on click and show clicked cards` faces; do not rotate
    if (firstFace === secondFace) {
      // If cards are same - avoid comparing them again with other cards
      if (cardOneContainsClass && cardTwoContainsClass) {
        cardOne.classList.add(cssClass.disableRepeatClick);
        cardTwo.classList.add(cssClass.disableRepeatClick);
      }

      // Increment the match counter if two clicked cards are the same
      matchCardsCounter++;

      // If user flips all cards and have remaininng time, show pop up msg with time and flips and image win
      if (matchCardsCounter === maxPairCards && timeCount > 0) {
        uiElements.$secondCounter.innerHTML = timeCount;

        stopTimer();

        // Show popup msg with win img and game statistic
        popupContent(timeCount, flipCount, imgURLWin, sysMsg.resultWin);

        // When popup msg is shown, disable cards to be clicked
        uiElements.$containerCards.classList.add(cssClass.disableClick);
      }

      cardOne.removeEventListener("click", matchFlipCards);
      cardTwo.removeEventListener("click", matchFlipCards);

      // Make them = "" so to take next two clicked cards and compare them, not to compare with the previous one
      cardOne = cardTwo = "";

      lockCards = false;

      // It these two clicked cards do not have same value, wait 2 seconds and remove class rotate;( after 2 second rotate and show clicked cards` backs)
    } else {
      setTimeout(() => {
        cardOne.classList.remove(cssClass.rotateOnClick);
        cardTwo.classList.remove(cssClass.rotateOnClick);

        // Make them = "" so to take next two clicked cards and compare them, not to compare with the previous one
        cardOne = cardTwo = "";
        lockCards = false;
      }, flipAnimationDuration);
    }
  }

  // Popup - game statistic
  function popupContent(time, flips, img, result) {
    // Save data from popup
    savedDataFromGame.push({
      result: `${result}`,
      flips: parseInt(`${flips}`),
      time: parseInt(`${time}`),
      matchedCards: parseInt(`${matchCardsCounter}`),
    });

    // Save the result of game in local storage
    localStorage.setItem("gameResults", JSON.stringify(savedDataFromGame));

    generateNewTableRowGameResult();

    // Show popup in 1 sec => to see the last flipped card face
    setTimeout(() => {
      uiElements.$popupContainer.style.display = isMobile() ? "none" : "block";
    }, showPopUp);

    uiElements.$secondCounter.innerHTML = time;
    uiElements.$numbersOfFlips.innerHTML = flips;

    uiElements.$popupImage.style.backgroundImage = `url('${img}')`;

    popupCheckNewRecord(savedDataFromGame, img);

    closePopup();
  }

  function generateNewTableRowGameResult() {
    // Get results from local storage
    takeResultLocalStorage = localStorage.getItem("gameResults");
    // Make current result to be object
    currentResult = JSON.parse(takeResultLocalStorage);

    // Add new table row with data from last game
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

  // Generate new table with data from local storage
  function generateTable() {
    takeResultLocalStorage = localStorage.getItem("gameResults");
    // Make current result to be object
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

  // Logic to take the most matched cards for minimal time
  function popupCheckNewRecord(gameResults, img) {
    gameResults.map((currentResult) => {
      let mostMatchedCards = currentMatchedCards < currentResult.matchedCards;
      let maxTime = currentTime < currentResult.time;
      uiElements.$heightScore.style.display = "none";
      uiElements.$popupImage.style.backgroundImage = `url('${img}')`;

      // Check numbers of matched cards
      if (mostMatchedCards) {
        currentMatchedCards = currentResult.matchedCards;
        uiElements.$heightScore.style.display = "block";
        uiElements.$popupImage.style.backgroundImage = `url('${imgURLNewRecord}')`;
      } // Check if all cards are flipped and if remaining time is more
      else if (currentMatchedCards === maxPairCards && maxTime) {
        currentTime = currentResult.time;
        uiElements.$heightScore.style.display = "block";
        uiElements.$popupImage.style.backgroundImage = `url('${imgURLNewRecord}')`;
      }
    });
  }

  // Function to show the popup msg when 1 min is gone
  function startTimer() {
    timerFunction = setInterval(() => {
      timeCount--;
      uiElements.$timeCounter.innerHTML = timeCount;

      // If time is up and user does not collect all cards pairs = pop up msg(gameover)
      if (timeCount === 0 && matchCardsCounter < maxPairCards) {
        // Show popup msg with gameover img and game statistic
        popupContent(
          timeCount,
          flipCount,
          imgURLGameOver,
          sysMsg.resultGameOver
        );

        // When popup msg is shown, disable cards to be clicked
        uiElements.$containerCards.classList.add(cssClass.disableClick);

        stopTimer();
      }
    }, 1000);
  }
  startTimer();

  function stopTimer() {
    clearInterval(timerFunction);
  }

  function resetBtn() {
    // Stop the timer
    stopTimer();
    // Make timer starts again
    timeCount = 60;
    uiElements.$timeCounter.innerHTML = timeCount;
    startTimer();

    // Make flips start again
    uiElements.$flipCounter.innerHTML = 0;
    flipCounter();

    // Allow cards to be clicked again, when reset is clicked
    uiElements.$containerCards.classList.remove(cssClass.disableClick);

    // Hide the popup msg
    uiElements.$popupContainer.style.display = "none";

    // Delete the old one HTML
    uiElements.$containerCards.innerHTML = "";

    // Shuffle the cards again and create new HTML with new 16 card slots
    allSavedCards.sort(() => Math.random() - 0.5);
    generateCardSlots();

    // Clear the match counter
    matchCardsCounter = 0;

    loopAllCards();
  }
})();
