function filter(arr, func) {
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(func(arr[i]) === true){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function inArray(b) {
    return function(x){
        if(~b.indexOf(x)) return true;
    }
}

function inBetween(min, max) {
    return function (x) {
        if (x < min || x > max) return false;
        return true;
    }
}


var arr = [1, 2, 3, 4, 5, 6, 7];
alert(filter(arr, function(a) {
    return a % 2 === 0
})); // 2,4,6
alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6
alert( filter(arr, inArray([1, 2, 10])) ); // 1,2