

// function 

const userName = function() {
    console.log("This is function!");
}

userName()

//  function with parameter

const funct = function(num1,num2){
    return num1+num2;
}

console.log(funct(2,5));
// this is going to break, it will return string
console.log(funct(1,"6"))

// function with name 

const functName = function(name){
    if(!name){
        console.log(`please give any Name in argument`);
        return
    }

    console.log(`your name is ${name}`);
}

functName("YourName")
functName() 
// passing object in function

const user ={
    name: "AR",
    password: "pass"
}

const func = function(endUser){

    return `end user name is ${endUser.name} and password is ${endUser.password}`
}

console.log(func(user));

//  using restOperator or using varargs in js using ... operator

const func2 = function(...vars){
        return vars;
}

console.log(func2(1,2,3,4));

const func3 = function(num1,num2,...vars){
     return vars;
}

console.log(func3(43,45,9,4,1,3,34));


