//  fectch


let url="https://catfact.ninja/fact";

// fetch(url)
// .then((res)=>{
//     console.log(res);
//     res.json().then((data)=>{
//      console.log(data);
//     });
// })
// .catch((err)=> {
//     console.log("error",err);
// });



async function get(){
    try {
    let res= await fetch(url);
    let data =await res.json();
    console.log(data.fact );
}catch(err){
    console.log("err",err);
}
}