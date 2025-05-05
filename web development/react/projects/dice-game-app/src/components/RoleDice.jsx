import React, { useState } from 'react'
import styled from 'styled-components';

const RoleDice = ({currentDice, roledice}) => {





  return (
    <DiceContainer>
    <div className='dice' onClick={roledice}>
    <img src={`/images/dice_${currentDice}.png`} alt="img1" /> 
     </div>
     <p>Click on Dice to roll </p>
    </DiceContainer>
    
  )
}

export default RoleDice;


const DiceContainer = styled.div`
display: flex;    
margin-top: 48px;
    
    justify-content: center;
    align-items: center;

p{
 font-size: 24px;
}

.dice{
cursor: pointer;
}


`;