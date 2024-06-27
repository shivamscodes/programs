let gameseq=[];
let userseq=[];

let btns=["red","yellow","purple","green"];

let start=false;
let level=0;

let h2=document.querySelector("h2");


document.addEventListener("keypress",function(){
   if(start==false){
    console.log("game started");
    start=true;
    
    levelup();
}
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
     level++;
   h2.innerText=`level ${level}`;
  
   let rand=Math.floor(Math.random()*3);
   let randcolor=btns[rand];
   let randbtn=document.querySelector(`${randcolor}`)
   
//    console.log(rand);
//    console.log(randcolor);
//    console.log(randbtn);
   gameseq.push(randcolor);
   console.log(gameseq);
   gameflash(randbtn);
}

function check(){
    console.log("curr level :",level);
    let idx=level-1;
    if(userseq[idx]===gameseq[idx]){
        console.log("same value");

    }else{
        h2.innerText=`game over${level}`;
    }

}


function btnPress(){
    console.log(this);
    let btn=this;
    userflash(btn);

        usercolor=btn.getAttribute("id");
        userseq.push(usercolor);
        check();
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

