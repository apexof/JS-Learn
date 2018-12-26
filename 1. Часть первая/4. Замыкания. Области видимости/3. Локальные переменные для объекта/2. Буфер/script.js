function makeBuffer() {
    /* ваш код */
    var str = "";
    return function (text) {
        if(arguments.length){
            str += text;
        }else{
            return str;
        }
    }

}

var buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

// получить текущее значение
alert( buffer() ); // Замыкания Использовать Нужно!
//Буфер должен преобразовывать все данные к строковому типу:

buffer(0);
buffer(1);
buffer(0);

alert( buffer() ); // '010'