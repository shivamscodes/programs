const imagecontainerE1  = document.querySelector(".container");

const btn =  document.querySelector(".btn");

btn.addEventListener("click",()=>{
   imagenum=9;
    addNewImage();
});

function addNewImage(){
    for (let index = 0; index < imagenum; index++) {
        const newimg = document.createElement("img")
        newimg.src= `https://picsum.photos/200/300?random=${Math.floor(Math.random()*100)}`;
     
        imagecontainerE1.appendChild(newimg);
    }
        
    }
  
