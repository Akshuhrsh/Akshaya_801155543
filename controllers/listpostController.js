let sql = `SELECT Id,Title,Desc FROM BLOG`;

module.exports = function(app,db){
    var data=[];
    app.get('/listpost',function(req,res){
        db.all(sql, [], (err, rows) => {
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
};
    
    