




setInterval(function(){
    const mydate = document.querySelector(".date");
    // const heading = mydate.children.item(0);
    const date = new Date().toLocaleTimeString("en-IN");
    mydate.innerHTML=date
    console.log(date);
},1000)
