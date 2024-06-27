let num=[1,2,3,4]

let total=num.reduce(function (acc, currval){
    console.log(`acc: ${acc},cur: ${currval}`);
    return acc + currval
} ,0)


// let total =num.reduce((acc,cur) => acc+cur ,0)

console.log(total);



//===========================================

const coding=[
    {
     language:"javascript",
     file:'1'
},

{
    language:"c++",
    file:'2'
},

{
    language:"pyton",
    file:'3'
},

{
    language:"css",
    file:'4'
}
,
{
    language:"html",
    file:'5'
}
]

let pay =coding.reduce((acc,item) => acc +item.file,0)
console.log(pay);
