import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {

    const navigate = useNavigate();
    
    function handelClick() {
        navigate('/dashboard');
    }

  return (
    <div>
      About page
      <button onClick={handelClick}>move to dashboard page</button>

    </div>
  )
}

export default About
