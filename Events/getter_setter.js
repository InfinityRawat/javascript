
class User{
    constructor(name,pass){
        this.name = name;
        this.pass=pass;
        console.log("Constructor run");
    }
    // var name inside get and set must be different than prop name like we use _name for name
        // becouse const also tries to assign value to property
    //  get and set method name must be same as property name  
    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }

    
    get pass(){
        return this._pass;
    }

    set pass(pass){
        this._pass = pass;
    }

    // get userName(){
    //     return this.name;
    // }

    // set userName(name){
    //     this.name = name;
    // }

    // get password(){
    //     return this.pass;
    // }

    // set password(pass){
    //     this.pass = pass;
    // }
}

const user1 = new User("name1","passw1");

// user1.userName="IUser"
// user1.password = "Pass"

console.log(user1);