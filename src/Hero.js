import React from 'react'
import "./Hero.css"

function Hero() {
  return (
    <div className='Hero'>
     <div className="Hero_content">
          <span>Email</span> : <span className='bold'>buildr@gmail.com</span>
          <br />
          <span>Phone</span> : <span className='gold break'>+92-21-147124-09</span>
          <button>Contact Us</button>
     </div>
    </div>
  )
}

export default Hero
