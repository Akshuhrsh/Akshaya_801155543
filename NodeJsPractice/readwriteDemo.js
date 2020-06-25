//read and write file

var fs = require('fs');

// var fileContent = fs.readFileSync('readMe.txt', 'utf8');

// fs.writeFileSync('writeMe.txt',fileContent);

/* fs.readFile('readMe.txt', 'utf8',function (err,data){
    fs.writeFile('writeMee.txt',data,(err) => {
        if(err){
            throw err;            
        }
    });
}); */

//delete a file

/* fs.unlink('writeMee.txt',function (err){
    
}); */

//create and remove directory

// fs.mkdirSync('stuff');
// fs.rmdirSync('stuff');

fs.mkdir('stuff',function(){
    fs.readFile('readMe.txt','utf8',function(err,data){
        fs.writeFile('./stuff/writeMee.txt',data,function(){
            
        })
    })
});

