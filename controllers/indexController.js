


var data = [{title: 'Blog 1', desc: 'Desc1 goes here'},{title: 'Blog 2', desc: 'Desc2 goes here'},{title: 'Blog 3', desc: 'Desc3 goes here'}];

module.exports = function(app){

    app.get('/index',function(req,res){
        res.render('index',{blogs: data});
    }); 
};
    
    