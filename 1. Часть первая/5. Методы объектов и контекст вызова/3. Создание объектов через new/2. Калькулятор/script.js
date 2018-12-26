


var calculator = new Calculator();
calculator.read();

alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() );



function Calculator() {
    this.sum = function(){
        return this.a + this.b
    };
    this.mul = function () {
        return this.a * this.b
    };
    this.read = function () {
        this.a = +prompt("Введите первое число", "");
        this.b = +prompt("Введите второе число", "");
    };
}