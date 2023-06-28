import React from 'react'
import "./Services.css"
import banner1 from "./imgs/banner1.jpg"
import banner3 from "./imgs/banner3.jpg"
import banner2 from "./imgs/banner2.jpg"
import banner from "./imgs/banner.jpg"

function Services() {
  return (
    <div className='Services'>
     <h2>Services and Testimonials</h2>
      <div className="card mb-3 bg-dark text-light">
  <img src={banner1} className="card-img-top" alt="..." height={400}/>
  <div className="card-body">
    <h5 className="card-title">Kala Bhag Dam</h5>
    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, corporis, pariatur similique libero nesciunt labore inventore recusandae tempore repudiandae deleniti quo officia. Eveniet, incidunt? Perferendis, ut! Excepturi fuga natus eveniet.</p>
    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
  </div>
</div>
<div className="card bg-dark text-light">
  <div className="card-body">
    <h5 className="card-title">King's Road</h5>
    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus amet saepe officia ad recusandae, eius aliquid laboriosam, repudiandae impedit voluptatem aut ex temporibus ducimus, molestias porro itaque vero quis? Atque.</p>
    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
  </div>
  <img src={banner2} className="card-img-bottom" alt="..." height={600}/>
</div>
<div className="card bg-dark text-light">
  <div className="card-body">
    <h5 className="card-title">King's Road</h5>
    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus amet saepe officia ad recusandae, eius aliquid laboriosam, repudiandae impedit voluptatem aut ex temporibus ducimus, molestias porro itaque vero quis? Atque.</p>
    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
  </div>
  <img src={banner3} className="card-img-bottom" alt="..." height={600}/>
</div>
      <div className="card my-3 bg-dark text-light">
  <img src={banner} className="card-img-top" alt="..." height={400}/>
  <div className="card-body">
    <h5 className="card-title">Kala Bhag Dam</h5>
    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, corporis, pariatur similique libero nesciunt labore inventore recusandae tempore repudiandae deleniti quo officia. Eveniet, incidunt? Perferendis, ut! Excepturi fuga natus eveniet.</p>
    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
  </div>
</div>
                    {/* Testimonials */}




          <section className='Test'>
  <div class="row d-flex justify-content-center">
    <div class="col-md-10 col-xl-8 text-center">
      <h3 class="mb-4 heading">Testimonials</h3>
      <p class="mb-4 pb-2 mb-md-5 pb-md-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
        numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
        quisquam eum porro a pariatur veniam.
      </p>
    </div>
  </div>

  <div class="row text-center">
    <div class="col-md-4 mb-5 mb-md-0">
      <div class="d-flex justify-content-center mb-4">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
          class="rounded-circle shadow-1-strong" width={150} height={150} alt='...'/>
      </div>
      <h5 class="mb-3">Maria Smantha</h5>
      <h6 class="grey mb-3">Web Developer</h6>
      <p class="px-xl-3">
        <i class="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic
        tenetur.
      </p>
      <ul class="list-unstyled d-flex justify-content-center mb-0">
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star-half-alt fa-sm text-warning"></i>
        </li>
      </ul>
    </div>
    <div class="col-md-4 mb-5 mb-md-0">
      <div class="d-flex justify-content-center mb-4">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
          class="rounded-circle shadow-1-strong" width={150} height={150} alt='...'/>
      </div>
      <h5 class="mb-3">Lisa Cudrow</h5>
      <h6 class="grey mb-3">Graphic Designer</h6>
      <p class="px-xl-3">
        <i class="fas fa-quote-left pe-2"></i>Ut enim ad minima veniam, quis nostrum
        exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.
      </p>
      <ul class="list-unstyled d-flex justify-content-center mb-0">
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
      </ul>
    </div>
    <div class="col-md-4 mb-0">
      <div class="d-flex justify-content-center mb-4">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" className="rounded-circleshadow-1-strong" width={150} height={150} alt='...'/>
      </div>
      <h5 class="mb-3">John Smith</h5>
      <h6 class="grey mb-3">Marketing Specialist</h6>
      <p class="px-xl-3">
        <i class="fas fa-quote-left pe-2"></i>At vero eos et accusamus et iusto odio
        dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
      </p>
      <ul class="list-unstyled d-flex justify-content-center mb-0">
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="far fa-star fa-sm text-warning"></i>
        </li>
      </ul>
    </div>
  </div>
</section>
     </div>
  )
}

export default Services
