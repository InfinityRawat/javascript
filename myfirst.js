
let customer = "Jack"
let age = 35

// console.log(`Cusomer name is ${customer} and his age is ${age}`)

console.log(customer.charAt(3))
console.log(customer.substring(0,3))
console.log(customer.includes('ac'))

function convertoUpper(s1){
        return s1.toUpperCase();
}

console.log(convertoUpper("String"))

function compareThem(s1,s2){
    return s1===s2;
}

console.log(compareThem(convertoUpper(customer),"JaCK"))