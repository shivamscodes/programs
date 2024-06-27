let btn=document.querySelector("button");
let url2="https://dog.ceo/api/breeds/image/random";


// btn.addEventListener("click",async ()=> {
//      let fact= await get();
//   //  console.log(fact);
//      let p=document.querySelector("p");
//      p.innerText=fact;

// });





// let url="https://catfact.ninja/fact";



// async function get(){
//     try {
//     let res= await axios.get(url);
//    // let data =await res.json();
//     //console.log(res );
//     return res.data.fact;

// }catch(err){
//     console.log("err",err);
//    return "no fact found";
// }
// }



btn.addEventListener("click",async ()=> {
  let link=await getimg();
  //console.log(link);
  let img=document.querySelector("#output");
  img.setAttribute("src",link);
    });   
    
    async function getimg(){
        try {
        let res= await axios.get(url2);
       return res.data.message;
    
    }catch(err){
        console.log("err",err);
       return "no image found";
    }
    }
    
    
    
    