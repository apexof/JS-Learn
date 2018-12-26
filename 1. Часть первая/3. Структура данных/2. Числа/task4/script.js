function getDecimal(num) {
    var str = "" + num;
    str = str.slice(2);
    return str;
}


function random(x) {
    var strX = String(x);
    var lenX = strX.length;
    var fraction;
    do{
        fraction = getDecimal(Math.random());
        fraction = fraction.slice(0, lenX);
    } while(fraction > x);
    return fraction;
}
console.log(random(15));