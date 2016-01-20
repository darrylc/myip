var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(req.headers['x-forwarded-for']);
}).listen(process.env.PORT || 3000);
