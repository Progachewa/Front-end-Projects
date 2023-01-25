let uiElements = {
  $containerCards: document.querySelector(".containerCards"),
  $popupContainer: document.querySelector(".popup"),
  $closePopup: document.querySelector(".close"),
  $faceCard: document.querySelector(".faceCard"),
  $flipCounter: document.querySelector(".flipCounter"),
  $backCard: document.querySelector(".backCard"),
};

//onclick close the popup msg
uiElements.$closePopup.onclick = function () {
  uiElements.$popupContainer.style.display = "none";
};

let savedCards = [];
let deckId = "";
let allSavedCards = [];

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

      let newFaceHTML = allFaceCards
        .map((cardFace) => {
          return allSavedCards.push(cardFace.images.png);
        })
        .join("");

      return newFaceHTML;
    });
})();

//generate the new HTML with the slots and flips cards on;
let slotsContainer = [];

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

  //generate  HTML with new 16 slots;
  for (let i = 0; i < slotsContainer.length; i++) {
    let upgradeSlot = slotsContainer[i];
    let HTML = `<div class="cardSlot" data-col="${upgradeSlot.col}" data-row="${
      upgradeSlot.row
    }">
    <div class="flipCard">
        <div class="backCard">
            <img src="images/cardback_158.png" alt="backCard"/>
        </div>
        <div class="faceCard" id="${i + 1}">
          <img src="${allSavedCards[i]}" />
        </div>
    </div>`;

    uiElements.$containerCards.innerHTML += HTML;
    uiElements.$backCard = document.querySelector(".backCard");
  }
  flipOnClick();
}

//setTimeout to wait for the API and then invoke the func, because I use the data from API;
let invokeGenerateSlots = setTimeout(generateSlotsAndAttr, 1000);

let flipCount = 0;

function flipOnClick() {
  let flipCards = document.querySelectorAll(".flipCard");
  for (let i = 0; i < flipCards.length; i++) {
    let selectedCard = flipCards[i];
    selectedCard.onclick = function () {
      selectedCard.classList.toggle("rotateOnClick");
    };
    flipCounter();
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
