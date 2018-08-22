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


//Функция сортировки
arr.sort(fn);
function fn (a, b) {
    return a - b; // сортировка по возрастанию, b-a по убыванию
}
//или
function fn1(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
}

//join склеивает массив в строку
new Array(4).join("ля"); // ляляля. Код для повторения симвоолов


//////////////////////// Счетчик........
function makeCounter() {
    var currentCount = 1;

    return function() { // (**)
        return currentCount++;
    };
}

var counter = makeCounter(); // (*)

// каждый вызов увеличивает счётчик и возвращает результат
alert( counter() ); // 1
alert( counter() ); // 2
alert( counter() ); // 3

// создать другой счётчик, он будет независим от первого
var counter2 = makeCounter();
alert( counter2() ); // 1
