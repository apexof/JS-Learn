/*Для наследования нужно, чтобы «склад методов потомка» (Child.prototype) наследовал от «склада метода родителей» (Parent.prototype).

    Это можно сделать при помощи Object.create:

Код:

    Rabbit.prototype = Object.create(Animal.prototype);
Для того, чтобы наследник создавался так же, как и родитель, он вызывает конструктор родителя в своём контексте, используя apply(this, arguments), вот так:

    function Rabbit(...) {
        Animal.apply(this, arguments);
    }
При переопределении метода родителя в потомке, к исходному методу можно обратиться, взяв его напрямую из прототипа:

    Rabbit.prototype.run = function() {
        var result = Animal.prototype.run.apply(this, ...);
        // result -- результат вызова метода родителя
    }
Структура наследования полностью:*/
// --------- Класс-Родитель ------------
// Конструктор родителя пишет свойства конкретного объекта
function Animal(name) {
  this.name = name;
  this.speed = 0;
}
// Методы хранятся в прототипе
Animal.prototype.run = function() {
  alert(this.name + " бежит!");
};
// --------- Класс-потомок -----------
// Конструктор потомка
function Rabbit(name) {
  Animal.apply(this, arguments);
}
// Унаследовать
Rabbit.prototype = Object.create(Animal.prototype);
// Желательно и constructor сохранить
Rabbit.prototype.constructor = Rabbit;
// Методы потомка
Rabbit.prototype.run = function() {
  // Вызов метода родителя внутри своего
  Animal.prototype.run.apply(this);
  alert( this.name + " подпрыгивает!" );
};
// Готово, можно создавать объекты
var rabbit = new Rabbit('Кроль');
rabbit.run();