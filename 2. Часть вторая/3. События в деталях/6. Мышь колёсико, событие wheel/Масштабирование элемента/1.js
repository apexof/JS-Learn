const p = document.querySelector('p');
if (p.addEventListener) {
  if ('onwheel' in document) {
    // IE9+, FF17+, Ch31+
    p.addEventListener('wheel', onWheel);
  } else if ('onmousewheel' in document) {
    // устаревший вариант события
    p.addEventListener('mousewheel', onWheel);
  } else {
    // Firefox < 17
    p.addEventListener('MozMousePixelScroll', onWheel);
  }
} else { // IE8-
  p.attachEvent('onmousewheel', onWheel);
}
let scale = 1;
function onWheel(e) {
  e = e || window.event;

  // wheelDelta не дает возможность узнать количество пикселей
  const delta = e.deltaY || e.detail || e.wheelDelta;
  console.log(delta);
  //
  // var info = document.getElementById('delta');
  //
  // info.innerHTML = +info.innerHTML + delta;
  scale += delta / 1000;
  p.style.transform = p.style.WebkitTransform = p.style.MsTransform = 'scale(' + scale + ')';

  e.preventDefault ? e.preventDefault() : (e.returnValue = false);
}
