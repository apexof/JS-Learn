function Machine(power) { //
    var self = this;
    self._enabled = false;
    this.enable = function() {
        self._enabled = true;
    };
}

function CoffeeMachine(power) {
    var self1 = this;
    Machine.apply(this, arguments); // this == coffee, arguments = power
    function onReady() {
        alert( 'Кофе готов!' );
    }
    this.run = function() {  // this == coffee
        var x = this;
        setTimeout(onReady, 1000);
    };
}

var coffee = new CoffeeMachine(10000);
coffee.enable();
coffee.run();


