var arr = ["HTML", "JavaScript", "CSS"];
var newArr = mySort(arr);
// отсортируйте?

alert( newArr ); // 8, 5, 2, 1, -10


function mySort(arr) {
    var rArr = arr.slice();
    rArr.sort();
    return rArr;
}



