"use strict";

function CoffeeMachine(power) {

  function getBoilTime() {
    return 1000;
  }

  function onReady() {
    alert( 'Кофе готов!' );
  }

  this.run = function() {
    setTimeout(onReady, getBoilTime());
  };

}

var coffeeMachine = new CoffeeMachine(1000);
coffeeMachine.run();

//-------------------------------------------------------
//Приватные методы объявляются как function declaration и не имеют доступа к this
// публичные методы объявляются как function expression,  объявляются через this и имеют доступ к this внутри себя