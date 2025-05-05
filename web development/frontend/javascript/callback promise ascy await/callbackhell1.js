function savedb(data,success,failure){
  let internetspeed=Math.floor(Math.random()*10)+1;
  if(internetspeed > 4){
    success();
  } else{
    failure();
  }

}

savedb("apna college",
  ()=>{
  console.log("success : saved");
  savedb("hello world", 
    ()=>{
      console.log("sucess2:  saved");
      savedb("call back hell ", 
        ()=>{
          console.log("sucess3:  saved")
        },
        ()=>{
          console.log("faliure 3 :not saved")
        }
      );
    },
    ()=>{
      console.log("faliure 2 :not saved");
    }
  );
},
()=>{
  console.log("faliure : not saved");
});