import { useState } from "react";
import { genTicket,sum } from "./helper";
import Ticket from "./ticket";


export default function Lotterycomp ({n,winCondition}){

    let [ticket,setTicket] = useState(genTicket(3));
    let isWinning = winCondition(ticket);

    let buyTicket = () =>{
        setTicket(genTicket(n));
    }


    return (
        <div>
            <h1>LOTTERY GAME</h1>
              <Ticket ticket={ticket}/>
              <br/>
            <button onClick={buyTicket}>Buy New Ticket</button>
         <h3>{isWinning && "congratulation, you won 7 crore"}</h3>
        </div>
    );
}