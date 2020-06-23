var express = require('express');
const sqllite = require('sqlite3').verbose();

let db = new sqllite.Database('blog_db', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
  });
var postController = require('./controllers/postController');
var indexController = require('./controllers/indexController');

var app = express();

//template engine setup
app.set('view engine','ejs');

//static files
app.use('/assets',express.static('assets'));
app.use('/JAVASCRIPT',express.static('JAVASCRIPT'));

//fire contollers

postController(app);
indexController(app);

//listen to port
app.listen(3000);
console.log('You are listening to port 3000');