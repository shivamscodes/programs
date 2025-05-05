let p=document.createElement('p');
p.innerText="hi i am red";
document.querySelector('body').append(p);

p.classList.add('red');

let p2=document.createElement("h3");
p2.innerText="i am blue";
document.querySelector('body').append(p2);

p2.classList.add('blue');

let div=document.createElement('div');
let h1=document.createElement('h1');
let para=document.createElement('p');

h1.innerText="i am in a div";
para.innerText="me too";

div.append(h1);
div.append(para);

div.classList.add("box");
document.querySelector('body').append(div);

