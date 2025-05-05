let h1=document.querySelector("h1");

// function changecolor(color){
//     h1.style.color=color;
// }

// setTimeout(changecolor("red") ,1000);

// setTimeout(changecolor("orange"),2000);

// setTimeout(changecolor("green"),3000);

// function changecolor(color,delay, nextcolor){  //nextcolor is a call back function 
//     setTimeout(()=> {
//         h1.style.color=color;
//        if(nextcolor) nextcolor();
//     } ,delay)
    
// }

// changecolor("red" ,1000,()=> {
//     changecolor("orange",1000 ,()=>{
//         changecolor("green",1000,()=> {
//             changecolor("blue",1000,()=>{
//                 changecolor("pink",1000);
//             });
//         });
//     });
// });

//callback nesting  -> callback hell


function changecolor(color,delay){ 
 return new Promise((resolve,reject)=>{
    setTimeout(()=> {
        h1.style.color=color;
       resolve("cnahged");
    } ,delay)
 });
}
    
 changecolor("red",1000)
 .then(()=> {
    console.log("red color");
    return changecolor("blue",1000);
 })
 .then(()=> {
    console.log("blue changed");
    return changecolor("green",1000);

 })
 .then(()=> {
    console.log("green changed");
    return changecolor("orange",1000);
 })
 .then(()=> {
    console.log("orange changed");
   })
 .catch(()=>{
    console.log("error occur");
 })
    
