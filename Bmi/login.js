



    const form = document.querySelector("form")

    form.addEventListener(('submit'),(event)=>{
        event.preventDefault()
   
    const height= parseInt(document.querySelector("#height").value);
    const weight= parseInt(document.querySelector("#weight").value);

    const result= document.querySelector(".result");

    if(height==""||isNaN(height)||height<=0){
        result.innerText="please give valid height";
    }

   else if(weight==""||isNaN(weight)||weight<=0){
        result.innerText="please give valid weight";
    }
    else{
    const res = (weight/((height*height)/1000)).toFixed(2);
    result.innerText=res;
    }
})

