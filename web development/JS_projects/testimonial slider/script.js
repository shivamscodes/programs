const testimonial = [
    {
        name : "natash",
        photo:"https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
        text : "apple has helped my team and I stay on the same page. Previously, we were all over the board. Using apple has definitely saved us time and money.",

    },

    {
        name : "peter",
        photo:"https://images.unsplash.com/photo-1521310192545-4ac7951413f0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        text : "I love nike! This is an amazing service and it has saved me and my small business so much time. I plan to use it for a long time to come.",

    },

    {
        name : "tony",
        photo:"https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        text : "Everyone’s on the same page. Many of our people are not very organized naturally, so motivation is a godsend!",

    },

    {
        name : "hulk",
        photo:"https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        text : "motivation makes me more productive and gets the job done in a fraction of the time. I'm glad I found motivation.",

    },

    {
        name : "steve",
        photo:"https://images.unsplash.com/photo-1590649778473-d017b9013d2a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3MlMjBjYWxsfGVufDB8fDB8fHww",
        text : "motivation is a game-changer. Instead of drowning in an endless chain of emails, there is clear and easy accountability meaning tasks actually get done!",

    },
];

const imgE1 = document.querySelector("img");
const textE1 = document.querySelector(".text");
const nameE1 = document.querySelector(".name");

let idx=0;

update();


function update(){
    const{name,photo,text}= testimonial[idx];
    imgE1.src = photo;
    textE1.innerText = text;
    nameE1.innerText = name; 
    idx++;
    if(idx === testimonial.length){
        idx=0;
    }
    setTimeout(()=>{
        update()
    },4000) 
}