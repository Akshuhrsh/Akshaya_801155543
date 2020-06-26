module.exports = function(app,db){

    app.get('/deletepost',function(req,res){
    var blog={};
    var stmt ;   
    stmt= db.prepare('Delete from BLOG where id= ?',(req.query.id));
    stmt.run(); 
    stmt.finalize();
    res.redirect('listpost');    
    });     
    };


    