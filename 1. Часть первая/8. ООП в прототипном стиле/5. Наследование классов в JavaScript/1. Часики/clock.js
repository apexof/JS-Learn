function Clock(options) {
    this.template = options.template;
    this.timer;
}

Clock.prototype.render = function(){
    var date = new Date();
    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    var min = date.getMinutes();
    if (min < 10) min = '0' + min;
    var sec = date.getSeconds();
    if (sec < 10) sec = '0' + sec;
    var output = this.template.replace('h', hours).replace('m', min).replace('s', sec);
    console.log(output);
};

Clock.prototype.stop = function(){
    clearInterval(this.timer);
};
Clock.prototype.start = function () {
    var self = this;
    this.render();
    this.timer = setInterval(function (){
        self.render();
    },1000);
};