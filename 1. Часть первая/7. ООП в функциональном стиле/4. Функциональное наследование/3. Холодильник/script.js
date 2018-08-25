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
    this.addFood = function(f1){
        if(!this._enabled) {
            alert("Ошибка, холодос выключен");
            return;
        }
        for(var i = 0; i < arguments.length; i++){
            if(food.length === power/100) {
                alert("Ошибка, холодильник полон");
                return;
            }
            food.push(arguments[i]);
        }
    };
    this.getFood = function () {
        return food.slice();
    };
}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "варенье");

var fridgeFood = fridge.getFood();
alert( fridgeFood ); // котлета, сок, варенье

// добавление элементов не влияет на еду в холодильнике
fridgeFood.push("вилка", "ложка");

alert( fridge.getFood() ); // внутри по-прежнему: котлета, сок, варенье