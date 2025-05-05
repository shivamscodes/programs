 async function green(){
//     console.log("hello");
   return "hello";
}


green()
.then((result)=>{
    console.log("promise waS RESolved");
    console.log(result);
})
.catch((error)=>{
    console.log("promise rejected");
    console.log(error);
})


let demo= async function() {
    console.log("demo called");  
}





