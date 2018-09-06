document.addEventListener('DOMContentLoaded', () => {
  const field = document.getElementById('field');
  const ball = document.getElementById('ball');
  const wBall = ball.offsetWidth / 2;
  const hBall = ball.offsetHeight / 2;
  const fieldW = field.clientWidth - wBall;
  const fieldH = field.clientHeight - hBall;
  field.onclick = (e) => {
    const topOfField = field.getBoundingClientRect().top - field.clientTop;
    const leftOfField = field.getBoundingClientRect().left - field.clientLeft;
    let leftPos = (e.clientX - leftOfField - wBall);
    if (leftPos < wBall) leftPos = wBall;
    if (leftPos > fieldW) leftPos = fieldW;
    let topPos = (e.clientY - topOfField - hBall);
    if (topPos < hBall) topPos = hBall;
    if (topPos > fieldH) topPos = fieldH;
    ball.style.top = `${topPos}px`;
    ball.style.left = `${leftPos}px`;
  };
});
