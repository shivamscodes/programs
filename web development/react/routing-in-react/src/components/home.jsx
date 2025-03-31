import React from 'react'
import { useNavigate } from 'react-router-dom'



const Home = () => {
    const navigate = useNavigate();
    function handelClick() {
        navigate('/about');
    }


  return (
    <div>
      home page
      <button onClick={handelClick}>move to about page</button>
    </div>
  )
}

export default Home
