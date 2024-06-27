let btn=document.querySelector("button");

btn.addEventListener("click",function(){

    let h3=document.querySelector("h3");
    let rand=getrandomcolour();
    h3.innerText=rand;
  
    let div=document.querySelector("div");
    div.style.backgroundColor = rand;


       console.log(" randonm colour update");
});


function getrandomcolour(){
     let red=Math.floor(Math.random() * 255);
     let green=Math.floor(Math.random() * 255);
     let blue=Math.floor(Math.random() * 255);
    
     let color=`rgb(${red},${green},${blue})`;
     return color;
    }