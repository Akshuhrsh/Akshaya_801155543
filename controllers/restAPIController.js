var bodyParser = require("body-parser");
var urlencodedParser= (bodyParser.urlencoded({ extended: false }));
var jsonDependency = (bodyParser.json());

module.exports = function(app,db){     
    var sql = `SELECT UserID,UserName,Password FROM BLOG_USER`;
    app.get('/api/user',function(req,res,next){
        db.all(sql, [], (err, rows) => {
            if (err) {
              res.status(400).json({"error":err.message});
              return;
            }
            res.json({
                "message": "fetch successful",
                "data" : rows
            })
          });  
    }); 
    app.get('/api/user/:id',(req, res, next) => {
        var sql = "SELECT UserID,UserName,Password from BLOG_USER where UserId = ?"
        var params = [req.params.id];        
        db.get(sql,params, (err, row) => {           
            if (err) {                
              res.status(400).json({"error":err.message});
              return;
            }            
            res.json({
                "message":"fetch successful",
                "data": row
            })
          });
    });

    app.post("/api/user",urlencodedParser,jsonDependency,(req, res) => {
        var errors=[];
        if (!req.body.password){
            errors.push("Password not entered");
        }
        if (!req.body.username){
            errors.push("Username not entered");
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
                "message": "insert successful",
                "data": data,
                "id" : this.lastID
            })
        })
    });

    app.patch("/api/user/:id",urlencodedParser,jsonDependency, (req, res, next) => {        
        var data = {
            username: req.body.username,            
            password : req.body.password ? (req.body.password) : null
        }
        db.run(
            `UPDATE BLOG_USER set 
            UserName = COALESCE(?,username),                 
            Password = COALESCE(?,password) 
            WHERE UserId = ?`,
            [data.username, data.password, req.params.id],
            function (err, result) {
                if (err){
                    res.status(400).json({"error": res.message})
                    return;
                }
                res.json({
                    message: "update successful",
                    data: data,
                    changes: this.changes
                })
        });
    });

    app.delete("/api/user/:id",urlencodedParser,jsonDependency, (req, res, next) => {
        db.run(
            'DELETE FROM BLOG_USER WHERE UserId = ?',
            req.params.id,
            function (err, result) {
                if (err){
                    res.status(400).json({"error": res.message})
                    return;
                }
                res.json({
                    message:"delete successful", 
                    changes: this.changes
                })
        });
    })

};
    
    