var arr = [];
for (var i = 2; i <= 100; i++){
    arr.push(i);
}

for (i = 0; i < arr.length; i++){
    for (var j = i+1; j < arr.length; j++) {
        if (arr[j]%arr[i] === 0) arr[j] = undefined;
    }
}
var summ = 0;
for (var k = 0; k < arr.length; k++) {
    if(arr[k]){
        summ += arr[k];
    }
}

console.log(arr);




