function Machine(power) {
    this._power = power;
    this._enabled = false;
    var self = this;

    this.enable = function() {
        self._enabled = true;
    };
    this.disable = function() {
        self._enabled = false;
    };
}

function Fridge(power) {
    Machine.apply(this, arguments);
    var food = [];
    this.addFood = function(objF){
        if(!this._enabled) throw new Error("Ошибка, холодильник выключен");
        if(food.length === power/100) throw new Error("Ошибка, холодильник полон");

        food.push(objF);
    };
    this.getFood = function () {
        return food.slice();
    };
    this.filterFood = function(func){
        var dietItems = [];
        food.forEach(function (item) {
            if(func(item)) dietItems.push(item);
        });
        return dietItems;
    };
    this.removeFood = function(item){
        food.forEach(function (f, i, obj) {
            if(f.title === item.title){
                delete obj[i];
                return;
            }
        });
    };
}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood({
    title: "котлета",
    calories: 100
});
fridge.addFood({
    title: "сок",
    calories: 30
});
fridge.addFood({
    title: "зелень",
    calories: 10
});
fridge.addFood({
    title: "варенье",
    calories: 150
});

var dietItems = fridge.filterFood(function(item) {
    return item.calories < 50;
});
console.log(dietItems);

fridge.removeFood("нет такой еды"); // без эффекта
// alert( fridge.getFood().length ); // 4
//
// dietItems.forEach(function(item) {
//     // alert( item.title ); // сок, зелень
//     fridge.removeFood(item);
// });
console.log(fridge.getFood());




/*function Machine(power) {
  this._power = power;
  this._enabled = false;

  var self = this;

  this.enable = function() {
    self._enabled = true;
  };

  this.disable = function() {
    self._enabled = false;
  };
}

function Fridge(power) {
  // унаследовать
  Machine.apply(this, arguments);

  var food = []; // приватное свойство food

  this.addFood = function() {
    if (!this._enabled) {
      throw new Error("Холодильник выключен");
    }
    if (food.length + arguments.length >= this._power / 100) {
      throw new Error("Нельзя добавить, не хватает мощности");
    }
    for (var i = 0; i < arguments.length; i++) {
      food.push(arguments[i]); // добавить всё из arguments
    }

  };

  this.getFood = function() {
    // копируем еду в новый массив, чтобы манипуляции с ним не меняли food
    return food.slice();
  };

  this.filterFood = function(filter) {
    return food.filter(filter);
  };

  this.removeFood = function(item) {
    var idx = food.indexOf(item);
    if (idx != -1) food.splice(idx, 1);
  };
}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood({
  title: "котлета",
  calories: 100
});
fridge.addFood({
  title: "сок",
  calories: 30
});
fridge.addFood({
  title: "зелень",
  calories: 10
});
fridge.addFood({
  title: "варенье",
  calories: 150
});

var dietItems = fridge.filterFood(function(item) {
  return item.calories < 50;
});

fridge.removeFood("нет такой еды"); // без эффекта
alert( fridge.getFood().length ); // 4

dietItems.forEach(function(item) {
  alert( item.title ); // сок, зелень
  fridge.removeFood(item);
});

alert( fridge.getFood().length ); // 2*/