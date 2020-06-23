const demo = require('./demo');
console.log(demo);
console.log(demo.sum(2,3));
console.log(__dirname);
console.log(__filename);
console.log(demo.counter(['nancy','drew','harry','potter']));


//EventEmitter

var events = require('events');
var util = require('util');

var Person = function(name){
this.name = name;
};
util.inherits(Person,events.EventEmitter);

var james =new  Person('james');
var john  =new  Person('john');
var jamie =new Person('jamie');

var people = [james,john,jamie];

people.forEach(function(person){
person.on('speak',function(msg){
    console.log(person.name + ' said : '+ msg);
});
});

james.emit('speak','Hello people');

// var myEventEmitter =new  events.EventEmitter();

// myEventEmitter.on('someEvent',function (mssg){
//     console.log(mssg);
// });

// myEventEmitter.emit('someEvent','Event was emitted');






