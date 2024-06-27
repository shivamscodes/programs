// let btn=document.querySelector("button");
// console.dir(btn);

let btns=document.querySelectorAll("button");
for(btn of btns){
    // btn.onmouseenter=function(){
    //     console.log("you enerted a  button");
    //}
 //btn.onclick=say;

//     btn.addEventListner("click",say);
//    btn.addEventListner("click",sayname);
   btn.addEventListner("dbclick",function(){
    console.log("double clicked");
   });
    
}




// btn.onclick=function(){
//     console.log("button clicked");

// };


function say(){
    alert("helo");
}

// btn.onclick=say;

function sayname(){
    console.log("apna coll")
}