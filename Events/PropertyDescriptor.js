
// object -> we can get additional property of object by using 
// getOwnPropertyDescriptor(class,feild) it will show us if the feild is 
// enumerator, writable, configurable and give value
// with this we can see that math.pi value is writable:false we cannot write it 

console.log(Object.getOwnPropertyDescriptor(Math,"PI"));
    Math.PI
// every object have these properties if we want our class some properties to be 
// not enumerated or writable:false(cannot change) 
// to change this property we use defineProperty(obj,prop,{
//     {
//         value: 3.141592653589793,
//         writable: false,
//         enumerable: false,
//         configurable: false
//       }
// })
class User{
    constructor(name,pass){
        this.name=name;
        this.pass=pass;
    }
}

const user1 = new User("AR","pass");
Object.defineProperty(user1,"pass",
    {
        writable: false,
        enumerable: false,
      }
)
console.log(user1);

console.log(Object.getOwnPropertyDescriptor(user1,"pass"));
// not change
user1.pass="newpass"
console.log(user1.pass);