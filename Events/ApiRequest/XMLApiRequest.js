
const url ="https://api.github.com/users/infinityrawat";

const httpReq = new XMLHttpRequest();

httpReq.open('GET',url);
httpReq.onreadystatechange = function(){
    // console.log(httpReq.readyState);

    if(httpReq.readyState==4){
        // console.log(this.responseText);  type is string, parse it to json obj
        const response = JSON.parse(this.responseText);
        console.log(response);
        // console.log("completed!!");
    }
}
// httpReq.onreadystatechange(()=>
// {
//     console.log("state is : "+httpReq.readyState);
// });
httpReq.send();
console.log( httpReq.readyState);