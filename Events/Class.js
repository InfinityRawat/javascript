
// creating class using class keyword 
// when creating class using class we have to create constructor using constructor keyword
// behind the scean it create function and use prototype to add function on class

class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`userName is ${this.username}`);
    }
}

// creating Teacher class which inherit user class 
//  we can use extends keyword here -> behind the scean it is using __proto__

class Teacher extends User{

    constructor(username,email,pass){
        // behind the scean it is using call and sending this context
        super(username);
        this.email = email;
        this.pass =pass;
    }

    courseAdded(){
        console.log(`new course was added by ${this.username}`);
    }
}

const chai = new User('Chai');
// chai.logMe();

const masalaChai= new Teacher('MasalaChai',"chai@google.conm","123asdfd")
// masalaChai.courseAdded();
// masalaChai.logMe();

// behind the scean

function SchoolUser(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

SchoolUser.prototype.aboutUser = function(){
    console.log(`username is ${this.username} and email is ${this.password}`);
}

const newUser= new SchoolUser("U1","U1@gm.com","aseerwer12")
newUser.aboutUser();

// inheritence in function

function TeacherUser(username,email,password,subject){
    SchoolUser.call(this,username,email,password)
    this.subject=subject;
    
}
TeacherUser.prototype.getInfo = function(){
    console.log(`user name is ${username}, email is ${email} password is ${password} subject is ${subject}`);
}
// Object.setPrototypeOf(Teacher.prototype,SchoolUser.prototype)



const teach = new TeacherUser('Teaacher','wamil@gmaw.com',"asdf12323","science");
teach.__proto__=newUser
console.log(teach instanceof TeacherUser);
console.log(teach.aboutUser());
teach.getInfo()
// console.log(teach.aboutUser());
// ob =teach;
// while(Object.getPrototypeOf(ob)){
//     console.log(ob);
//     ob = Object.getPrototypeOf(ob)

// }