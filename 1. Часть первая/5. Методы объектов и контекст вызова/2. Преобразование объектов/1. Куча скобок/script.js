function sum (a){
    var summa = a;
    function me (a){
        summa += a;
        return me;
    }
    me.toString = function() {
        return summa;
    };
    return me;
}

//sum(1)(2);
alert(sum(0)(1)(2)(3)(4)(5)); //== 6; // 1 + 2 + 3



alert(sum(5)(-1)(2));
alert(sum(6)(-1)(-2)(-3));
alert(sum(0)(1)(2)(3)(4)(5));