/* var http = require('http');
var fs = require('fs');

//readale streams

/* var myReadStream = fs.createReadStream(__dirname + '/readMe.txt','utf8');
var myWriteStream = fs.createWriteStream(__dirname +'/writeMe.txt');

myReadStream.on('data',function(chunk){
console.log('New chunk received');
myWriteStream.write(chunk);
}); */


//pipes
/* var myReadStream = fs.createReadStream(__dirname + '/readMe.txt','utf8');
var myWriteStream = fs.createWriteStream(__dirname +'/writeMe.txt');

myReadStream.pipe(myWriteStream); */




/* var server = http.createServer(function(req,res){

    console.log("request was made "+req.url);
    res.writeHead(200,{'Content-Type': 'application/json'});

    var myObj ={
        name: 'AK',
        age: 25,
        fav : 'blue;'
    }

    res.end(JSON.stringify(myObj)); */

    // var myReadStream = fs.createReadStream(__dirname + '/index.html','utf8');   

    // myReadStream.pipe(res);

    // res.end('Hey people');

/* });

server.listen(3000,'127.0.0.1');
console.log('listening to port 3000'); */


//Express

var express = require('express');

var app = express();

app.set('view engine','ejs');
app.use('/assets',express.static('assets'));

app.get('/',function(req,res){    
    res.sendFile(__dirname + '/index.html');
})



app.get('/profile', function(req,res){
    // res.send('You are viewing the profile with id:' + req.params.id);
    console.log();
    var data ={age: 20,job: 'student',hobbies: ['singing','playing','running']};
    res.render('profile',{person: req.params.id, data: data,qs:req.query});
})

app.listen(3000);

