// const cod=["js",'cpp','c','html','css'];


//     const value= cod.forEach( (item)=>{
//         console.log(item);
//         //dont return any value
//     })

//     console.log(values);



const num=[1,2,3,4,5,6,7,8,9];

// //filter function takes call back
// let newnum= num.filter((num) => num > 4 )  //here we have not open the scope so we can directly use conditon
// console.log(newnum);


// let newnum2= num.filter((num) => {    //if we use curly braces here we have to use the return  for condition 
//     return num > 4} )  
// console.log(newnum);


//using for each loop
let newnums=[]
 num.forEach( (num)=> {
    if(num>4){
        newnums.push(num)
    }
})
console.log(newnums);



 


