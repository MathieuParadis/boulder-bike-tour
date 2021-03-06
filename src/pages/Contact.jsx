// CONFIG IMPORTS
import React, {useEffect} from 'react';

// COMPONENTS IMPORTS
import Banner from '../components/Banner';

// ASSETS IMPORTS
import contact_banner from '../assets/images/contact_banner.jpg';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact">
      <Banner img={contact_banner} title="Contact" />
      <div className="contact-content">
        <div className="d-flex flex-column flex-lg-row mb-4 me-lg-5">
          <div className="contact-form col-12 col-lg-6">
            <h3 className="mb-4">Let's Talk</h3>
            <form>
              <div className="mb-3">
                <label for="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="email input field" placeholder="Your email address" required />
              </div>
              <div className="mb-3">
                <label for="message" className="form-label">Message</label>
                <textarea type="text" className="form-control" id="message" aria-describedby="message" rows="5" placeholder="Your message here ..." required />
              </div>
              <div className="mt-4">
                <button type="submit" className="btn btn-primary text-white mb-3" id="register_btn">Send message</button>
              </div>
            </form>
          </div>
          <div className="contact-info col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center justify-content-between align-items-lg-start ms-lg-5 mt-4 mt-lg-0 mb-lg-4 pb-lg-5">
            <h3 className="mb-4 mb-lg-0">Contact Info</h3>
            <div>
              <div className="mb-4">
                <h5>Address</h5>
                <p>617 Cooper Avenue, Aspen, CO 8161, USA</p>
              </div>
              <div className="mb-4">
                <h5>Email Us</h5>
                <p>boulderbiketour@gmail.com</p>
              </div>
              <div className="mb-4">
                <h5>Call Us</h5>
                <p>+1 (877) 611-2812</p>
              </div>
            </div>
          </div>
        </div>
        <div className="map-section d-flex flex-column justify-content-center align-items-center mb-4">
          <h3 className="mb-4">Find Us</h3>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3092.4420347231035!2d-106.8195536851862!3d39.187403537403455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87403bd87eff9ad7%3A0xfba1049ce78489fb!2sAspen%20Square%20Condominium%20Hotel!5e0!3m2!1sfr!2shk!4v1647275170952!5m2!1sfr!2shk" 
                  className="map"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;