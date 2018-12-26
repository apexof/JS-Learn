var message;
var login = prompt("Введите Логин", "");

message = (login === 'Вася') ? "Привет" :
    (login === 'Директор') ? "Здравствуйте" :
    (login === '') ? "Нет логина" : '';


