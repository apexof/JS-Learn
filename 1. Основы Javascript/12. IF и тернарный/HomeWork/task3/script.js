var userAnswer = prompt("Введите число", '');
if (+userAnswer > 0){
    alert("1, Число больше нуля");
}else if (+userAnswer < 0){
    alert("-1, Число меньше нуля");
}else if (+userAnswer === 0){
    alert("0, Число равно нулю");
}else{
    alert('Это не число. Вы ввели:' + userAnswer + "Это было преобразованно в: " + +userAnswer);
}
