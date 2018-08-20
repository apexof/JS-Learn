function removeClass(obj, name){
    var arr = obj.className.split(" ");

    for (var i = 0; i < arr.length; i++){
        if(arr[i] == name){
            arr.splice(i, 1);
            i--;
        }
    }
    obj.className = arr.join(" ");
    console.log(obj);
}


obj = {
    className: 'my menu menu we'
};
removeClass(obj, 'menu');
//alert( obj.className ); // 'my'