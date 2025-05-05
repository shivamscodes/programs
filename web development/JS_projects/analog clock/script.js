const hour = document.querySelector(".hours");
const minute = document.querySelector(".minutes");
const second = document.querySelector(".seconds");

function update(){
    const currentdate = new Date();
   
    const hours = currentdate.getHours();
    const minutes = currentdate.getMinutes();
    const seconds = currentdate.getSeconds();

    const hourdeg = (hours / 12) * 360;
    hour.style.transform = `rotate(${hourdeg}deg)`;
    
    const minutedeg = (minutes / 60) * 360;
    minute.style.transform = `rotate(${minutedeg}deg)`;
    
    const seconddeg = (seconds / 60) * 360;
    second.style.transform = `rotate(${seconddeg}deg)`;

    setTimeout(update,1000);
}

update();