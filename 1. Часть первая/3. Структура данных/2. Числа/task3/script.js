function fibBinet(n) {
    var fi = (1 + Math.sqrt(5)) / 2;
    var result = pow(fi, n) / Math.sqrt(5);
    return result;
}

function pow(x, n) {
    var x2 = x;
    for (var i = 1; i < n; i++){
        x2 = x2 * x;
    }
    return x2;
}
console.log(fibBinet(77));
//console.log(pow(2, 3));