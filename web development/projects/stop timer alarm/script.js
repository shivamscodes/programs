const start = document.getElementById("start");
const stopE1 = document.getElementById("stop");
const reset = document.getElementById("reset");
const timerE1 = document.getElementById("timer");

let interval;
let timerleft = 1500;

function update(){
   let minutes = Math.floor(timerleft / 60);
   let seconds = timerleft % 60;
   let formattedTime = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;


   timerE1.innerHTML = formattedTime;
}


function starttimer(){
    interval = setInterval(()=>{
        timerleft--;
        update();
        if(timerleft===0){
            clearInterval(interval);
            alert("times up!!");
            timerleft = 1500;
        }
    }, 1000)
}

function stoptimer(){
    clearInterval(interval);
}

function resettimer(){
    clearInterval(interval);
    timerleft= 1500;
    update();
}

start.addEventListener("click",starttimer);
stopE1.addEventListener("click",stoptimer);
reset.addEventListener("click",resettimer);