var express = require('express');
const sqllite = require('sqlite3').verbose();

var postController = require('./controllers/postController');
var indexController = require('./controllers/indexController');
var addpostController = require('./controllers/addpostController');
var listpostController = require('./controllers/listpostController');
var updatepostController = require('./controllers/updatepostController');

// db connection creation

let db = new sqllite.Database('nodejsdb.db', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
  });

var app = express();

//template engine setup
app.set('view engine','ejs');

//static files
app.use('/assets',express.static('assets'));
app.use('/JAVASCRIPT',express.static('JAVASCRIPT'));
app.use('/AJAX',express.static('AJAX'));

//fire contollers

postController(app,db);
indexController(app,db);
addpostController(app,db);
listpostController(app,db);
updatepostController(app,db);

//listen to port
app.listen(3000);
console.log('You are listening to port 3000');