'use strict';
let results = [];
let urls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3',
  'https://jsonplaceholder.typicode.com/todos/4',
  'https://jsonplaceholder.typicode.com/todos/5',
];

let i = 0;





function getUrl (url) {
  fetch(url)
    .then(response => response.json())
    .then(json => results.push(json))
    .then(() => {
      i++;
      if (urls[i]) 
        getUrl(urls[i])
    })
}
  
getUrl(urls[i]);
console.log(results);
  











