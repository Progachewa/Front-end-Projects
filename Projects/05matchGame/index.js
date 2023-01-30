let uiElements = {
  $containerCards: document.querySelector(".containerCards"),
  $popupContainer: document.querySelector(".popup"),
  $closePopup: document.querySelector(".close"),
  $faceCard: document.querySelectorAll(".faceCard"),
  $flipCounter: document.querySelector(".flipCounter"),
  $backCard: document.querySelector(".backCard"),
  $timeCounter: document.querySelector(".timeCounter"),
  $resetBtn: document.querySelector(".resetBtn"),
};

let sysMsg = {
  popup: document.querySelector(".popup"),
};

//onclick close the popup msg
uiElements.$closePopup.onclick = function () {
  uiElements.$popupContainer.style.display = "none";
};

let savedCards = [];
let deckId = "";
let allSavedCards = [];
let allFaceCards;

(async function getData() {
  await fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
    .then((response) => response.json())
    .then((data) => {
      deckId = data.deck_id;
    });

  await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=8`)
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
          return allSavedCards.push(cardFace.images.png);
        })
        .join("");
    });
})();
//generate the new HTML with the slots and flips cards on;
function generateSlotsAndAttr() {
  uiElements.$containerCards.innerHTML = "";

  // set attributes row and col to each slot;
  for (let row = 1; row <= 4; row++) {
    for (let col = 1; col <= 4; col++) {
      let slotsAttr = {};
      slotsAttr.row = row;
      slotsAttr.col = col;
      slotsContainer.push(slotsAttr);
    }
  }
  generateCardSlots();
  flipOnClick();
}

//setTimeout to wait for the API and then invoke the func, because I use the data from API;
let invokeGenerateSlots = setTimeout(generateSlotsAndAttr, 1000);

let cardOne;
let cardTwo;
let matchFlipCards;

function flipOnClick() {
  let flipCards = document.querySelectorAll(".flipCard");
  for (let i = 0; i < flipCards.length; i++) {
    let selectedCard = flipCards[i];

    matchFlipCards = function (event) {
      // make target = parent element (in this case parent = (".flipcard"))
      let clickedCard = event.currentTarget;

      //if clickedCard is different from the first clicked card - add class;
      if (clickedCard !== cardOne) {
        clickedCard.classList.add("rotateOnClick");

        //if first clicked card = false; first clicked card will be the card user click;
        if (!cardOne) {
          return (cardOne = clickedCard);
        }
        //second clicked card = next clicked card;
        cardTwo = clickedCard;

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

//if two cards img matched;
function matchCards(cardOneImg, cardTwoImg) {
  //it these two clicked cards have same value, remove function on click and show clicked cards` faces; do not rotate;
  if (cardOneImg === cardTwoImg) {
    cardOne.removeEventListener("click", matchFlipCards);
    cardTwo.removeEventListener("click", matchFlipCards);
    console.log(cardOne, cardTwo);
    //make them = "" so to take next two clicked cards and compare them, not to compare with the previous one;
    cardOne = cardTwo = "";
    //it these two clicked cards do not have same value, wait 2 seconds and remove class rotate;( after 2 second rotate and show clicked cards` backs);
  } else {
    setTimeout(() => {
      cardOne.classList.remove("rotateOnClick");
      cardTwo.classList.remove("rotateOnClick");
      //make them = "" so to take next two clicked cards and compare them, not to compare with the previous one;
      cardOne = cardTwo = "";
    }, 2000);
  }
}

//increment ui element on every click when flip a card;
function flipCounter() {
  let flipCount = 0;
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

//function to show the popup msg when 1 min is gone;
let timeCount = 60;
let timerFunction;
function startTimer() {
  timerFunction = setInterval(() => {
    timeCount--;
    uiElements.$timeCounter.innerHTML = timeCount;
    if (timeCount === 0) {
      sysMsg.popup.style.display = "block";
      stopTimer();
    }
  }, 1000);
}
startTimer();

function stopTimer() {
  clearInterval(timerFunction);
}

//function to generate new 16 card Slots;
let HTML;
let slotsContainer = [];
let upgradeSlot;

function generateCardSlots() {
  for (let i = 0; i < slotsContainer.length; i++) {
    upgradeSlot = slotsContainer[i];

    //shuffle all cards;
    //allSavedCards.sort(() => Math.random() - 0.5);

    HTML = `<div class="cardSlot" data-col="${upgradeSlot.col}" data-row="${upgradeSlot.row}">
      <div class="flipCard">
          <div class="backCard">
              <img src="images/cardback_158.png" alt="backCard"/>
          </div>
          <div class="faceCard" id="${i}">
            <img src="${allSavedCards[i]}"/>
          </div>
      </div>`;

    uiElements.$containerCards.innerHTML += HTML;
  }
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

    //delete the old one HTML;
    uiElements.$containerCards.innerHTML = "";

    //shuffle the cards and create new HTML with new 16 card slots;

    //shuffle all cards;
    //allSavedCards.sort(() => Math.random() - 0.5);
    generateCardSlots();
    flipOnClick();
  });
}

resetBtn();
