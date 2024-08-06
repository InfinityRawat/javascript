const user1 = {
    _name:"MyName",
    _password:"myPassword",

    get name(){
        console.log("this is getting called");

      return   this._name
    },

    set name(name){
        this.name = _name;
    }

}

console.log(user1.name);