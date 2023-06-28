import React from 'react'
import "./Accord.css"


function Accord() {
  return (
       <div className="Accord">
          <h1>FAQ's</h1>

    <div className='container bg-dark'>
         <div class="accordion accordion-flush " id="accordionFlushExample">
  <div class="accordion-item bg-dark text-light">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed bg-dark shadow-none text-light" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        About us
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse bg-dark text-light" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt vel expedita nostrum sit impedit ut repellendus laborum libero tempora consectetur, optio itaque molestias soluta aspernatur perferendis assumenda, sunt obcaecati. Ex cumque amet, hic at quasi explicabo, alias dolore possimus inventore distinctio enim libero sequi nam, mollitia dolores voluptas? Nemo non sapiente neque a, excepturi optio beatae, necessitatibus blanditiis maiores quo unde architecto error. Inventore, aliquam odio voluptates sapiente mollitia totam, beatae veniam vero quia nulla assumenda iste tempore, praesentium deleniti. Unde, delectus! Recusandae, ullam vitae ducimus quod corrupti explicabo magni?</div>
    </div>
  </div>
  <div class="accordion-item  bg-dark text-light">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed bg-dark shadow-none text-light" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Services we provide
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse bg-dark text-light" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quisquam officia consectetur voluptas perspiciatis alias optio excepturi sunt, quasi exercitationem. Quasi, nobis!</div>
    </div>
  </div>
  <div class="accordion-item  bg-dark text-light">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed bg-dark shadow-none text-light" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Our Believe
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse bg-dark text-light" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus amet reiciendis eum ullam rem possimus deserunt consequuntur eos, iusto explicabo voluptas, dolor mollitia repudiandae recusandae quis fuga cum nulla quae. Quas.</div>
    </div>
  </div>
</div>
    </div>
     </div>
  )
}

export default Accord
