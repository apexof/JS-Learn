function camelize(str) {
    var arr = str.split("");
    for(var i = 0; i < arr.length; i++){
        if (arr[i] == "-") {
            var bg = arr[i+1].toUpperCase();
            arr.splice(i, 2, bg);
        }
    }
    str = arr.join("");
    console.log(str);
}


// решение с сайта
/*function camelize(str) {
    var arr = str.split('-');
    for (var i = 1; i < arr.length; i++) {
        // преобразовать: первый символ с большой буквы
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    console.log(arr);

}*/




camelize("background-color"); //== 'backgroundColor';
camelize("list-style-image"); //== 'listStyleImage';
camelize("-webkit-transition"); //== 'WebkitTransition';