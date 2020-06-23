var bodyParser  = require('body-parser');

const sqllite = require('sqlite3').verbose();

let db = new sqllite.Database('nodejsdb.db', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
  });


var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

app.get('/post',function(req,res){
var blog={};

    console.log(req.query.id+"!!!!!!!!!!!!!!!!!!!!!!");
    db.all('Select Title,Desc from BLOG where id= ?', (req.query.id),[], (err, rows) => {
        if (err) {
          throw err;
        }
        rows.forEach((row) => {
            console.log("inside for each");
            console.log(row);               
          console.log(row.Title+" "+ row.Desc);   
          blog = {title: row.Title,desc: row.Desc};   
        });
        res.render('post',{blog: blog});
       // res.render('index',{blogs: data});
      });
   // res.render('post');
});

app.post('/post',urlencodedParser,function(req,res){
    res.render('post');
});

app.put('/post',function(req,res){
   // res.render('post');
});

};