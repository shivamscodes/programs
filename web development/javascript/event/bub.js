let div=document.querySelector("div");
let ul=document.querySelector("ul");
let li=document.querySelectorAll("li");

div.addEventListener("click",function(){
     console.log("div clicked")
});

ul.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("ul clicked");
});

for(li of li){
li.addEventListener("click",function(event)
{
    event.stopPropagation();
    console.log("li clicked");
});
}