var bodyParser  = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app,db){
app.get('/addpost',function(req,res){
    res.render('add_post');
});

app.post('/addpost',urlencodedParser,function(req,res){      
    db.run('Insert into BLOG (Title,Desc) VALUES(?,?)',[req.body.title,req.body.desc],(err)=>{
    if(err){
        console.log(err);
    } else{
        console.log("Insert Successful");
        res.send("success");
    }
});
});
};