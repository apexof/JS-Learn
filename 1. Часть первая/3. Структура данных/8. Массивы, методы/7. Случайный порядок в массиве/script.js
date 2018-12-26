var arr = [1, 2, 3, 4, 5];

arr.sort(randomize);

alert( arr ); // элементы в случайном порядке, например [3,5,1,2,4]


function randomize(a, b) {
    // return (Math.random() > 0.5) ? 1 : -1;
    return Math.random() - 0.5;
}

