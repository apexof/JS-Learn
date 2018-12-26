'use strict';
let results = [];
let urls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3',
];

let i = 0;


function* generateSequence() {
  setTimeout(() => {
    console.log('data');
    yield 2;
  }, 1000);
  yield 2;
  yield 3;
}

let generator = generateSequence();

for(let data of generator) {
  console.log(data); 
  results.push(data);
}
// function getUrl (url) {
//   fetch(url)
//     .then(response => response.json())
//     .then(json => results.push(json))
//     .then(() => {
//       i++;
//       if (urls[i]) 
//         getUrl(urls[i])
//     })
// }
  
// getUrl(urls[i]);
// console.log(results);
  











