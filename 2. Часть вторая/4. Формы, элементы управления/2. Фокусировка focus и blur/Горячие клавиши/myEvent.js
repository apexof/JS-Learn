const ctrE = new KeyboardEvent('keydown', {
  cancelable: false,
  keyCode: 27
});


document.addEventListener('keydown', (e) => {
  alert(e);
});

// document.dispatchEvent(ctrE);
