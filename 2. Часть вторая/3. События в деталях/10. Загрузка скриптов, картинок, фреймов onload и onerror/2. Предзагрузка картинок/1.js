function preloadImages(sources, callback) {
  let counter = 0;
  for (let i = 0; i < sources.length; i++) {
    const src = sources[i];
    const img = document.createElement('img');
    img.src = src;
    img.onload = img.onerror = () => {
      counter++;
    }
  }

  function wait() {
    if (counter === sources.length) {
      callback();
    } else {
      setTimeout(wait, 100);
    }
  }
  wait();
}

/* файлы для загрузки */
const sources = [
  'https://js.cx/images-load/1.jpg',
  'https://js.cx/images-load/2.jpg',
  'https://js.cx/images-load/3.jpg'
];
for (let i = 0; i < sources.length; i++) {
  sources[i] += '?' + Math.random(); // добавляем параметр, чтобы без кеша (для теста)
}

/** если картинка загружена, то можно будет сразу получить её ширину
 * создадим все картинки и проверим, есть ли у них ширина
 */
function testLoaded() {
  let widthSum = 0;
  for (let i = 0; i < sources.length; i++) {
    const img = document.createElement('img');
    img.src = sources[i];
    widthSum += img.width;
  }
  // каждое изображение 100x100, общая ширина должна быть 300px
  alert(widthSum);
}

// до загрузки - выведет 0
testLoaded();

// после загрузки - выведет 300
preloadImages(sources, testLoaded);
