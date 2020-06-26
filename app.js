var express = require('express');

const sqllite = require('sqlite3').verbose();


var postController = require('./controllers/postController');
var indexController = require('./controllers/indexController');
var addpostController = require('./controllers/addpostController');
var listpostController = require('./controllers/listpostController');
var updatepostController = require('./controllers/updatepostController');
var deletepostController = require('./controllers/deletepostController');

var restAPIController = require('./controllers/restAPIController');

// db connection creation

let db_blog = new sqllite.Database('blog.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to SQlite database.');
});

let db_user = new sqllite.Database('blog_user.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to SQlite database.');
});

var app = express();

//template engine setup
app.set('view engine','ejs');

//static files
app.use('/assets',express.static('assets'));
app.use('/JAVASCRIPT',express.static('JAVASCRIPT'));
app.use('/AJAX',express.static('AJAX'));

//fire contollers

postController(app,db_blog);
indexController(app,db_blog);
addpostController(app,db_blog);
listpostController(app,db_blog);
updatepostController(app,db_blog);
deletepostController(app,db_blog);

restAPIController(app,db_user);

//listen to port
var HTTP_PORT = 3000;
app.listen(HTTP_PORT, () => {
  console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});
