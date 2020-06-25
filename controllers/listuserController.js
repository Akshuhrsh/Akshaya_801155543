var bodyParser = require("body-parser");
var urlencodedParser= (bodyParser.urlencoded({ extended: false }));
var jsonDependency = (bodyParser.json());

module.exports = function(app,db){     
    var sql = `SELECT UserID,UserName FROM BLOG_USER`;
    app.get('/api/user',function(req,res,next){
        db.all(sql, [], (err, rows) => {
            if (err) {
              res.status(400).json({"error":err.message});
              return;
            }
            res.json({
                "message": "success",
                "data" : rows
            })
          });  
    }); 
    app.get('/api/user/:id',(req, res, next) => {
        var sql = "SELECT UserID,UserName from BLOG_USER where UserId = ?"
        var params = [req.params.id];        
        db.get(sql,params, (err, row) => {           
            if (err) {                
              res.status(400).json({"error":err.message});
              return;
            }            
            res.json({
                "message":"success",
                "data": row
            })
          });
    });

    app.post("/api/user",urlencodedParser,jsonDependency,(req, res) => {
        console.log(req.body);
        var errors=[]
        if (!req.body.password){
            errors.push("No password specified");
        }
        if (!req.body.username){
            errors.push("No username specified");
        }
        if (errors.length){
            res.status(400).json({"error":errors.join(",")});
            return;
        }
        var data = {
            username: req.body.username,            
            password : req.body.password
        }
        var sql ='INSERT INTO BLOG_USER (UserName, Password) VALUES (?,?)'
        var params =[data.username, data.password]
        db.run(sql, params, function (err, result) {
            if (err){
                res.status(400).json({"error": err.message})
                return;
            }
            res.json({
                "message": "success",
                "data": data,
                "id" : this.lastID
            })
        });
    })

};
    
    