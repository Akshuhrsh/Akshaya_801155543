var bodyParser  = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app,db){

app.get('/post',function(req,res){
var blog={};    
    db.all('Select Title,Desc from BLOG where id= ?', (req.query.id),[], (err, rows) => {
        if (err) {
          throw err;
        }
        rows.forEach((row) => {              
          blog = {title: row.Title,desc: row.Desc};   
        });
        res.render('post',{blog: blog});       
      });   
});

app.post('/post',urlencodedParser,function(req,res){
    res.render('post');
});
};