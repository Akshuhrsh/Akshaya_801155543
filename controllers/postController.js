var bodyParser  = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false});


//var data = [{title: 'Blog 1', desc: 'Desc1 goes here'},{title: 'Blog 2', desc: 'Desc2 goes here'},{title: 'Blog 3', desc: 'Desc3 goes here'}];


module.exports = function(app){

app.get('/post',function(req,res){
    res.render('post');
});

app.post('/post',urlencodedParser,function(req,res){
    res.render('post');
});

app.put('/post',function(req,res){
   // res.render('post');
});

};