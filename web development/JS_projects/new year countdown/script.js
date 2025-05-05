const dayE1 = document.getElementById("day");
const hoursE1 = document.getElementById("hours");
const minutesE1 = document.getElementById("minutes");
const secondsE1 = document.getElementById("seconds");

const newdate = new Date("Jan 1, 2025 00:00:00").getTime();

update();

function update(){
    const now = new Date().getTime();
    const gap = newdate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap/ day);
    const h = Math.floor((gap% day)/hour);
    const m = Math.floor((gap% hour)/minute);
    const s = Math.floor((gap% minute)/second);

    dayE1.innerText = d;
    hoursE1.innerText = h;
    minutesE1.innerText = m;
    secondsE1.innerText = s;
    setTimeout(update, 1000);

}