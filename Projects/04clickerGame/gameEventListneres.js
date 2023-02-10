P.uiElements.$increaseBtn.addEventListener("click", () => {
  P.increaseMoneyCounterHTML();
});

P.generateAllUpgradeBtns();

let $upgradeBtns = P.uiElements.$allBtnsPlayerUpgrade;
// loop throught all upgraded buttons,and on every one put on click function applyUpgrade();
for (let i = 0; i < $upgradeBtns.length; i++) {
  $upgradeBtns[i].onclick = function () {
    P.applyUpgrades(i);
  };
}
