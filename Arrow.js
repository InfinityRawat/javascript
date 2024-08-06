// Arrow and IIFE function 

//  IIFE function is exectud at the start of program 
// used to prevent global scope var pollute the function scope/ block scope var 
// two way to create a function is 

function fun1(){
    console.log("this is fun1");
    console.log(this);
}

// fun1()

// fun2("fun2 function") give error as fun2 is not initialized before this line

const fun2 = function(name){
        console.log(`this is function two ${name}`);
}

// fun2("fun2 function")

// difference b/w them is const fun2 is an expression we are intializing a var fun2 with function
// fun1 is a simple function fun1() we can write after or before fun1() defination

// arrow operator to create function 

const arrowFun = ()=>{console.log("This is arrow function");}
arrowFun()

// parameters with arrow 
const arrowFun2 = (num1,num2)=>{console.log(num1+num2);}
arrowFun2(1,53);

// IIFE
//  IIFE function need to end with ; to make js know where this function scope ends
// before function arrowFun2 also need to close by ;
(function IIFEfun1(){
    console.log(" Hum first... Hum first");
})();

// (()=>{console.log("Executed first");}) this just define a function to execute a function we need to use ()
(()=>{console.log("Executed");})();

//  parameters and arguments
const add = ((num1,num2)=> (num1+num2))(2,5)
console.log(add);

// when ever we have one line of code in arrow fuction body we use () 