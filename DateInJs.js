

let myDate = new Date(2023,0,23);

// console.log(myDate.toString())
// console.log(myDate)
// console.log(myDate.toLocaleDateString())

// comparing date

const mydate = new Date("01-12-2023")
const comparedate = Date.now();
console.log(myDate.getTime());
console.log(comparedate);

console.log( comparedate - myDate.getTime());

// converting time to sec we divide time to 1000

let inSec = Math.floor(mydate.getTime()/1000);
console.log(inSec);

