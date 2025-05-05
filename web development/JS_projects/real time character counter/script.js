const textarea = document.getElementById("textarea");
const total = document.getElementById("total");
const remaning = document.getElementById("remaning");


updatecounter();

textarea.addEventListener("keyup",()=>{
              updatecounter()
})

function updatecounter(){
   total.innerText = textarea.value.length;
   remaning.innerText = 1000-textarea.value.length;
}