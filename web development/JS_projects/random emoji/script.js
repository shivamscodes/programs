const btn1 = document.getElementById("btn");
const emojiname = document.getElementById("name");

const emoji = [];

async function getemoji(){
    let response = await fetch("https://emoji-api.com/emojis?access_key=9cea4434b249b8724a053b090e4c84546ccd7e4c");
    
    data = await response.json();
    
    for(let i=0;i<1500;i++){
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName,
        })
    }
}

getemoji();

btn1.addEventListener("click", ()=>{
    const random = Math.floor(Math.random()*emoji.length) ;
    btn1.innerText = emoji[random].emojiName;
    emojiname.innerText = emoji[random].emojiCode;



});