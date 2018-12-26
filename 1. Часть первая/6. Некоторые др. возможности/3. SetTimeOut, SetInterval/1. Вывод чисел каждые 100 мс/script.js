var i = 0;
print();

function print() {
    console.log(++i);
    if(i < 20)
        setTimeout(print, 100);
}





