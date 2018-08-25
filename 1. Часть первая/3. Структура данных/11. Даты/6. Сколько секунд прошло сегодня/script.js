getSecondsToday() == 36000 // (3600 * 10)

function getSecondsToday(){
    var dt = new Date;
    var h = dt.getHours() * 3600;
    var m = dt.getMinutes() * 60;
    var s = dt.getSeconds();
    var summ = h + m + s;
    alert(summ);
}

/*function getSecondsToday() {
    var now = new Date();

    // создать объект из текущей даты, без часов-минут-секунд
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    var diff = now - today; // разница в миллисекундах
    return Math.floor(diff / 1000); // перевести в секунды
}*/

function getSecondsToTomorrow() {
    var now = new Date();

    // создать объект из текущей даты, без часов-минут-секунд
    var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    var diff = tomorrow - now; // разница в миллисекундах
    return Math.floor(diff / 1000); // перевести в секунды
}

/*
function getSecondsToTomorrow(){
    var dt = new Date;
    var h = (24 - dt.getHours()) * 3600;
    var m = (60 - dt.getMinutes()) * 60;
    var s = 60 - dt.getSeconds();
    var summ = h + m + s;
    alert(summ);
}*/
