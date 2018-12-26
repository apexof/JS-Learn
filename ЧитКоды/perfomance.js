var i = 0;
function fast() {
    i++;
}
function slow() {
    with(i) {}
    i++;
}
var time = performance.now();
while (i < 1000000) fast();
alert( "Без with: " + (performance.now() - time) );

var time1 = performance.now();
i = 0;
while (i < 1000000) slow();
alert( "С with: " + (performance.now() - time1) );

//-----------------------------------------------------------
