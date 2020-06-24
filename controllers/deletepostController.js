module.exports = function(app,db){

    app.get('/deletepost',function(req,res){
        var blog={};
        db.all('Delete from BLOG where id= ?', (req.query.id),[], (err, rows) => {
            if (err) {
              throw err;
            }
            var data=[];
            db.all('SELECT Id,Title,Desc FROM BLOG', [], (err, rows) => {
                if (err) {
                  throw err;
                }
                rows.forEach((row) => {                
                 var blog= {Id: row.Id,title:row.Title,desc:row.Desc,viewlink:'post?id='+row.Id,editlink:'updatepost?id='+row.Id,deletelink:'deletepost?id='+row.Id};
                  data.push(blog);
                });
                res.render('list_post',{blogs: data});
                data=[];
              });              
    });
    });
    
    };