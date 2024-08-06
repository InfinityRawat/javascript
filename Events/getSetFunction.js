
 function User (name,password){
    this._name=name;
    this._password=password;

        Object.defineProperty(this,"name",
            // object
            {
            get : ()=>{return this._name.toUpperCase()},
            set:()=>(this._name=name)
        })

        Object.defineProperty(this,"password",
            // object
            {
            get : ()=>(this._password.toUpperCase()),
            set:()=>(this._password=name)
 
        })
}

const user1 = new User("uwer1","pass23");
console.log(user1.password);


// function User(email, password){
//     this._email = email;
//     this._password = password

//     Object.defineProperty(this, 'email', {
//         get: function(){
//             return this._email.toUpperCase()
//         },
//         set: function(value){
//             this._email = value
//         }
//     })
//     Object.defineProperty(this, 'password', {
//         get: function(){
//             return this._password.toUpperCase()
//         },
//         set: function(value){
//             this._password = value
//         }
//     })

// }

// const chai = new User("chai@chai.com", "chai")

// console.log(chai.email);