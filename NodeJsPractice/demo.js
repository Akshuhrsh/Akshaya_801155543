var sum = function (num1,num2) {
return `The sum of two numbers is ${num1 + num2}`;
} 

var counter =function (arr){
    return 'The array contains ' + arr.length + ' elements in it';
}

module.exports = {
sum: sum,
counter : counter
};

//function expression and calling a function

var func =function () { 
    console.log("Welcome here");
}

func();


function callFunction(fun){
    fun();
}
function sayHi(){
    console.log('hi world');
}
callFunction(sayHi);