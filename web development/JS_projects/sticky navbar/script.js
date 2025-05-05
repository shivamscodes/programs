const nav = document.querySelector(".navbar");

const bottomcontainer = document.querySelector(".bottom-container");


window.addEventListener("scroll",()=>{
    if(window.scrollY > bottomcontainer.offsetTop - nav.offsetHeight - 50){
        nav.classList.add("active");
    }else{
        nav.classList.remove("active");

    }
});