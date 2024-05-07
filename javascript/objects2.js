//v17
//const tinderuser=new object()

const tinderuser={}

tinderuser.id="abc"
tinderuser.name="peter"


//console.log(tinderuser);

const regular={
    email: "123@google.com",
    fullname:{
        username:{
            firstname:'shivam',
            lastname: 'sharma'
        }
    }
}

console.log(regular.fullname.username.firstname)


const obj1 ={ 1:'a', 2:'b'}
const obj2 ={3:'c',4:'d'}

//const obj3={obj1,obj2}
  //const obj3= Object.assign({},obj1,obj2); //Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object


  const obj3={...obj1,...obj2}
console.log(obj3);



console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('email'));



/* DESTRECTURE OBJECT */

const course={
    cousename: 'js ',
    price:"999",
    time:'6hr'
}

 //course.cousename;
 const{course: instrector}=course;
console.log(instrector)
 