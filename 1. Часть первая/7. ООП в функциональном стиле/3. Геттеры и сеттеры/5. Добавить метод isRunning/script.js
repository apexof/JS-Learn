function CoffeeMachine(power, capacity) {
    var waterAmount = 0;
    var WATER_HEAT_CAPACITY = 4200;
    var run = false;

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
        run = true;
        setTimeout(function(){
            run = false;
            onReady();
        }, getTimeToBoil());

    };
    this.setOnReady = function (fn) {
        onReady = fn;
    };
    this.isRunning = function () {
        return run;
    };
}




var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);
alert( 'До: ' + coffeeMachine.isRunning() ); // До: false
coffeeMachine.run();
alert( 'В процессе: ' + coffeeMachine.isRunning() ); // В процессе: true
coffeeMachine.setOnReady(function() {
    alert( "После: " + coffeeMachine.isRunning() ); // После: false
});
