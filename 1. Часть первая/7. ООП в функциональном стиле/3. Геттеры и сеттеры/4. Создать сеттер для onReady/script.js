function CoffeeMachine(power, capacity) {
    var waterAmount = 0;
    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }
    this.setWaterAmount = function(amount) {
        // ... проверки пропущены для краткости
        waterAmount = amount;
    };
    this.getWaterAmount = function(amount) {
        return waterAmount;
    };
    function onReady() {
        alert( 'Кофе готов!' );
    }
    this.run = function(fn) {
        setTimeout(function(){onReady()}, getTimeToBoil());
    };
    this.setOnReady = function (fn) {
        onReady = fn;
    };
}




var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(150);
coffeeMachine.run();
coffeeMachine.setOnReady(function() {
    var amount = coffeeMachine.getWaterAmount();
    alert( 'Готов кофе: ' + amount + 'мл' ); // Кофе готов: 150 мл
});

