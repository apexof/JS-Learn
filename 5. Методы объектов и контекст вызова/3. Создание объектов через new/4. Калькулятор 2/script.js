var powerCalc = new Calculator;
powerCalc.addMethod("*", function(a, b) {
    return a * b;
});
powerCalc.addMethod("/", function(a, b) {
    return a / b;
});
powerCalc.addMethod("**", function(a, b) {
    return Math.pow(a, b);
});

var result = powerCalc.calculate("2 ** 3");
alert( result ); // 8

function Calculator() {
    this.calculate = function (str) {
        var firstWhiteSpasePos = str.indexOf(" ");
        var secondWhiteSpasePos = str.indexOf(" ", firstWhiteSpasePos + 1);
        var a = +str.slice(0, firstWhiteSpasePos);
        var b = +str.slice(secondWhiteSpasePos);
        var operator = str.slice(firstWhiteSpasePos + 1, secondWhiteSpasePos);
        for(var i = 0; i < this.methods.length; i++){
            if(this.methods[i].name === operator)
                return this.methods[i].func(a, b);
        }
    };

    this.methods = [{
        name: "+",
        func : function (a, b) {
            return a + b;
        }
    },{
        name: "-",
        func : function (a, b) {
            return a - b;
        }
    }];

    this.addMethod = function (operator, func) {
        this.methods.push({
            name: operator,
            func: func
        })
    }
}


// в учебнике
/*function Calculator() {

    var methods = {
        "-": function(a, b) {
            return a - b;
        },
        "+": function(a, b) {
            return a + b;
        }
    };

    this.calculate = function(str) {

        var split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]

        if (!methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return methods[op](a, b);
    }

    this.addMethod = function(name, func) {
        methods[name] = func;
    };
}

var calc = new Calculator;

calc.addMethod("*", function(a, b) {
    return a * b;
});
calc.addMethod("/", function(a, b) {
    return a / b;
});
calc.addMethod("**", function(a, b) {
    return Math.pow(a, b);
});

var result = calc.calculate("2 ** 3");
alert( result ); // 8*/
