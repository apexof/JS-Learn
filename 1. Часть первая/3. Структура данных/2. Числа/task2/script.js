/*
function  getDecimal(num){
    var fraction = num > 0 ? num - Math.floor(num) : Math.ceil(num) - num;
    fraction = Math.round(fraction * 100000) / 100000;
    return fraction;
}
*/


function getDecimal(num) {
    var str = "" + num;
    var zeroPos = str.indexOf(".");
    if (zeroPos == -1) return 0;
    str = str.slice(zeroPos);
    return +str;
}

console.log( getDecimal(12.345) ); // 0.345
console.log( getDecimal(1.2) ); // 0.2
console.log( getDecimal(-1.2) ); // 0.2