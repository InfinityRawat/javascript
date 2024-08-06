
//  objects in js can be created by 2 ways 
//  constructor -> create only singlton objec
//  const literals -> here we only going to use constructor literals

const user = {
    userName:"Amit",
    age: 15,
    mail:"amit@gmail.com"
}

console.log(user);
//  two ways to access properties
console.log(user.userName);
console.log(user["mail"]);

// adding prop in user objects

user.sports = "Football"
console.log(user);
// object inside object
user.address = {
    state : "Uttarakhand",
    city : "Dehradun"
}
console.log(user);
console.log(user["address"]["city"]);

// function in object

user.greeting = function(){

        console.log(`Conguratulation you are selected in our team`);
}

user.greeting()

user.greeting2 = function(){
    console.log(`H1 ${this.userName}, How are you?`);
}

console.log(user.greeting2());

// merging two objects 

const parentDetails ={
    fatherName : "BSR",
    motherName : "PR"
}

const newObj = Object.assign({},user,parentDetails)
console.log(newObj);
const newObj2 = {...user,...parentDetails}
console.log(newObj2);

//  giving new syntax to acces prop of objects - we use it in react and angular also
// now here without using a ref from object we can just use prop name and get data 
const {userName} = user
console.log(userName);
// here we can assign the prop other name to access also
const {userName:uName} = user
console.log(uName);
//  in react when we use c
// const nav= ({company}) => {}  by def we get prop to get prop by we can give 
// name same way as we do above  const {userName:uName} = user

// this give use current context 
// with this we can get prop of current contex like on object we can use this.objprop

const obj ={
    userName:"AR",

    getName :function (){
            console.log(this.userName);
            console.log(globalThis);
    }
}

obj.getName()
console.log(this);
// global context in node js is {} empty object 
//  In brower its window object
//  in function its Object [Global]
var1 = "thisisVar"
function fun4(){
    var2 = "this is Var2"
    console.log(this.var1);
    console.log(this.var2);
}
fun4()
