  let sql = `SELECT Id,Title,Desc FROM BLOG
           ORDER BY id DESC LIMIT 4`;

module.exports = function(app,db){
    var data=[];

    app.get('/index',function(req,res){        
        db.all(sql, [], (err, rows) => {
            if (err) {
              throw err;
            }
            rows.forEach((row) => {                
             var blog= {Id: row.Id,title:row.Title,desc:row.Desc,link:'post?id='+row.Id};
              data.push(blog);            
            });
            res.render('index',{blogs: data});
          });
    }); 
};
    
    