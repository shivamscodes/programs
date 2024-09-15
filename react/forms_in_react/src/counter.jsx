import { useState, useEffect} from "react";

export default function Counter(){
    let [countx,setCountx] = useState(0);
    let [county,setCounty] = useState(0);
     
    let incx = ()=> {
     setCountx((currcount)=>{
        return currcount+1;
     });
    };

    let incy = ()=> {
        setCounty((currcount)=>{
           return currcount+1;
        });
       };

    useEffect(function something () {
        console.log("this is effect");
    },[countx]);


    return (
      <div>
        <p>count = {countx}</p>
        <button onClick={incx}>increase count</button>
 
        <p>count = {county}</p>
        <button onClick={incy}>increase count</button>

      </div>
    );
}