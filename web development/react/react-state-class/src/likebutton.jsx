import { useState } from "react";

export default function Like(){
   
    let [islike,setislike]= useState(false);
   
    // let clicked = ()=> {
    //     console.log("cliked");
    // };

      let toggle = ()=>{
        setislike(!islike);
      };
         
      let likestyle = {color : "red"};

    return (
        <div>
            <p onClick={toggle}>
                {islike ? (<i className="fa-solid fa-heart" style={likestyle}></i>) : ( <i className="fa-regular fa-heart"></i>) }
              </p>

        </div>
    );
}