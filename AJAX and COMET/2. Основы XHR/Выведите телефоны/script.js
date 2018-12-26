function loadPhones() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'phones.json', true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    button.innerHTML = 'Готово!';
    if (xhr.status !== 200) {
      console.log(xhr.status + ': ' + xhr.statusText);
    } else {
      const arr = JSON.parse(xhr.responseText);
      arr.forEach((obj) => {
        const li = ul.appendChild(document.createElement('li'));
        li.innerHTML = obj.name;
      });
    }
  };
  xhr.send();
  button.innerHTML = 'Загружаю...';
  button.disabled = true;
}
