import React, { useState } from 'react'
import Totalscore from './Totalscore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import { Button, OutlineButton } from '../styled/Button'
import Rules from './Rules'

const Gameplay = () => {
  const [score, setscore] = useState(0);
  const [selectedNumber, setselectedNumber] = useState();
  const [currentDice, setcurrentDice] = useState(1);
  const [error, seterror] = useState("");
  const [showrules , setshowrules] =useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

const roledice = () =>{
  if(!selectedNumber) {
  
    seterror("you have not selected any number");
    return;
  }

  
    const randomnumber = generateRandomNumber(1,7);

    setcurrentDice((prev) => randomnumber);

    if(selectedNumber === randomnumber){
      setscore((prev) => randomnumber);
    }else{
      setscore((prev) => prev-2);
    }


    setselectedNumber(undefined);

    
};

const resetScore = () =>{
  setscore(0);
}

  return (
   <MainContainer>
    <div className="top_section">
    <Totalscore score={score} />
    <NumberSelector seterror={seterror}  error={error} selectedNumber={selectedNumber}  setselectedNumber={ setselectedNumber} />
    </div>

    <RoleDice currentDice={currentDice} roledice={roledice}/>
   <div className="btns">
    <OutlineButton onClick={resetScore}>Reset</OutlineButton>
    <Button onClick={() => setshowrules((prev) => !prev)}>{showrules ? "hide" : "show"}</Button>
   </div>

   { showrules &&  <Rules/>}
      </MainContainer>

  )
}

export default Gameplay;


const MainContainer = styled.div`
padding-top: 70px;
 .top_section{
 display: flex;
 justify-content: space-around;
 align-items: end;
 }


 .btns{
 gap: 10px;
 margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
   gap: 10px;
}
`;


