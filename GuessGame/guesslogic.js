

let random = generateRandomNumberBwt1To100();
console.log(random);

const guess = document.querySelector("#guess")
const submitGuess = document.querySelector("#submitButton")
const prev = document.querySelector(".displayGuess p #prev")
const remain = document.querySelector(".displayGuess p  #remain")
const loh = document.querySelector(".displayGuess .lowOrHi")
const displayGuessClass = document.querySelector(".displayGuess")


const p = document.createElement("p")

let prevGuess = [];
let numGuess = 1;
let playgame = true;

if(playgame){
    submitGuess.addEventListener(('click'),(event)=>{
        event.preventDefault()
        const val = parseInt(guess.value)
        console.log(val);
        validate(val);
    })

    function validate(val){
        console.log("inside function  "+ val);
        if(prevGuess.length>=10){
            gameEnd("Guess Are Over");
        }
        else if(val==""||(val<1||val>100)||isNaN(val)){
            alert("not a valid number");
        }
        else if(prevGuess.includes(val)){
            alert("Already Guessed this number!")
        }
        else{

           if(checkGuess(val)){
                gameEnd("Your Guess is correct!");
           }
           else{
            displayGuess(val);
           }
        }
    }

    function checkGuess(val){
        console.log(`inside checkGuess val is ${val} 
            random is ${random}`);
        return random==val;
    }

    function displayGuess(val){
        prevGuess.push(val)
        numGuess++;
        prev.innerText=prevGuess;
        remain.innerText=prevGuess.length
        lowOrHigh(val)
    }

    function lowOrHigh(val)
    {
        let mess ="";
        if(val<random){
            mess="your guess is low"
        }
        else{
            mess= "your guess is high"
        }
        loh.innerHTML=`<h2>${mess}</h2>`
    }

    function gameEnd(result){
        loh.innerHTML=`<h2>${result}!</h2>`
        p.classList.add('button')
        p.innerHTML="<h2 id = 'newGame'>Play Again</h2>"
        displayGuessClass.appendChild(p)
        guess.setAttribute("disabled","")
        playAgain();
    }

    function playAgain(){
        p.addEventListener(('click'),(event)=>{
        guess.value="";
        prevGuess=[];
        // numGuess=0;
        prev.innerText="";
        loh.innerHTML=""
        playgame=false;
        p.innerHTML=""
        guess.removeAttribute("disabled")
        remain.innerText=0
        random = generateRandomNumberBwt1To100();
        })
        
    }
}

function generateRandomNumberBwt1To100(){
    return parseInt((Math.random()*100)+1);
}