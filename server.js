const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/assets'));
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({extended: false}));
app.engine('handlebars', handlebars({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');

app.get('/notes/:noteId', function(req, res) {
  res.render('note', {noteId: req.params.noteId});
});

app.listen(PORT, function() {
  console.log('Server running on port', PORT);
});
