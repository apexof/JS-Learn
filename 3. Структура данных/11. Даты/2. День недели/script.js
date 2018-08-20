var date = new Date(2012,0,3);  // 3 января 2012
alert( getWeekDay(date) );      // Должно вывести 'вт'

function getWeekDay(dt) {
    //alert(dt);
    switch(dt.getDay()){
        case 0: return "Вс";
        case 1: return "Пн";
        case 2: return "Вт";
        case 3: return "Ср";
        case 4: return "Чт";
        case 5: return "Пт";
        case 6: return "Сб";
    }
}

//учебник
/*function getWeekDay(date) {
    var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

    return days[date.getDay()];
}

var date = new Date(2014, 0, 3); // 3 января 2014
alert( getWeekDay(date) ); // 'пт'*/
// или
// var date = new Date(2014, 0, 3); // 3 января 2014
// alert( date.toLocaleString('ru', {weekday: 'short'}) ); // 'Пт'