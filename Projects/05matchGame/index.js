let uiElements = {
  $containerCards: document.querySelector(".containerCards"),
  $popupContainer: document.querySelector(".popup"),
  $closePopup: document.querySelector(".close"),
};

//onclick close the popup msg
uiElements.$closePopup.onclick = function () {
  uiElements.$popupContainer.style.display = "none";
};

let savedCards = [];
let deckId = "";
(async function getData() {
  await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then((response) => response.json())
    .then((data) => {
      deckId = data.deck_id;
    });

  await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=8`)
    .then((response) => response.json())
    .then((data) => {
      savedCards.push(data.cards);
      let mergeSavedCards = savedCards.flat(1);
      console.log(mergeSavedCards);

      //take a random card from API;
      let randomCardFace = [];
      let randomCol = Math.floor(Math.random() * 8);
      let randomRow = Math.floor(Math.random() * 8);
      console.log(mergeSavedCards[randomRow]);
      console.log(mergeSavedCards[randomCol]);
    });
})();

//generate the new HTML with the slots;
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

  // generate  HTML with new 16 slots;
  for (let i = 0; i < slotsContainer.length; i++) {
    let upgradeSlot = slotsContainer[i];
    let HTML = `<div class="cardSlot" data-col="${upgradeSlot.col}" data-row="${upgradeSlot.row}">
    <div class="flipCard">
        <div class="backCard">
            <img src="images/cardback_158.png" alt="backCard"/>
        </div>
        <div class="faceCard">
          <img src="images/gameover.png" alt="faceCard"/>
        </div>
    </div>`;
    uiElements.$containerCards.innerHTML += HTML;
  }
}
generateSlotsAndAttr();

//flip a card on click;
let flipCards = document.querySelectorAll(".flipCard");
for (let i = 0; i < flipCards.length; i++) {
  flipCards[i].onclick = function () {
    flipCards[i].classList.toggle("rotateOnClick");
  };
}
