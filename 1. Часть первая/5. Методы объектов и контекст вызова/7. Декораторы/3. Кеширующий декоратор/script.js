function f(x) {
    return Math.random() * x; // random для удобства тестирования
}

var obj = {};

function makeCaching(f) {
    return function(num){
        if (obj[num]){
            return obj[num];
        }else{
            obj[num] = f.call(this, num);
            return obj[num];
        }
    }
}

f = makeCaching(f);

var a, b;

a = f(1);
b = f(1);
alert( a == b ); // true (значение закешировано)

b = f(2);
alert( a == b ); // false, другой аргумент => другое значение