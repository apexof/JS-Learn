var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];
var c = aclean(arr);
console.log(c); // "воз,киборг,корсет" или "ЗОВ,гробик,сектор";

function aclean(arr) {
    var b = arr.slice();
    mySort(b);
    for(var i = 0; i < b.length; i++){
        if(~b.indexOf(b[i], i + 1)){
            b.splice(i, 1);
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}

function mySort(b) {
    for(var i = 0; i < b.length; i++){
        b[i] = b[i].toLocaleLowerCase();
        b[i] = b[i].split("");
        b[i] = b[i].sort();
        b[i] = b[i].join("");
    }
}

//решение из книги
/*
function aclean(arr) {
    // этот объект будем использовать для уникальности
    var obj = {};

    for (var i = 0; i < arr.length; i++) {
        // разбить строку на буквы, отсортировать и слить обратно
        var sorted = arr[i].toLowerCase().split('').sort().join(''); // (*)

        obj[sorted] = arr[i]; // сохраняет только одно значение с таким ключом
    }

    var result = [];

    // теперь в obj находится для каждого ключа ровно одно значение
    for (var key in obj) result.push(obj[key]);

    return result;
}

var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

alert( aclean(arr) );*/
