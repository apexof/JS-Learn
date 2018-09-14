class Clock {
  constructor(options) {
    this.hEl = options.elem.querySelector('.hour');
    this.mEl = options.elem.querySelector('.min');
    this.sEl = options.elem.querySelector('.sec');

    this.start = function () {
      const now = new Date();
      this.hEl.innerHTML = now.getHours();
      this.mEl.innerHTML = now.getMinutes();
      this.sEl.innerHTML = now.getSeconds();
      this.timerId = setTimeout(this.start, 1000);
    };

    this.stop = function () {
      clearTimeout(this.timerId);
    };
  }
}

const pageClock = new Clock({
  elem: document.getElementById('clock')
});

const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

startButton.onclick = () => {
  pageClock.start();
};

stopButton.onclick = () => {
  pageClock.stop();
};
