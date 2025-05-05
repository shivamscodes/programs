const container = document.querySelector(".container");
for (let index = 0; index < 30; index++) {
    const colorContainer = document.createElement("div");
    colorContainer.classList.add("color-container");
    container.appendChild(colorContainer);
}

const colorContainerE1 = document.querySelectorAll(".color-container");

generateColor();


function generateColor(){
    colorContainerE1.forEach((colorContainerE1) => {
        const newcolor = randomColor();
        colorContainerE1.style.backgroundColor = "#" + newcolor;
        colorContainerE1.innerText = "#" + newcolor;
    
    })
}

function randomColor(){
    const char = "0123456789abcdef";
    const colorlength = 6;
    let colorcode = "";
    for (let index = 0; index < colorlength; index++) {
        const randomnum= Math.floor(Math.random()* char.length);
        colorcode += char.substring(randomnum, randomnum + 1);
        
    }
    return colorcode;
}