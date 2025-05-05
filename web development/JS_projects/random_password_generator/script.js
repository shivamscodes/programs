const passwordbox = document.getElementById("password");
const btn = document.querySelector("#btn");
const copybtn = document.querySelector("#copy");



const length=12;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

const allchar = uppercase+lowercase+number+symbols;



function createpassword(){
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() *symbols.length)];

    while(length > password.length){
        password += allchar[Math.floor(Math.random() * allchar.length)];

    }


    passwordbox.value = password;
}


function copy(){
    passwordbox.select();
    document.execCommand("copy");
}

btn.addEventListener("click",createpassword);
copybtn.addEventListener("click",copy);