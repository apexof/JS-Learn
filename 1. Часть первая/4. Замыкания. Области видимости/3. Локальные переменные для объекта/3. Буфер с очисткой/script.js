function makeBuffer() {
    /* ваш код */
    var str = "";

    function buf (text) {
        if(arguments.length){
            str += text;
        }else{
            return str;
        }
    }

    buf.clear = function () {
        str = '';
    };
    return buf;
}

var buffer = makeBuffer();

buffer("Тест");
buffer(" тебя не съест ");
alert( buffer() ); // Тест тебя не съест

buffer.clear();

alert( buffer() ); // ""