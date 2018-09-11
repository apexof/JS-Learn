window.onload = () => {
  const html = document.documentElement;
  const imgs = document.querySelectorAll('img[realsrc]');
  checkImgs();
  document.onscroll = () => {
    checkImgs();
  };

  function checkImgs() {
    const pagePos = window.pageYOffset + html.clientHeight;
    for (let i = 0; i < imgs.length; i++) {
      const imgTop = getCoords(imgs[i]).top;
      if (pagePos > imgTop) {
        imgs[i].src = imgs[i].getAttribute('realsrc');
      }
    }
  }

  function getCoords(elem) {
    const box = elem.getBoundingClientRect();
    return {
      top: box.top + window.pageYOffset,
    };
  }
};
