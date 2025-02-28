const btn = document.getElementById("button");
const birthdayE1 = document.getElementById("birthday");
const result = document.getElementById("result"); 
function calculate(){
 const birthdayvalue = birthdayE1.value;

 if(birthdayvalue === ""){
    alert("please enter your birthday");
 }
 else{
    const age = getAge(birthdayvalue);
    result.innerText = `your age is ${age}years`
 }
}

function getAge(birthdayvalue){
    const currentdate = new Date();
    const birthdate = new Date(birthdayvalue);
    const age = currentdate.getFullYear() - birthdate.getFullYear();
    const month = currentdate.getMonth() - birthdate.getMonth();

    if(month<0 || (month=== 0 && currentdate.getDate() < birthdate.getDate())){
        age--;
    }
 return age;   
}


btn.addEventListener("click",calculate)