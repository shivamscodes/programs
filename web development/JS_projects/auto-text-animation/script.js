const containerE1 = document.querySelector(".container");

const career = ["youtube" ,"web developer" ,"freelance","instructor"];
let careeridx = 0;
let charactersticsidx = 0 ;

update();

function update(){
    charactersticsidx++;
 containerE1.innerHTML= ` <h1>i am a ${career[careeridx].slice(0,charactersticsidx)}</h1>`


if(charactersticsidx === career[careeridx].length){
    careeridx++;
    charactersticsidx = 0;
}

if(careeridx === career.length){
    careeridx = 0;
}
setTimeout(update,400);
}