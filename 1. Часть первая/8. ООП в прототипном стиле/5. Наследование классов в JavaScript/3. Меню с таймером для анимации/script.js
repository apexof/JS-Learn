function Menu() {
}

Menu.prototype.STATE  = null;
Menu.prototype.STATE_OPEN  = "открыто";
Menu.prototype.STATE_CLOSED = "закрыто";

Menu.prototype.open = function(){
    this.STATE = this.STATE_OPEN;
    alert(this.STATE);
};
Menu.prototype.close = function(){
    this.STATE = this.STATE_CLOSED;
    alert(this.STATE);
};
Menu.prototype.showState = function(){
    alert(this.STATE);
};

function AnimatingMenu() {
    Menu.apply(this, arguments);
    this._timer;
}

AnimatingMenu.prototype = Object.create(Menu.prototype);

AnimatingMenu.prototype.STATE_ANIMATING = "анимация";


AnimatingMenu.prototype.open = function(){
    var menu = this.constructor;
    var self = this;
    this.STATE = this.STATE_ANIMATING;
    alert(this.STATE);
    this._timer = setTimeout(function () {
        menu.prototype.open.call(self);
    }, 1000);
};
AnimatingMenu.prototype.close = function(){
    clearTimeout(this._timer);
    var menu = this.constructor;
    menu.prototype.close.call(this);
};
/*AnimatingMenu.prototype.showState = function(){

};*/
var anMen = new AnimatingMenu;
anMen.open();

