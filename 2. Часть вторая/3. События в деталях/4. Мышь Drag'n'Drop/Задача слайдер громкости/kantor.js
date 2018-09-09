const sliderElem = document.getElementById('slider');
const thumbElem = sliderElem.children[0];

thumbElem.onmousedown = function (e) {
  const thumbCoords = getCoords(thumbElem);
  const shiftX = e.pageX - thumbCoords.left;
  const sliderCoords = getCoords(sliderElem);
  document.onmousemove = function (e) {
    let newLeft = e.pageX - shiftX - sliderCoords.left;
    if (newLeft < 0) {
      newLeft = 0;
    }
    const rightEdge = sliderElem.offsetWidth - thumbElem.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }
    thumbElem.style.left = newLeft + 'px';
  };

  document.onmouseup = function () {
    document.onmousemove = document.onmouseup = null;
  };
  return false; // disable selection start (cursor change)
};
thumbElem.ondragstart = function () {
  return false;
};
function getCoords(elem) { // кроме IE8-
  const box = elem.getBoundingClientRect();
  return {
    left: box.left + pageXOffset
  };
}
