import React from 'react'
import "./Container.css"
import { easeInOut, motion } from 'framer-motion'

function Container() {
  return (
    <motion.div className='Container'
     initial={{opacity:0}}
     whileInView={{opacity:1}}
     transition={{duration:1 , delay:0.3}}
    >
          <h2>why choose us</h2>
          <div className="Container_content">
               <motion.div className="left_content"
                initial={{opacity:0}}
                whileInView={{opacity:1  }}
               transition={{duration:1.3, delay:0.2}}
               >
               <p>To provide our customers with the highest level of quality construction services</p>
               </motion.div>
               <motion.div className="right_content"
                initial={{x:300 , opacity:0}}
                whileInView={{opacity:1 , x:0 }}
                transition={{ease:easeInOut , duration:1 , delay:0.4}}
               
               >
                  <div className="first">
                    <h2 className='gold'>Dedicated to clients</h2>
                    <p>Buildr is committed to providing professional, comprehensive, and goal-oriented assistance to keep our clients satisfied.</p>
                  </div>
                  <div className="second">
                    <h2 className='gold'>Outstanding services</h2>
                    <p>Buildr skilled and experienced team ensures to give the full state of the art services.</p>
                  </div>
                  <div className="third">
                    <h2 className='gold'>Corporate Governance</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem cupiditate fugit iste laudantium impedit. Illo voluptas.</p>
                  </div>
               </motion.div>
          </div>
    </motion.div>
  )
}

export default Container
