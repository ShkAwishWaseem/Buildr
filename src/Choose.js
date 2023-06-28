import React from 'react'
import "./Choose.css"

function Choose() {
  return (
     <div className='parent'>
     
    <div className='Choose'>
          <h2>Why choose us</h2>
          <div className="one">
               <h3 className='gold'>Why Choose us</h3>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis voluptatem, nostrum nesciunt libero quidem vero hic temporibus, perferendis sit aliquam, quam dicta?</p>
          </div>
          <div className="two">
               <h3 className='gold'>Services we provide</h3>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis voluptatem, nostrum nesciunt libero quidem vero hic temporibus, perferendis sit aliquam, quam dicta?</p>
          </div>
          <div className="three">
               <h3 className='gold'>Our Reviews</h3>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis voluptatem, nostrum nesciunt libero quidem vero hic temporibus, perferendis sit aliquam, quam dicta?</p>
          </div>
          
    </div>
    <main className='container '>
    <h2>Our Image gallery</h2>
<div className="row">
  <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
      />

    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Wintry Mountain Landscape"
      />
  </div>

  <div className="col-lg-4 mb-4 mb-lg-0">
    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Mountains in the Clouds"
      />

    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
      />
  </div>

  <div className="col-lg-4 mb-4 mb-lg-0">
    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Waves at Sea"
    />

    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
      />
  </div>
</div>

     </main>
      </div>
  )
}

export default Choose
