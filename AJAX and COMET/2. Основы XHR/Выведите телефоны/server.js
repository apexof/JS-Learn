const http = require('http');
// var url = require('url');
// var querystring = require('querystring');
const nodeStatic = require('node-static');

const file = new nodeStatic.Server('.', {
  cache: 0
});
function accept(req, res) {
  if (req.url === '/phones.json') {
    // искусственная задержка для наглядности
    setTimeout(() => {
      file.serve(req, res);
    }, 200);
  } else {
    file.serve(req, res);
  }
}
// ------ запустить сервер -------
if (!module.parent) {
  http.createServer(accept).listen(8080);
} else {
  exports.accept = accept;
}
