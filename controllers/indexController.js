const sqllite = require('sqlite3').verbose();

let db = new sqllite.Database('nodejsdb.db', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
  });

  let sql = `SELECT Id,Title,Desc FROM BLOG
           ORDER BY id DESC LIMIT 4`;

module.exports = function(app){
    var data=[];

    app.get('/index',function(req,res){
        db.all(sql, [], (err, rows) => {
            if (err) {
              throw err;
            }
            rows.forEach((row) => {
                console.log("inside for each");
                console.log(row);               
              console.log(row.Id+row.Title+ row.Desc);
             var blog= {Id: row.Id,title:row.Title,desc:row.Desc,link:'post?id='+row.Id};
              console.log(data.push(blog)); 
              console.log(data);
            });
            res.render('index',{blogs: data});
          });  
    }); 
};
    
    