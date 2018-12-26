var head = {
    glasses: 1
};

var table = {
    pen: 3,
    __proto__: head
};

var bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};

var pockets = {
    money: 2000,
    __proto__: bed
};

var time = performance.now();
pockets.glasses;
time = performance.now() - time;
console.log("1:" + time);
var time2 = performance.now();
head.glasses;
time2 = performance.now() - time2;
console.log("2:" + time2);