function Machine(power) {
    this._enabled = false;
    var self = this;
    this.enable = function() {
        // используем внешнюю переменную вместо this
        self._enabled = true;
    };
    this.disable = function() {
        self._enabled = false;
    };
}

function CoffeeMachine(power) {
    Machine.apply(this, arguments);
    function onReady() {
        alert( 'Кофе готов!' );
    }
    this.run = function() {
        if (!this._enabled) {
            throw new Error("Кофеварка выключена");
        }
        setTimeout(onReady, 1000);
    };
}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.run(); // ошибка, кофеварка выключена!
coffeeMachine.enable();
coffeeMachine.run(); // ...Кофе готов!

