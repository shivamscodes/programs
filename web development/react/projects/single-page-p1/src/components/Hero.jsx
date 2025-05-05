import React from 'react'

const Hero = () => {
  return (
    <main className='hero container'>
        <div className='hero-content'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
       
        <div className='hero-btn'>
       <button id='shop'>Shop Now</button>
       <button id='category'>Category</button>
        </div>

       <div className="available">
       <p>Also Available On</p>
        
        <div className='brand-name'>
            <img src="./images/flipkart.png" alt="img" />
            <img src="./images/amazon.png" alt="img" />
        </div>
       </div>

        </div>
          
        <div className='hero-img'>
            <img src="./images/shoe_image.png" alt="img" />
        </div>
    </main>
  )
}

export default Hero;
