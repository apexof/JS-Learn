//Числа Фиббоначи
function fibCycle (n){
    var FN = 1;
    var SN = 1;
    var NN = 0;
    for(var i = 3; i <= n; i++){
        NN = FN + SN;
        FN = SN;
        SN = NN;
    }
    return SN;
}

//Числа Фиббоначи через рекурсию
function fib (n){
    if(n === 1) return 1;
    if(n === 2) return 1;
    return fib(n-1) + fib(n-2);
}
console.log(fib(4));