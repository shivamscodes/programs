import './App.css'
import styled from "styled-components";
import Startgame from './components/Startgame';
import { useState } from 'react';
import Gameplay from './components/Gameplay';



function App() {
  
  const [isGamestarted, setisGamestarted] =  useState(false);
       
  const togglegameplay = () => {
      setisGamestarted((prev) => !prev);
  }

  return (
    
      <>
      {isGamestarted ? <Gameplay/> : <Startgame toggle={togglegameplay} />}

       
      </>
  )
}

export default App
