function savedb(data){
       return new Promise((resolve,reject)=> {
        let internetspeed=Math.floor(Math.random()*10)+1;
         if(internetspeed>4){
            resolve("sucess: data saved");
         }else{
            reject("faliure : dta not saved");
         }
       });  
  }

//   let request= savedb("apna college");
// request
//    .then(()=> {
//     console.log("promise was resoved");
//     console.log(request);
//    })  
// .catch(()=>{
//     console.log("promise was rejected");
//     console.log(request);

// });


//promise chaning

//  savedb("apna college")
//    .then(()=> {
//     console.log(" data 1 saved");
//     savedb("hello")
//        .then(()=> {
//         console.log("data 2 saved");
//        });
//    })  
// .catch(()=>{
//     console.log("promise was rejected");
//    })


// savedb("apna college")
//    .then(()=> {
//     console.log(" data 1 saved");
//      return savedb("hello");
//    })  
//    .then(()=> {
//       console.log("data 2 saved");
//       return savedb("ok chaining");
//    })
//    .then(()=> {
//       console .log("data 3 saved");
//    })
// .catch(()=>{ 
//     console.log("promise was rejected");
//    })



savedb("apna college")
   .then((result)=> {
    console.log(" data 1 saved");
    console.log(result);
     return savedb("hello");
   })  
   .then((result)=> {
      console.log("data 2 saved");
      console.log(result);

      return savedb("ok chaining");
   })
   .then((result)=> {
      console .log("data 3 saved");
      console.log(result);

   })
.catch((error)=>{ 
    console.log("promise was rejected");
    console.log(error);

   })
