const counterE1 = document.querySelector(".counter");

const loading = document.querySelector(".loading-bar-front");


let idx = 0;

update();

function update(){
    counterE1.innerText =  idx + "%";
    loading.style.width = idx + "%";
    idx++;
    if(idx < 101){
        setTimeout(update,20);
    }
}