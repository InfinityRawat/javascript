

const start = document.querySelector(".container #start");
const stop = document.querySelector(".container #stop")

function generateRandomColor(){

    const sequence= "0123456789ABCDEF"
    let randomColor="#";
    for (let index = 0; index < 6; index++) {
        
    let rand = Math.floor(Math.random()*16);
    randomColor += sequence[rand];
    }

    document.body.style.backgroundColor=randomColor;  

}
let interval;
start.addEventListener('click',(event)=>{
    // here we are checking only if interval is null or undefined(new)
    // then it should create/register event
    // if we don't do this check at every start click new  setinterval  event get created and 
    // then we can't have their references 
    if(!interval)
  interval=  setInterval(generateRandomColor,1000);
   ;
})

stop.addEventListener('click',(event)=>{
    clearInterval(interval)
    interval=null;
})
// 