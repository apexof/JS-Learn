// Получить дробную часть числа (неточно) (остаток от деления на 1)
var f = 12.34%1;

//Отсечь 0, "", NaN, null, undefined, false
// if(val){
    // code
// }

// Действительно точная проверка на число, которая не считает числом
// строку из пробелов, логические и специальные значения, а также отсекает Infinity

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

// получить дробную частьб числа

function getDecimal(num) {
    var str = "" + num;
    var zeroPos = str.indexOf(".");
    if (zeroPos == -1) return 0;
    str = str.slice(zeroPos);
    return +str;
}
// ~n = -(n+1)
//Просто запомните: '~' читается как «не минус один»
/*if (~str.indexOf("get")) {
    alert( 'совпадение есть!' );
}*/



// проверка на пустоту объекта
function isEmpty(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}


//Проверка поддерживает ли браузер indexOf
if ([].indexOf) {
    //code}
}

