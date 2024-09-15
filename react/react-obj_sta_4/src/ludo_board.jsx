 import { useState } from "react";
 
 function Ludoboard(){

    // let [blue,setBlue] = useState(0);
    // let [blue,setBlue] = useState(0); 
    //we can right is in this way but if we have many players so the better way is to make their object
     
    let [moves,setmoves]= useState({blue : 0, red : 0, yellow : 0, green:0});
    
     

    let updateBlue = ()=>{
      //  moves.blue += 1;
        console.log(moves.blue);
        //setmoves({...moves});  //spread operator is used to send the copy of the arry to make changes in array
        setmoves((prevmoves) => {
            return {...prevmoves, blue : prevmoves.blue+1};
        });
    };

    let updatered = ()=>{
          console.log(moves.red);
          setmoves((prevmoves) => {
              return {...prevmoves, red : prevmoves.red+1};
          });
      };

      let updategreen = ()=>{
          console.log(moves.green);
          setmoves((prevmoves) => {
              return {...prevmoves, green : prevmoves.green+1};
          });
      };

      let updateyellow = ()=>{
          console.log(moves.yellow);
          setmoves((prevmoves) => {
              return {...prevmoves, yellow : prevmoves.yellow+1};
          });
      };

    return (
        <div>
            <p>GAME BEGINS !</p>
            <div className="board">
            <p>Blue moves = {moves.blue} </p>
            <button style ={{backgroundColor : "blue"}} onClick= {updateBlue}>+1</button>
            <p>green moves = {moves.green}</p>
            <button style ={{backgroundColor : "green"}}  onClick= {updategreen}>+1</button>
            <p>red moves = {moves.red} </p>
            <button style ={{backgroundColor : "red"}}  onClick= {updatered}>+1</button>
            <p>yellow moves = {moves.yellow}</p>
            <button style ={{backgroundColor : "yellow"}}  onClick= {updateyellow}>+1</button>
            </div>
        </div>
    );
 }




 export default Ludoboard;