const btn = document.getElementById("roll");

const diceE1 = document.getElementById("dice");

const rollhistoryE1 = document.getElementById("roll-history"); 

let historyList = [];

function rolldice(){
    const result = Math.floor(Math.random()*6) + 1;
    const diceface = getdiceface(result);
    diceE1.innerHTML = diceface;
    historyList.push(result);
    updatehistory();
}

function updatehistory(){
    rollhistoryE1.innerHTML = "";
    for(let i=0;i<historyList.length;i++){
        const listitem = document.createElement("li");
        listitem.innerHTML = `roll ${i+1}: <span>${getdiceface(historyList[i])}/span>`;
        rollhistoryE1.appendChild(listitem);
    }
}

function getdiceface(result){
       switch (result){
        case 1: 
           return "&#9856";
        case 2: 
           return "&#9857";
        case 3: 
           return "&#9858";
        case 4: 
            return "&#9859";
        case 5: 
             return "&#9860";
        case 6: 
             return "&#9861";
        default:
            return "";
    }

}

btn.addEventListener("click",()=>{
    diceE1.classList.add("roll-animation");
    setTimeout(() => {
        diceE1.classList.remove("roll-animation");
        rolldice();
    },1000);
});