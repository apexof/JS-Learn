function ExClock(option) {
    Clock.apply(this, arguments);
    this._precision = option.precision || 1000;
}


ExClock.prototype = Object.create(Clock.prototype);

ExClock.prototype.start = function () {
    var self = this;
    this._render();
    this._timer = setInterval(function (){
        self._render();
    }, this._precision);
};