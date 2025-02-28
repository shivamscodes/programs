score = 0;
cross= true;

audio= new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');
setTimeout(()=>{
   audio.play();
},1000);

document.onkeydown = function(e){
    console.log("key is :", e.key);
    if(e.key=="ArrowUp"){
       dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
           dino.classList.remove('animateDino'); 
        }, 700);
    }
     if(e.key=="ArrowRight"){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = dinoX + 130 + "px";
    }
    if(e.key=="ArrowLeft"){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + "px";
    }
}

setInterval(() => {
    dino = document.querySelector('.dino');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');


    dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left')); //value of dino on x-axis
    dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue('top')); //value of dino on y-axis
   
    ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left')); //value of obstacle on x-axis
    oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top')); //value of obstacle on x-axis

    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);
    // console.log(offsetX,offsetY);
    if(offsetX < 73 && offsetY < 52){
        gameover.innerHTML = 'Game Over - Reload to Play again';
        obstacle.classList.remove('obstacleAni');
        audio.pause();
        audiogo.play();
        setTimeout(()=>{
            audiogo.pause();
        },1000)
    }
    else if(offsetX < 145 && cross){
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(()=>{
            cross=true;
        },1000);

        setTimeout(()=>{
            aniDur =  parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
        
        },500);
    }


}, 10);


function updateScore(score){
    scorecont.innerHTML = "your Score: "+ score;
}