
/*function mySort(arr) {
    for(var i = 0; i < arr.length - 1; i++){
        for(var j = i + 1; j < arr.length; j++){
            if(arr[j] > arr[i]) {
                var x = arr[i];
                arr[i] = arr[j];
                arr[j] = x;
            }
        }
    }
}*/


function fn(a, b) {
    return b - a;
}



var arr = [5, 2, 9, 1, -10, 8, -100, 999];
arr.sort(fn);
// отсортируйте?

alert( arr ); // 8, 5, 2, 1, -10