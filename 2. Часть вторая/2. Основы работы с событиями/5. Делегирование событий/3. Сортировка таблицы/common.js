document.addEventListener('DOMContentLoaded', () => {
  const table = document.getElementById('grid');
  const tbody = table.querySelector('tbody');
  const tHead = table.querySelector('thead');
  const sortMethods = {
    number: {
      desc: (a, b) => a.value - b.value,
      asc: (a, b) => b.value - a.value
    },
    string: {
      desc: (a, b) => a.value.localeCompare(b.value),
      asc: (a, b) => b.value.localeCompare(a.value)
    }
  };

  function sortOpt(sortType, sortColumn, direction) {
    const rows = [];
    for (let i = 0; i < tbody.rows.length; i++) {
      rows.push({
        value: tbody.rows[i].cells[sortColumn].innerHTML,
        tRow: tbody.rows[i]
      });
    }
    rows.sort(sortMethods[sortType][direction]);
    table.removeChild(tbody);
    for (let i = 0; i < rows.length; i++) {
      tbody.appendChild(rows[i].tRow);
    }
    table.appendChild(tbody);
  }

  tHead.onclick = (e) => {
    const target = e.target;
    if (target.tagName !== 'TH') return;
    const colNumber = target.cellIndex;
    const sortType = target.dataset.type;
    let direction;
    if (target.classList.contains('colUnsorted')) {
      target.classList.remove('colUnsorted');
      target.classList.add('ascCol');
      direction = 'asc';
    } else if (target.classList.contains('ascCol')) {
      target.classList.remove('ascCol');
      target.classList.add('descCol');
      direction = 'desc';
    } else if (target.classList.contains('descCol')) {
      target.classList.remove('descCol');
      target.classList.add('ascCol');
      direction = 'asc';
    }
    sortOpt(sortType, colNumber, direction);
  };
});
