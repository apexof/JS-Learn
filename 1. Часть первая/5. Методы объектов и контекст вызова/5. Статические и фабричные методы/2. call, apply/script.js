/*function sumArgs() {
    arguments.red = [].reduce;
    return arguments.red(function(a, b) {
        return a + b;
    });
}*/

function sumArgs() {
    var red = [].reduce;
    return red.call(arguments, function (a, b) {
        return a + b;
    })
}

alert( sumArgs(1, 2, 3, 4) ); // 6, аргументы переданы через запятую, без массива


