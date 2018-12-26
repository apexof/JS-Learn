var arr = [5, 4, 3, 8, 0];

var filtered = filterRange(arr, 3, 5);
// теперь filtered = [5, 4, 3]
// arr не изменился

alert(filtered);

function filterRange(arr, a, b) {
    var nArr = [];
    for (var i = 0; i < arr.length; i++){
        if(a <= arr[i] && b >= arr[i])
            nArr.push(arr[i]);
    }
    return nArr;
}