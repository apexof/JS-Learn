/*function formatDate(date) {
    var typeArg = getClass(date);
    return obj[typeArg](date);
}

var obj = {
    String: function(date){
        date = Date.parse(date);
        date = new Date(date);
        return dateToStr(date);
     /!*   var split = date.split("-");
        date = split[2] + "." + split[1] + "." + split[0]%100;
        return date;*!/
    },
    Number: function(date){
        date = new Date(date * 1000);
        return dateToStr(date);
        //return dateToStr(date);
    },
    Array: function(date){
        var y = date[0]%100;
        var m = (++date[1] < 10) ? "0" + date[1] : date[1];
        var d = (date[2] < 10) ? "0" + date[2] : date[2];
        date = d + "." + m + "." + y;
        return date;
    },
    Date: function(date){
        return dateToStr(date);
    }
};

function dateToStr(date) {
    var y = date.getFullYear()%100;
    var m = date.getMonth();
    var d = date.getDate();
    m = (++m < 10) ? "0" + m : m;
    d = (d < 10) ? "0" + d : d;
    date = d + "." + m + "." + y;
    return date;
}

function getClass(obj) {
    return {}.toString.call(obj).slice(8, -1);
}*/

alert( formatDate('2011-10-02') ); // 02.10.11
alert( formatDate(12345678908) ); // 14.02.09
alert( formatDate([2014, 0, 1]) ); // 01.01.14
alert( formatDate(new Date(2014, 0, 1)) ); // 01.01.14




// Ответ в учебнике

function formatDate(date) {
    if (typeof date === 'number') {
        // перевести секунды в миллисекунды и преобразовать к Date
        date = new Date(date * 1000);
    } else if (typeof date === 'string') {
        // строка в стандартном формате автоматически будет разобрана в дату
        date = new Date(date);
    } else if (Array.isArray(date)) {
        date = new Date(date[0], date[1], date[2]);
    }
    // преобразования для поддержки полиморфизма завершены,
    // теперь мы работаем с датой (форматируем её)

    return date.toLocaleString("ru", {day: '2-digit', month: '2-digit', year: '2-digit'});
}