const ball = document.getElementById('ball');
function getCoords(elem) { // кроме IE8-
  const box = elem.getBoundingClientRect();
  return {
    top: box.top + window.pageYOffset,
    left: box.left + window.pageXOffset
  };
}

ball.onmousedown = (e) => {
  const coords = getCoords(ball);
  const shiftX = e.pageX - coords.left;
  const shiftY = e.pageY - coords.top;
  function moveAt(ev) {
    ball.style.left = `${ev.pageX - shiftX}px`;
    ball.style.top = `${ev.pageY - shiftY}px`;
  }
  document.onmousemove = (eve) => {
    moveAt(eve);
  };
  ball.onmouseup = () => {
    document.onmousemove = null;
    ball.onmouseup = null;
  };

  ball.style.position = 'absolute';
  document.body.appendChild(ball);
  moveAt(e);
  ball.style.zIndex = 1000; // над другими элементами
};

ball.ondragstart = () => false;
