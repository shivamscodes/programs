// let box=document.querySelector("box");
// box.addEventListener("mouseenter",function(){
//       console.log("mouse inside");
// });


let btn=document.querySelector("button");
let p=document.querySelector("p");
let h1=document.querySelector("h1");
let h3=document.querySelector("h3");


function change(){
    console.dir(this.innerText);
    this.style.backgroundColor="green";
}
btn.addEventListener("click",change);

p.addEventListener("click",change);

h1.addEventListener("click",change);

h3.addEventListener("click",change);




// btn.addEventListener("click",function(){
//     console.log(this);
//     console.dir(this.innerText);
//     this.style.backgroundColor="green";
// });

// p.addEventListener("click",function(){
//     console.log(this);
//     console.dir(this.innerText);
//     this.style.backgroundColor="green";
// });

// h1.addEventListener("click",function(){
//     console.log(this);
//     console.dir(this.innerText);
//     this.style.backgroundColor="green";
// });

// h3.addEventListener("click",function(){
//     console.log(this);
//     console.dir(this.innerText);
//     this.style.backgroundColor="green";
// });
