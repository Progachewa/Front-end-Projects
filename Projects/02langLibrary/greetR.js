//създаване на IIFE за по-безопасен и преизползваем код!
(function (globalObject, jQueryObject) {
  //създавам function constructor
  let GreetR = function (firstName, lastName, language) {
    //създавам нов обект като резултат от function constructor. По този начин не трябва винаги да се пише "new"!
    //Return the result of a differerent function constructor!
    return new GreetR.init(firstName, lastName, language);
  };

  // closure!
  let supportedLanguages = ["en", "es", "it", "bg"];

  //informal greeting

  let informalGreetings = {
    en: "Hi",
    es: "Hola",
    it: "Ciao",
    bg: "Здравей",
  };

  //formal greeting
  let formalGreetings = {
    en: "Hello",
    es: "Saludos",
    it: "Ciao",
    bg: "Здравейте",
  };

  //logged messages
  let logMessages = {
    en: "Logged in",
    es: "Inicio sesion",
    it: "loggato",
    bg: "Логнати съобщения",
  };

  //тук в този обект слагам всеки един метод, който искам да използвам!
  GreetR.prototype = {
    fullname: function () {
      return this.firstName + " " + this.lastName;
    },

    validate: function () {
      // ако се напише език, който го няма, да хвърли грешка!
      if (supportedLanguages.indexOf(this.language) === -1) {
        throw "Invalid language";
      }
    },

    informalGreeting: function () {
      return informalGreetings[this.language] + " " + this.firstName;
    },

    formalGreeting: function () {
      return formalGreetings[this.language] + " " + this.fullname();
    },

    greet: function (formal) {
      let message;

      //if undefined or null it will be coerced to false;
      if (formal) {
        message = this.formalGreeting();
      } else {
        message = this.informalGreeting();
      }

      if (console) {
        console.log(message);
      }

      //this refers to the calling object at execution time;
      return message;
    },

    log: function () {
      if (console) {
        console.log(logMessages[this.language] + " " + this.fullname());
      }
      return this;
    },

    setLanguage: function (lang) {
      this.language = lang;
      this.validate();

      return this;
    },

    changeSelector: function (selector, formal) {
      if (!jQueryObject) {
        throw "jQuery is not supported";
      }
      if (!selector) {
        throw "Missing jQuery selector";
      }
      //TODO: Duplicate code with greet();
      console.log(this.greet(formal));
      let message;
      if (formal) {
        message = this.formalGreeting();
      } else {
        message = this.informalGreeting();
      }
      jQueryObject(selector).text(message);

      return this;
    },
  };

  GreetR.init = function (firstName, lastName, language) {
    this.firstName = firstName || "";
    this.lastName = lastName || "";
    this.language = language || "en";

    this.validate();
  };

  //всички обекти създадени в GreetR.init да сочат към GreetR.prototype;
  GreetR.init.prototype = GreetR;

  //Проверявам дали window-a съществува и globalObject.GreetR и globalObject.G$ ще сочат към GreetR;
  globalObject.GreetR = globalObject.G$ = GreetR;
})(window, jQuery);
