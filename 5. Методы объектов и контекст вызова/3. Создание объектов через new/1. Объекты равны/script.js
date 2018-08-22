var k = {};

function A() {
    return k;
}

function B() {
    return k;
}

var a = new A;
var b = new B;

alert( a === b ); // true

