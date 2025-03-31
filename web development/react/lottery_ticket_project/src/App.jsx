import { useState } from 'react'
import './App.css'
import Lottery from './lottery'
import TicketNum from './ticketNum'
import Ticket from './ticket'
import Lotterycomp from './lottery_comp'
import { sum } from './helper'

function App() {

  let winCondition = (ticket) =>{
     return sum(ticket) === 15;
  }

  return (
    <>
      <Lotterycomp n={3}  winCondition={winCondition}/>
    </>
  );
}

export default App
