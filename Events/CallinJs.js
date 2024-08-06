// call is use to call method inside method, it take parameter this to send called context 
// for eg

function setUserName(name){
    // it create new Exe context and once exe is completed it remove context and the values of context
    //  using call we send this of the createUser context 
    //  the below this is taken form createUser context that why property is set now
    this.name = name;
}

function createUser(name,email,pass){
    // this.name= name;
    // /here we want to pass the context of this function ot setUserName 
    // setUserName(name)

    // using call method call take this (context of this funciton )as paramenter
    // now values of name set in this context
    setUserName.call(this,name)
    this.email=email;
    this.pass=pass;

    
}
const user1 = new createUser("Amit","Amit@google.com","123saa");

console.log(user1);