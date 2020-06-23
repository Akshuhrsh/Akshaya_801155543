const sqllite = require('sqlite3').verbose();

let db = new sqllite.Database('nodejsdb.db', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
  });

var bodyParser  = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false});


//var data = [{title: 'Blog 1', desc: 'Desc1 goes here'},{title: 'Blog 2', desc: 'Desc2 goes here'},{title: 'Blog 3', desc: 'Desc3 goes here'}];


module.exports = function(app){

app.get('/addpost',function(req,res){
    res.render('add_post');
});

app.post('/addpost',urlencodedParser,function(req,res){
    console.log(req.body.title);
    console.log(req.body.desc);
db.run('Insert into BLOG (Title,Desc) VALUES(?,?)',[req.body.title,req.body.desc],(err)=>{
    if(err){
        console.log(err);
    } else{
        console.log("Insert Successful");
    }
});
});

app.put('/addpost',function(req,res){
   // res.render('post');
});

};