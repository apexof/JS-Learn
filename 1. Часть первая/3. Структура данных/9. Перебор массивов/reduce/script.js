arr = [ 1, 2, 3, 4, 5 ]; // [ 1, 3, 6, 10, 15 ]
getSums([-2,-1,0,1]); // = [-2,-3,-3,-2].

var arr1 = getSums( arr );// = [ 1, 1+2, 1+2
console.log(arr1);



function getSums(arr) {
    var arr1 = [];
    var i = 0;
    for(i = 0; i < arr.length; i++){
        arr1[i] = arr.reduce(function(sum, currentVal, index) {
            if (index - 1 < i){
                return sum + currentVal
            } else {
                return sum;
            }
        });
    }
    return arr1;
}

// Решение из учебника

/*
function getSums(arr) {
    var result = [];
    if (!arr.length) return result;

    var totalSum = arr.reduce(function(sum, item) {
        result.push(sum);
        return sum + item;
    });
    result.push(totalSum);

    return result;
}

alert(getSums([1,2,3,4,5])); // 1,3,6,10,15
alert(getSums([-2,-1,0,1])); // -2,-3,-3,-2*/
