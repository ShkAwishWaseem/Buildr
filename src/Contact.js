import React from 'react'
import "./Contact.css"


function Contact() {
  return (
    <div className='Contact'>

<section className="mb-4 container">

    <h2 className="h1-responsive font-weight-bold text-center my-4 gold">Contact us</h2>
    
    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div className="row">

        
        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="" method="POST">

                
                <div className="row">

                    
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <label for="name" className="my-2">Your name</label>
                            <input type="text" id="name" name="name" className="form-control none"/>
                        </div>
                    </div>



                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <label for="email" className="my-2">Your email</label>
                            <input type="text" id="email" name="email" className="form-control none"/>
                        </div>
                    </div>
                    

                </div>



                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-0">
                            <label for="subject" className="my-2">Subject</label>
                            <input type="text" id="subject" name="subject" className="form-control none"/>
                        </div>
                    </div>
                </div>
                

                
                <div className="row">

                    
                    <div className="col-md-12">

                        <div className="md-form">
                            <label for="message" className='my-2'>Your message</label>
                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea none" ></textarea>
                        </div>

                    </div>
                </div>
                

            </form>

            <div className="text-center text-md-left">
                <a className="btn btn-primary btn-color btn-top" href='/'>Send</a>
            </div>
            <div className="status"></div>
        </div>
        

        
        <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                    <p>3rd Floor, Aura Square, Major Rd, F-11 Markaz, Islamabad,</p>
                </li>

                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                    <p>+92-21-147124-09</p>
                </li>

                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                    <p>buildr@gmail.com</p>
                </li>
            </ul>
        </div>

    </div>

</section>
    </div> 
  )
}

export default Contact
