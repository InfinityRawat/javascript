//  using static keyword

// we use static when we want to constrainst the access of function 
// for eg  every user should not create id;

class User{
    constructor(username){
        this.username=username;
    }

   static generateId(){
        return 123;
    }
}

const user1  =new User();
console.log(User.generateId());
// console.log(user1.generateId());
