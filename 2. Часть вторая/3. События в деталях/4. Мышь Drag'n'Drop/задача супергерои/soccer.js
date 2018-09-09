// const heroes = document.getElementsByClassName('draggable');

document.onmousedown = (event) => {
  const t = event.target;
  const heroCoords = getCoords(t);
  if (!t.classList.contains('draggable')) return;
  t.ondragstart = () => false;
  t.style.position = 'absolute';

  const bodyShift = {
    top: event.pageY - heroCoords.top,
    left: event.pageX - heroCoords.left
  };

  moveAt(event);

  document.onmousemove = (e) => {
    moveAt(e);
  };

  document.onmouseup = () => {
    document.onmousemove = null;
    t.onmouseup = null;
  };

  function moveAt(e) {
    let posT = e.pageY - bodyShift.top;
    let posL = e.pageX - bodyShift.left;

    if (posT < 0) posT = 0;
    if (posL < 0) posL = 0;
    if (posL + t.clientWidth > document.body.scrollWidth) {
      posL = document.body.scrollWidth - t.clientWidth;
    }

    t.style.top = posT + 'px';
    t.style.left = posL + 'px';
  }
  return false;
};


function getCoords(elem) { // кроме IE8-
  const box = elem.getBoundingClientRect();
  return {
    top: box.top + window.pageYOffset,
    left: box.left + window.pageXOffset
  };
}
