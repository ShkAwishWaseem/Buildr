import React from 'react'
import "./Portfolio.css"
import banner from "./imgs/banner.jpg"
import banner2 from "./imgs/banner2.jpg"
import banner3 from "./imgs/banner3.jpg"

function Portfolio() {
  return (
    <div className='Portfolio'>
     <div className="main">
          <h1>OUR PORTFOLIO</h1>
          <div className="portfolio_main">
          <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={banner} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h3>Construction Winder Dam</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={banner2} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h3>Yakmach Road</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={banner3} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h3>Bhasha Dam</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
          </div>
     </div>
    </div>
  )
}

export default Portfolio
