

const fun1 = function(){
    console.log(this);
}

// fun1()
fun1.number = 23;

// fun1()

// console.log(fun1.number);

// console.log(Object.getPrototypeOf(fun1));

// creating functions in prototype
// we want to create a function which can be used by every string.
// that function return trim length of string

const name = "myname   "

String.prototype.trueLength = function(){
    console.log(this.trim().length);
}

// name.trueLength();

const myobj = {
    name:"AR",
    class:1,
    getContent: function(){
        console.log(`name is ${name} class is ${this.class}`);
    }
}

// myobj.getContent();

const myhero =["shaktimaan","batman","ironMan"]

// if we want to create a function which can be used by any object we create in js 
// we create that function inside object's prototype 

Object.prototype.showContent=function(){
    console.log(this.toString());
}

myhero.showContent();
myobj.showContent();
name.showContent();
