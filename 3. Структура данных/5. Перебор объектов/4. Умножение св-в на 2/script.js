// до вызова
var menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

for (var k in menu) {
    alert( "Ключ: " + k + " значение: " + menu[k] );
}

function multiplyNumeric(m) {
    for(var key in m){
        if( isNumeric(m[key]) ) {
            m[key] *= 2;
        }
    }
}

// после вызова
/*menu = {
    width: 400,
    height: 600,
    title: "My menu"
};*/

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}



    
    