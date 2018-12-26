/*function unique(arr) {
    for(var i = 0; i < arr.length; i++) {
        if(~arr.indexOf(arr[i], i+1)){
            arr.splice(i, 1);
            i--;
        }
    }
}*/

function unique(arr) {
    var o = {};
    for (var i = 0; i < arr.length; i++) {
        o[arr[i]] = arr[i];
    }
    return Object.keys(o);
}

var strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", "8-()"
];

console.log( unique(strings) ); // кришна, харе, 8-()