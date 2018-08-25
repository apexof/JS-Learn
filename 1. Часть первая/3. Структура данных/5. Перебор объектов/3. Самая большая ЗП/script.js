"use strict";
var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};

function theMostZP(obj) {
    var theMost = 0;
    var name;
    for (var key in obj){
        if(obj[key] > theMost) {
            theMost = obj[key];
            name = key;
        }
    }
    if(name){
        return name;
    }else{
        return "Нет сотрудников";
    }
}

console.log(theMostZP(salaries));

//Красивое решение
/*var max = 0;
var maxName = "";
for (var name in salaries) {
    if (max < salaries[name]) {
        max = salaries[name];
        maxName = name;
    }
}

alert( maxName || "нет сотрудников" );*/
