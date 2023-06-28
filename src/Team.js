import React from 'react'
import "./Team.css"
import team from "./imgs/team.jpg"
import team2 from "./imgs/team2.jpg"
import team3 from "./imgs/team3.jpg"
import {motion} from "framer-motion"


function Team() {
  return (
    <div className='Team'>
     <h1>Our Team Members</h1>
      <div className="card-group">
  <motion.div className="card bg-dark text-white shadow-none "
     initial={{opacity:0}}
     whileInView={{opacity:1}}
     transition={{delay:0.1}}
  >
    <img src={team} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title gold">Azam Khan lead</h5>
      <p className="card-text">Lorem ipsum  fugiat delectus odit pariatur sed porro minus non maiores tenetur natus quae!</p>
      <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </motion.div>
  <motion.div className="card bg-dark text-white mx-3"
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{delay:0.2}}
  
  >
    <img src={team2} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title gold">John Doe Lead</h5>
      <p className="card-text">Lorem ipsum, dolor sit amet consr nostrum quis, eius id nobis magni velit, atque est laboriosam molestias!</p>
      <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </motion.div>
  <motion.div className="card bg-dark text-white"
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{delay:0.2}}
  
  >
    <img src={team3} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title gold">Junaid Khan Lead</h5>
      <p className="card-text">Lorem  dolores natus veniam similique vel aperiam eius! Dolore beatae fuga iste aperiam.! Tempora, dicta explicabo?</p>
      <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </motion.div>
</div>
    </div>
  )
}

export default Team
