(function (globalObject) {
  class GameDollars {
    constructor() {
      this.playerObject = {
        moneyCounter: 0,
        ownUpgrades: 0,
      };
      this.gameObject = {
        dollarPerClick: 1,
        dollarPerSecond: 0,
      };
      this.gameUpgrades = [];

      this.uiElements = {
        $increaseBtn: document.querySelector(".increase"),
        $moneyCounter: document.querySelector(".moneyCounter"),
        $containerUpgrades: document.querySelector(".allUpgrades"),
        $allBtnsPlayerUpgrade: document.querySelectorAll(".btn-player-upgrade"),
        $stepByClick: document.querySelector(".increaseBtn"),
        $stepBySec: document.querySelector(".idleCounter"),
      };
      this.sysMsg = {
        boughtUpgrade: "You bought this upgrade!",
      };
      // make this here, because it has to be more global in order to stop the setInterval function;
      this.setIntervalDollarPerSecond = false;
      this.autoGenerateGameUpgrades();
    }

    autoGenerateGameUpgrades() {
      let indexForTypeSec = 1;

      //create dynamic attributes to the upgraded buttons;
      for (let i = 1; i <= 100; i++) {
        if (i < 50) {
          this.gameUpgrades.push({
            id: i,
            type: "click",
            value: i * 2, // step by click;
            priceOfUpgrade: i * 10,
            ownedByPlayer: false,
          });
        } else {
          this.gameUpgrades.push({
            id: i,
            type: "sec",
            value: indexForTypeSec, // step by click;
            priceOfUpgrade: indexForTypeSec * 35,
            ownedByPlayer: false,
          });
          indexForTypeSec += 1;
        }
      }
    }

    applyUpgrades(indexUpgrade) {
      //select button with specific index;
      let $upgradeBtn = document.querySelector(
        `.select-specific-upgrade-btn-${indexUpgrade + 1}`
      );
      // take the new upgraded button with the upggraded attributes;
      let upgradeData = this.gameUpgrades[indexUpgrade];

      if ($upgradeBtn.dataset.ownedbyplayer === "false") {
        // when the button is clicked, it changes its attribute "ownedbyplayer" to true;
        $upgradeBtn.dataset.ownedbyplayer = true;
        // when the attribute "ownedbyplayer" is true - it becomes disabled, the money decreases with the price of the upgrade;
        $upgradeBtn.disabled = true;
        $upgradeBtn.innerHTML = `Type: ${$upgradeBtn.dataset.type} - ${this.sysMsg.boughtUpgrade}`;
        this.playerObject.moneyCounter -= $upgradeBtn.dataset.priceofupgrade;
        this.uiElements.$moneyCounter.innerHTML =
          this.playerObject.moneyCounter;
        this.checkBtnUpgradeDisabled();
      }

      // when type is clicked overwrite the HTML of the increaseBtn with the value;
      if (upgradeData.type === "click") {
        this.uiElements.$stepByClick.innerHTML = upgradeData.value;
        this.gameObject.dollarPerClick = upgradeData.value;
      }

      // when the type is second, create a function to increase money on every second with specific value, and if there is a setInterval active, I should clear it;
      if (upgradeData.type === "sec") {
        if (this.setIntervalDollarPerSecond) {
          clearInterval(this.setIntervalDollarPerSecond);
        }
        this.gameObject.dollarPerSecond = upgradeData.value;
        this.uiElements.$stepBySec.innerHTML = this.gameObject.dollarPerSecond;
        this.setIntervalDollarPerSecond = setInterval(() => {
          this.playerObject.moneyCounter += this.gameObject.dollarPerSecond;
          this.uiElements.$moneyCounter.innerHTML =
            this.playerObject.moneyCounter;
          this.checkBtnUpgradeDisabled();
        }, 1000);
      }

      this.hideUnnecessaryUpgradeBtns();
    }

    increaseMoneyCounterHTML() {
      // increment on every click;
      this.playerObject.moneyCounter += this.gameObject.dollarPerClick;
      //showing the increment on the specific element;
      this.uiElements.$moneyCounter.innerHTML = this.playerObject.moneyCounter;
      this.checkBtnUpgradeDisabled();
    }

    checkBtnUpgradeDisabled() {
      //go throught all buttons, and if the price of the upgrade is reached, make the button active - because the he has enought money to buy this upgrade;
      for (let i = 0; i < this.uiElements.$allBtnsPlayerUpgrade.length; i++) {
        let $upgradeBtn = this.uiElements.$allBtnsPlayerUpgrade[i];
        // when reached the price of the bonus, it becomes enabled;

        let isPlayerHaveEnoughMoney =
          this.playerObject.moneyCounter >=
          parseInt($upgradeBtn.dataset.priceofupgrade);

        let isPlayerDoesNotHaveThisUpgrade =
          $upgradeBtn.dataset.ownedbyplayer === "false";

        if (isPlayerHaveEnoughMoney && isPlayerDoesNotHaveThisUpgrade) {
          $upgradeBtn.disabled = false;
        } else {
          $upgradeBtn.disabled = true;
        }
      }
    }

    hideUnnecessaryUpgradeBtns() {
      // loop throught all buttons upgrade
      for (let i = 0; i < this.uiElements.$allBtnsPlayerUpgrade.length; i++) {
        let $upgradeBtn = this.uiElements.$allBtnsPlayerUpgrade[i];
        let btnDataType = $upgradeBtn.dataset.type;
        let btnDataValue = parseInt($upgradeBtn.dataset.value);

        //if the user does not click on the unlocked upgrade and click on the next one(unlocked as well), which function is to give to the user to make more money per click,hide the upgrade which price is lower;
        if (
          btnDataType === "click" &&
          btnDataValue < this.gameObject.dollarPerClick
        ) {
          $upgradeBtn.style.display = "none";
        } else if (
          btnDataType === "sec" &&
          btnDataValue < this.gameObject.dollarPerSecond
        ) {
          $upgradeBtn.style.display = "none";
        }
      }
    }

    generateAllUpgradeBtns() {
      //make the buttons container empty;
      this.uiElements.$containerUpgrades.innerHTML = "";
      // loop througth all of the dunamically created objects;
      for (let i = 0; i < this.gameUpgrades.length; i++) {
        let upgrade = this.gameUpgrades[i];
        //based on the number of the objects, I create new buttons with additional attributes;
        let HTML = `<button type="button" 
         class="select-specific-upgrade-btn-${upgrade.id} first btn btn-primary btn-lg btn-player-upgrade" data-id="${upgrade.id}" data-type="${upgrade.type}" data-value="${upgrade.value}" data-priceOfUpgrade="${upgrade.priceOfUpgrade}" data-ownedByPlayer="${upgrade.ownedByPlayer}" disabled>${upgrade.id} | $${upgrade.value} per ${upgrade.type} | $${upgrade.priceOfUpgrade}
        </button>`;

        if (upgrade.type === "click" && i === 48) {
          HTML += "<hr />";
        }
        //to the empty container - push the new created buttons - new HTML;
        this.uiElements.$containerUpgrades.innerHTML += HTML;
      }

      //In this.uiElements there are selected buttons, but these buttons are the old ones and because of that select again the buttons, and the buttons are now the new ones;
      this.uiElements.$allBtnsPlayerUpgrade = document.querySelectorAll(
        ".btn-player-upgrade"
      );
    }
  }

  globalObject.P = new GameDollars();
})(window);
