"use strict";



var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};
var summ = 0;

for (var key in salaries){
    summ += salaries[key];
}
console.log(summ);
