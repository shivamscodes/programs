import { useState } from "react";

export default function Counter(){
 
    // let count=0;

    let [count,setCount] = useState(0);
     

    let inc = ()=> {
     setCount((currcount)=>{
        return currcount+1;
     });

     setCount((currcount)=>{
      return currcount+1;
   });

   setCount((currcount)=>{
    return currcount+1;
 });
 
    };

    //let [stateVariable, setStateVariable] = useState(0);

    return (
      <div>
        <p>count : {count}</p>
        <button onClick={inc}>increase count</button>
      </div>
    );
}