
const div = document.getElementById('view');
const area = document.getElementById('area');


document.onkeydown = (e) => {
  if (e.ctrlKey && e.keyCode === 69) { // E
    e.preventDefault();
    divToText();
  } else if (e.ctrlKey && e.keyCode === 83 && getComputedStyle(div).display === 'none') { // S
    e.preventDefault();
    saveToDiv();
  } else if (e.keyCode === 27) { // Esc
    areaToDiv();
  }
};
function divToText() {
  div.style.display = 'none';
  area.style.display = 'block';
  area.focus();
  area.value = div.innerHTML;
}

function saveToDiv() {
  div.innerHTML = area.value;
}

function areaToDiv() {
  area.value = '';
  div.style.display = '';
  area.style.display = 'none';
}
