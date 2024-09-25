const imagecontainer = document.querySelector(".image-container");

const prevE1 = document.getElementById("prev");
const nextE1 = document.getElementById("next");


let x = 0;
let timer;

updategallery();

prevE1.addEventListener("click", () => {
   x = x + 45;
   clearTimeout(timer);
   updategallery();
});

nextE1.addEventListener("click",()=>{
    x = x - 45;
    clearTimeout(timer);
    updategallery();
 });

function updategallery(){
    imagecontainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;
   
   timer = setTimeout(() => {
        x = x - 45;
        updategallery();
    }, 2000);
}

