var date = new Date(2012, 0, 3);  // 3 янв 2012
alert( getLocalDay(date) );       // вторник, выведет 2

function getLocalDay(dt) {
    // var arrWD = ["Пн", "Вт","Ср","Чт", "Пт", "Сб", "Вс"];
    return (dt.getDay() === 0) ? 7 : dt.getDay();
}