var arr = [];
for (var i = 2; i <= 100; i++){
    arr.push(i);
}



for (i = 0; i < arr.length; i++){
    if(arr[i]%2 == 0) arr[i] = undefined;
}
console.log(arr);