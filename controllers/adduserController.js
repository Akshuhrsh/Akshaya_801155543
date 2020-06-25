var bodyParser  = require('body-parser');
var md5 = require('md5');
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app,db){
    app.get('/adduser',function(req,res){
        res.render('add_user');
    });
    
    app.post('/adduser',urlencodedParser,function(req,res){ 
        
        db.run('Insert into BLOG_USER (UserName,Password) VALUES(?,?)',[req.body.username,md5(req.body.password)],(err)=>{
        if(err){
            console.log(err);
        } else{
            console.log("Insert Successful");
            res.send("success");
        }
    });
    });
};