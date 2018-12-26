alert(getLastDayOfMonth(2012, 1));

function getLastDayOfMonth(y, m) {
    var dt = new Date(y, m+1);
    dt.setDate(0);
    return dt.getDate();
}