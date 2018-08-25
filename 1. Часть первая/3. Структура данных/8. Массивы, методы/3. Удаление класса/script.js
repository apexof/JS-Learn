function filterRangeInPlace (arr, min, max){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < min || arr[i] > max){
            arr.splice(i, 1);
            i--;
        }
    }
}



arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert( arr ); // массив изменился: остались [3, 1]