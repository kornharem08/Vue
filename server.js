var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
const history = require('connect-history-api-fallback')
app = express();
app.use(serveStatic(__dirname + "/dist"));
app.use(history({
    disableDotRule: true,
    verbose: true
  }));
  app.get('/', function (req, res) {
    res.render(path.join(__dirname + '/dist/index.html'));
  
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);

