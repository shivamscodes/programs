const inputE1 = document.querySelector(".dark");
const body = document.querySelector("body");

inputE1.checked =JSON.parse(localStorage.getItem("mode"));

update();

function update(){
    if(inputE1.checked){
        body.style.background = "black";
    }else{
        body.style.background = "white";
    }   
}

inputE1.addEventListener("input",()=>{
    update();
    updateLocalStorage();
})

function updateLocalStorage(){
    localStorage.setItem("mode",JSON.stringify(inputE1.checked ));
}