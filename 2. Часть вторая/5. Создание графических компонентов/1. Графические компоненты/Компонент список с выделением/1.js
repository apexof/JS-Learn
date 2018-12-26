function ListSelect(option) {
  const el = option.elem;
  let list = [];

  el.onclick = function (e) {
    const t = e.target;
    if (t.nodeName !== 'LI') return false;

    if (e.ctrlKey && list.includes(t)) {
      t.classList.remove('selected');
      list.splice(list.indexOf(t), 1);
      return false;
    }

    if (e.ctrlKey && !list.includes(t)) {
      t.classList.add('selected');
      list.push(t);
    }
    if (!e.ctrlKey) {
      for (let i = 0; i < el.children.length; i++) {
        el.children[i].classList.remove('selected');
      }
      list = [];
      t.classList.add('selected');
      list.push(t);
    }
    // console.log(t);
  };
  this.getSelected = function getSelected() {
    return list;
  };
}

const listSelect = new ListSelect({
  elem: document.querySelector('ul')
});
console.log(listSelect.getSelected());
