/*function random(min, max) {
    var lenMax = String(max).length;
    var ranNumb;
    do{
        ranNumb = String(Math.random()).slice(2, 2 + lenMax);
    } while(ranNumb >= max || ranNumb < min);
    return ranNumb;
}*/

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}


console.log(randomInteger(999, 1002));