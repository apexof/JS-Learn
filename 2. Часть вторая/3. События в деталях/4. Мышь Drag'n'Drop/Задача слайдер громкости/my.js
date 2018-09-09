const thumb = document.querySelector('.thumb');
const slider = thumb.parentElement;
const sliderPos = thumb.parentElement.getBoundingClientRect().left;
let cat4 = false;
let shiftThumb;


thumb.onmousedown = function (e) {
  cat4 = true;
  shiftThumb = e.clientX - thumb.getBoundingClientRect().left;
  console.log(shiftThumb);
};

document.onmousemove = function (e) {
  if (!cat4) return;
  const pos = (e.clientX - sliderPos - shiftThumb);
  if (pos < 10) {
    thumb.style.left = 10 + 'px';
  } else if (pos > slider.clientWidth - 20) {
    thumb.style.left = slider.clientWidth - 20 + 'px';
  } else {
    thumb.style.left = pos + 'px';
  }
};

document.onmouseup = function () {
  cat4 = false;
};
