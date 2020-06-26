var bodyParser  = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});


var blogId;

module.exports = function(app,db){

app.get('/updatepost',function(req,res){
    var blog={};
    db.all('Select Title,Desc from BLOG where id= ?', (req.query.id),[], (err, rows) => {
        if (err) {
          throw err;
        }
        rows.forEach((row) => {
          blog = {title: row.Title,desc: row.Desc}; 
          blogId = req.query.id;           
        });

    res.render('update_post',{blog: blog});

});
});

app.post('/updatepost',urlencodedParser, function(req,res){        
   db.run('Update BLOG set Title = ? , Desc = ? where id= ?',[req.body.title,req.body.desc,blogId],(err)=>{
    if(err){
        console.log("Failure");        
    } else{
        console.log("Success");
        res.send("Success");
    }
    });
});

};