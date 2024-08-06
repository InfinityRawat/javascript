const url ="https://api.github.com/users/infinityrawat";

async function fetchingurl(){

    const response = await fetch(url);
    const jsonRep=  await response.json()
    console.log(jsonRep);
}
fetchingurl()
// fetch(url)
// .then((response)=>
// {
//     return response.json();
// })
// .then((response)=>{
//     console.log(response);
// })
// .catch((error)=>{
//     console.log(error);
// })