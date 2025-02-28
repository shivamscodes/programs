import React from "react"
import images from '../assets/images.jpeg'
import './usercard.css'

const Usercard = () =>{
    return ( 
        <div className="usercontainer">
            <p id="username">Shivam Sharma</p>
            <img id="userimg" src={images} alt="mm" ></img>
            <p id="userdescription">Description of Me</p>
        </div>
    )
}

export default Usercard