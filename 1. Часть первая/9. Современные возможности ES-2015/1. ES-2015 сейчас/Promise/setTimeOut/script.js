function delay(ms) {
  var promise = new Promise(function(resolve, reject) {
    setTimeout(resolve, ms);
  })
  return promise;
}




delay(1000)
  .then(() => alert("Hello!"))










