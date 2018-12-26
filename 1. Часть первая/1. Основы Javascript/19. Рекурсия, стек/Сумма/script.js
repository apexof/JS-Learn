/*function sumTo (n){
    var result = 0;
    for(var i = 1; i <= n; i++){
        result = result + i;
    }
    return result;
}*/


function sumTo (n){
    if(n > 1){
        return n + sumTo(n-1);
    }
    return 1;
}

/*
function sumTo (n){
    return n*(n+1)/2;
}
*/

