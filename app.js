var express = require('express');

var postController = require('./controllers/postController');
var indexController = require('./controllers/indexController');
var addpostController = require('./controllers/addpostController');

var app = express();

//template engine setup
app.set('view engine','ejs');

//static files
app.use('/assets',express.static('assets'));
app.use('/JAVASCRIPT',express.static('JAVASCRIPT'));
app.use('/AJAX',express.static('AJAX'));

//fire contollers

postController(app);
indexController(app);
addpostController(app);

//listen to port
app.listen(3000);
console.log('You are listening to port 3000');