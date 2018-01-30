var express = require('express');
var path = require('path');
var open = require('open');

// in course need Babel to use 'const'
const port = 3000;
const app = express();

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
