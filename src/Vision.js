import React from 'react'
import "./Vision.css"
import e5 from "./imgs/e5.jpg"

function Vision() {
  return (
    <div className='Vision'>
          <h2>Vision & Mission</h2>
          <div className="vision_content">
          <div className="vision_img">
               <img src={e5} alt="img" width={200}/>
          </div>
          <div className="vision_para">
          Our company strives to be the premium construction company, setting higher unmatched standards by providing exceptional quality, unique value and customer satisfaction which results the optimum levels of honor and dignity from our community and a rewarding environment for our employees to succeed. The company has distinctive vision to further expand its scope of business and we look forward to be the first choice of our customers to make a prominent mark in industry and contributing our part in development of our homeland. We have distinctive values covering every aspect of customer satisfaction and modern era needs i.e   <span className='gold'>Integrity, Loyalty, Honor, Excellence, Co-Prosperity, Trust, Ingenuity, Value Centricity</span>
          </div>
          </div>
    </div>
  )
}

export default Vision
