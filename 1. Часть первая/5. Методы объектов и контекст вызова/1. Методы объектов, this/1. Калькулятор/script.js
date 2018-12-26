var calculator = {
    sum: function(){
        return this.a + this.b
    },
    mul: function () {
        return this.a * this.b
    },
    read: function () {
        this.a = +prompt("Введите первое число", "");
        this.b = +prompt("Введите второе число", "");
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );