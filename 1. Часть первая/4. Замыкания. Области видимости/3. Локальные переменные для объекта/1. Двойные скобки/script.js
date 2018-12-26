

function sum(a){
    return function(b){
        return a+b;
    }
}












sum(1)(2);// = 3
sum(5)(-1);// = 4