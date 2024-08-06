
// ifelse

var1 = 5;

// if(var1 >3){
//     console.log("Grater than 3");
// }

// if(var1<3){
//     console.log("Less Than 3");
// }

if(var1>3){
    console.log("Grater than 3");
}
else if(var1<3){
    console.log("Less Than 3");
}
else{
    console.log("Equals to five");
}

// difference between == and ===
if(var1=="5"){
    console.log("Equals to five");
}
if(var1 === "5"){
    console.log("Equal to five of string");
}

// falsey values = 0, false, undefined, "",BigInt= on,Nan
// truthy values = 1, true, "false", " ", [], "0", {}, function(){}

function fun1(name){
    if(!name){
        console.log("Please define name");
        
    }
    else{
            console.log(`Name in function is ${name}`);

    }
}
    fun1()
    fun1("")
    fun1([1,2,3])
    fun1("AR")
// Nullish Coalescing opr ??
// used for null undefined to give default value an null or undefined if function did'nt return anything
console.log("-------------------------------");
let v1 = null??20??30

console.log(v1);

console.log("-------------------------------");
// ternary operator

let v2 = 11

console.log((v2==10)?12:10);

console.log("-------------------------------");

// switch
const day = "thr"

switch(day){
    case "mon":
        console.log("today is monday");
        break;
    case "tue":
        console.log("today is tuesday");
        break;
    case "wed":
        console.log("today is wednesday");
        break;
    case "thr":
        console.log("today is thursday");
        break;
    case "fri":
        console.log("today is friday");
        break;
    case "sat":
        console.log("today is saturday");
        break;
    default:
        console.log("This is default case");
        break;
}

