function sum (){
    var sum = 0;
    // if (!arguments.length) return 0; и без этого норм
    for (var i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    console.log(sum);
}




sum();// = 0
sum(1);// = 1
sum(1, 2);// = 3
sum(1, 2, 3);// = 6
sum(1, 2, 3, 4);// = 10