import React from 'react'
import "./Footer.css"
// import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <div className='Footer'>
      <div className="col-1">
          <h1>Buildr Community</h1>
          <p> eius voluptate assumenda, repellat sunt? Iste cupiditate id accusantium.</p>
      </div>
      <div className="col-2">
          <h1>Location</h1>
          <p>3rd Floor, Aura Square, Major Rd, F-11 Markaz, Islamabad, <br />Islamabad Capital Territory 44220</p>
      </div>
      <div className="col-3">
          <h1>Newsletter</h1>
          <p>Send newsletter to get cookies</p>
          <input type="text"  placeholder='Message'/>
          <button>Get cookies</button>
      </div>
    </div>
  )
}

export default Footer
