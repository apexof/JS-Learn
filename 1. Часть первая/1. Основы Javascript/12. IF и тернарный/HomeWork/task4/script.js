var login = prompt("Введите ваш логин", '');
var pass;
if(login === "Admin"){
    pass = prompt("Введите ваш пароль", '');
    if(pass === "Черный властелин"){
        alert("Добро пожаловать!");
    }else if(pass === null){
        alert("Вход отменен");
    }else{
        alert("Пароль неверен");
    }
}else if (login === null){
    alert("Вход отменён");
}else{
    alert("Я вас не знаю");
}
