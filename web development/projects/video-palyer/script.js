const btnE1 = document.querySelector(".btn");
const closeE1 = document.querySelector(".close-icon");

const tralier = document.querySelector(".trailer-container");
const videoE1 = document.querySelector("video");


btnE1.addEventListener("click",()=>{
    tralier.classList.remove("active");
});

closeE1.addEventListener("click",()=>{
    tralier.classList.add("active");
    videoE1.pause();
    videoE1.currentTime = 0;
});  