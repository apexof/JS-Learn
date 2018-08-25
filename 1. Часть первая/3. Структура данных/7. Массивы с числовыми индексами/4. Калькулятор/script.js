var newEl;
var arr = [];
var summ = 0;
while( isNumeric(newEl = prompt("Введите число", "")) ){
    arr.push(+newEl);
}

for (var i = 0; i < arr.length; i++){
    summ += arr[i];
}

console.log(summ);









function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}


