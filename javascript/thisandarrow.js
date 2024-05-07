const user={
    username:'sam',
    price:999,
  
    welcome: function(){
        console.log(`${this.username} , welcome to page`);
        console.log(this);

    }

}

// user.welcome();
// user.username='[eter';
// user.welcome();

console.log(this);  //globle obj in google is windows




// const code=function(){
//     let name='123';
//     console.log(this.name);
// }


const code=() => {
    let name='123';
    console.log(this.name);
}
//code();

//------------------------------------------------------arrow-------------------------------

// const addtwo=(num1,num2) =>{
//     return num1+num2;
// }
// console.log(addtwo(3,4));





// const addtwo=(num1,num2) => num1+num2
const addtwo=(num1,num2) => (num1+num2)

console.log(addtwo(3,4));

const add=(num1,num2)=> ({user:'shivam '})


