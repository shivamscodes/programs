//singleton
//object.create


//video 16
//object literals

const sym= Symbol("key1");   //using symbole 


let user={
    name: 'shivam',
    "full name": "shivam sharma",    //declearing this value we cannot acces by dot method
    [sym]:"mykey",  //synatx of key 
    age:22,
    email:"@google.com",
    isloged:false,
    last:['monday','wednesday']
}

console.log(user.name);
console.log(user["email"]);

console.log(user["full name"]); /// we have to use brackets for this


console.log(user[sym]);

user.email="123@gmail.com";
//Object.freeze(user)

user.email="453@mail.com";
console.log(user);

user.greeting = function(){
    console.log("hello js");
}

console.log(user.greeting);  //function return -- refernce not ecexuted
console.log(user.greeting());  // function executed

user.greeting2 = function(){
    console.log(`hello js,${user.name}`);
}
console.log(user.greeting2());