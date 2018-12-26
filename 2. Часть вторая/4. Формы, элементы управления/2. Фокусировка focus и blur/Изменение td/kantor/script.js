const table = document.getElementById('bagua-table');
const area = document.createElement('textarea');
const buttonOk = document.createElement('button');
buttonOk.innerHTML = 'Ok';
const buttonCancel = document.createElement('button');
buttonCancel.innerHTML = 'Cancel';
let edit = false;
let currentTdClass = null;
let defaultText = '';

table.onclick = (e) => {
  const t = e.target;
  if (t.nodeName !== 'TD') return false;

  if (!edit && !currentTdClass) {
    editTd(t);
    edit = true;
    currentTdClass = t.className;
  }
};

function editTd(t) {
  area.value = t.innerHTML;
  defaultText = t.innerHTML;
  t.innerHTML = '';
  t.appendChild(area);
  t.appendChild(buttonOk);
  t.appendChild(buttonCancel);
}

buttonCancel.onclick = () => {
  const currentTd = document.querySelector('.' + currentTdClass);
  currentTd.innerHTML = defaultText;
  edit = false;
  currentTdClass = null;
};

buttonOk.onclick = () => {
  const currentTd = document.querySelector('.' + currentTdClass);
  currentTd.innerHTML = area.value;
  edit = false;
  currentTdClass = null;
};
