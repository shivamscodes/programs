function fun(){
    console.log('s');
    console.log('h');
    console.log('i');
    console.log('v');
    console.log('a');

}

//fun();

function add(a,b){   //parameter
 
    console.log(a+b);
}



function add1(x,y){   //parameter
 
 let res=x+y;
 return res;
console.log ("yha print nahi hoga")
}


let ans=add(3,'a');    //argument

const result= add1(1,1)
 console.log("result" ,result);


 function  test(name){
    if(name===undefined){
        console.log("enter valid name")
        return
    }
    return `${name} loged in`;

 }


 console.log(test('shivam'));
 console.log(test());




 //level 2

//  function calculatecartprice(...num){   //rest 
//       return num;
//  }

//  console.log(calculatecartprice(200,300,400));


 //if this case arrsie then op will be
 function calculatecartprice(val1,val2,...num){   //rest 
    return num;
}

console.log(calculatecartprice(200,300,250,400));


const user={
    id:"1234",
    price: 149
}

function handleobj(anyobj){
         console.log(`${anyobj.id} p= ${anyobj.price}`)
}

 
//handleobj(user);

 handleobj({
    id:"99",
    price: 549
})


