

// creating array in js - array can store any datatype

const arr = [false, 1,2,"3"]

console.log(arr);

console.log(arr[3]);
console.log(arr.join(" "));

// add element in array and return new length of an array
console.log(arr.push(4));

// remove the last element of an array and return it 
console.log(arr.pop());
// shift remove first element of an array and return it
console.log(arr.shift());

console.log(arr);

console.log(arr.unshift("woow"));
console.log(arr);

console.log(arr.includes("3"));

const arr1 = [1,2,3,4,[5,6],[7,[8,9,[10]]]]

console.log(arr1);
// convert array of array to a single dimension array
const newArr1 = arr1.flat(Infinity)
console.log(newArr1);

// slice - return you a sub array from init to end

console.log(arr.slice(1,3));

// splice - return you a sub array from init to end by cutting sub array part from original array
console.log(arr);
console.log(arr.splice(1,3));
console.log(arr);


let newArr = arr.concat(newArr1);
console.log(newArr);

// spread or ... operator

const marvel = ["ironMan","spiderMan","Dr. Strange"]
const InHero = ["shaktiMaan", "Naagraj","junior G"]

const AllHero = [...marvel,...InHero]
console.log(AllHero);