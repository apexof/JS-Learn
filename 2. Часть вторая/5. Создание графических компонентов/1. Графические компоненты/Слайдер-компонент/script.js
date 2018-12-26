function Slider(options) {
  const slider = options.elem;
  const thumb = slider.children[0];
  const sliderPos = thumb.parentElement.getBoundingClientRect().left;
  let cat4 = false;
  let shiftThumb;

  thumb.onmousedown = (e) => {
    cat4 = true;
    shiftThumb = e.clientX - thumb.getBoundingClientRect().left;
  };

  document.onmousemove = (e) => {
    if (!cat4) return;
    let pos = (e.clientX - sliderPos - shiftThumb);
    if (pos < 0) pos = 0;
    if (pos + thumb.offsetWidth > slider.offsetWidth) pos = slider.offsetWidth - thumb.offsetWidth;
    thumb.style.left = pos + 'px';
  };

  document.onmouseup = () => { cat4 = false; };
}

const winamp = new Slider({
  elem: document.getElementById('slider')
});
