// Function declaration
function name(arg1) {
  return arg1;
}
name();

// Function Expression
const name1 = function (arg1) {
  return arg1;
};
name1();

// Named Function Expression
const NFE = function myNFE(arg1) {
  myNFE(1); // для рекурсивного обращения
  return arg1;
};
NFE();

// функция стрелка, arrow Function, для коротких ф-ций которые передаем куда-то
const func3 = (a, b) => a + b;
// или
const func4 = (a, b) => {
  const summ = a + b;
  return summ + 2;
};

// свойство-функция объекта
const obj = {
  name: function () {
    this.name();
  },
  func2(a, b) {
    return a + b;
  }
};

// модуль
(function () {
  const lodash = 1;
  window._ = lodash;
}());

// Статический метод. Ф-ция привязанная к функции конструктору
function Article() {
  Article.count++;
}
Article.count = 0; // статическое св-во
Article.showCount = function () {
  console.log(this.count); // (1)
};

// ф-ция конструктор
function Animal(beast) {
  this.name = beast;
}
const animal = new Animal('ёжик');
console.log(animal.name); // ёжик
