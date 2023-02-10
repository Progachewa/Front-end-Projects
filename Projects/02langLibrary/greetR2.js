//създаване на IIFE за по-безопасен и преизползваем код!
(function (globalObject, jQueryObject) {
  class GreetingsTypes {
    constructor() {
      this.supportedLanguages = ["en", "es", "it", "bg"];
      this.informalGreetings = {
        en: "Hi",
        es: "Hola",
        it: "Ciao",
        bg: "Здравей",
      };
      this.formalGreetings = {
        en: "Hello",
        es: "Saludos",
        it: "Ciao",
        bg: "Здравейте",
      };
      this.logMessages = {
        en: "Logged in",
        es: "Inicio sesion",
        it: "loggato",
        bg: "Логнати съобщения",
      };

      this.firstName = "";
      this.lastName = "";
      this.language = "en";

      //   this.validate();
      //   this.log();
    }
    setNames(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
      if (this.firstName === undefined && this.lastName === undefined) {
        throw "Missing name";
      }
    }
    fullname() {
      return this.firstName + " " + this.lastName;
    }
    validate() {
      if (this.supportedLanguages.indexOf(this.language) === -1) {
        throw "Invalid language";
      }
    }
    informalGreeting() {
      return this.informalGreetings[this.language] + " " + this.firstName;
    }
    formalGreeting() {
      return this.formalGreetings[this.language] + " " + this.fullname();
    }
    greet(formal) {
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
    }
    log() {
      if (console) {
        console.log(this.logMessages[this.language] + " " + this.fullname());
      }
      return this;
    }
    setLanguage(lang) {
      console.log(lang);
      this.language = lang;
      this.validate();

      return this;
    }
    changeSelector(selector, formal) {
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
    }
  }

  globalObject.GreetR = globalObject.G$ = new GreetingsTypes();
})(window, jQuery);
