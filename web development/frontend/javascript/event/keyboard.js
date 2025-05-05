let btn=document.querySelector("button"); 

// btn.addEventListener("click",function(event){
//     console.log(event);   
//     console.log("clicked");
// });

btn.addEventListener("dblclick",function(event){
    console.log(event);   
    console.log("dbclicked");
});

let input=document.querySelector("input");

//  input.addEventListener("keydown",function(){
//      console.log("key was press");
//  });

input.addEventListener("keyup",function(event){
    console.log(event.key);
    console.log(event.code);
    console.log("key was releassed");
});

  