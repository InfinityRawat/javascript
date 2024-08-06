
const promise1 = new Promise((resolve,reject)=>
{
    let error = true;
    if(!error){
    setTimeout(()=>{
        console.log("Promise1 completed");
        resolve({username:"AR",project:"fullStack"})
    },1000)
} 
else{
    console.log("Error on promise ");
    reject(
        {username:"not Found",project:"notFound"}
    );
}
})

// promise1.then((user)=>{
//    return (user.username);
// }).then((username)=>{
//     console.log(username);
// }).catch((error)=>{
//     console.log(error);
// })

async function promiseAsyncThen(){
    // promise1ref contain resolve argument
    try{
        const promise1ref = await promise1;
    console.log(promise1ref);
    }catch(Error){
        // error contain reject's arguments
        console.log(Error);
    }
}

promiseAsyncThen()