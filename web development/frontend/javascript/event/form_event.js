let form=document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault(); 
   // alert("form sumbited");

   let input=document.querySelector("input");
   console.dir(input);
   console.log(input.value);
});