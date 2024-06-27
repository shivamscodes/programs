//  function getnum(){
//    return new Promise((resolve,reject)=>{
//     setTimeout(() =>{
//       let num=Math.floor(Math.random()*10)+1;
//       //return num;
//       console.log(num);
//       resolve();
//     },1000);
//    });
//  }

//  async function demo(){
//     await getnum();
//     await getnum();
//     await getnum();
//     await getnum();
//  }



 let h1=document.querySelector("h1");


function changecolor(color,delay){ 
    return new Promise((resolve,reject)=>{
       setTimeout(()=> {
         let num=Math.floor(Math.random()*10)+1; //for rejecting the p
         if(num>7){
            reject("promise reject");
         }   
         h1.style.color=color;
          resolve("cnahged");
       } ,delay)
    });
   }

   async function demo(){
      try{
    await  changecolor("red",1000);
    await changecolor("blue",1000);
    await changecolor("orange",1000);
    await changecolor("green",1000);
      }
      catch(error){
         console.log("error csught");
         console.log(error);
      }

    let a=5;
    console.log(a);
    console.log("new num ",a+3);
   }