const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/assets'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
  res.send('hello');
});

app.listen(PORT, function() {
  console.log('Server running on port', PORT);
});
