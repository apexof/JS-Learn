var accumulator = new Accumulator(1); // начальное значение 1
accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению
alert( accumulator.value ); // выведет текущее значение









function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        this.value += +prompt("Прибавьте", 0);
    }
}