(function(){

    function get() {
        var x = document.getElementsByTagName('span');
        for(var i = 0; i < x.length; i++){
            x[i];
        }
    }

    function query() {
        var y = document.querySelectorAll("span");
        for(var i = 0; i < y.length; i++){
            y[i];
        }
    }


    function bench(f, times){
        var d = new Date;
        for(var i = 0; i < times; i++){
            f();
        }
        var time = new Date - d;
        log(f.name + ": " + time);
    }
    bench(query, 100);
    bench(get, 100);


})();