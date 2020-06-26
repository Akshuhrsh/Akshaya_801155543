var bodyParser  = require('body-parser');
var fs = require('fs');
var urlencodedParser = bodyParser.urlencoded({extended: false});
const fileUpload = require('express-fileupload');


module.exports = function(app,db){
app.get('/addpost',function(req,res){
    res.render('add_post');
});

app.post('/addpost',urlencodedParser,function(req,res){  
    console.log(req.body.title+ " " +req.body.desc)  ;
    db.run('Insert into BLOG (Title,Desc) VALUES(?,?)',[req.body.title,req.body.desc],(err)=>{
    if(err){
        console.log(err);
    } else{
        console.log("Insert Successful");
    }
});
});

app.post('/addpostFile',urlencodedParser,function(req,res){  
    console.log("in addpost",req.body.title)  ;
    console.log("File data",req.body.desc);
    res.send("success")

    //fs.readFile(req.body.desc, (err, data) => { 
      //  if (err) throw err; 
      //  db.run('Insert into BLOG (Title,Desc) VALUES(?,?)',[req.body.title,data.toString()],(err)=>{
            // if(err){
            //     console.log(err);
            // } else{
            //     console.log("Insert Successful");
            // }});
        
});

// app.put('/addpost',function(req,res){
//    // res.render('post');
// });

};