// CONFIG IMPORTS
import React, {useEffect} from 'react';

// COMPONENTS IMPORTS
import Banner from '../components/Banner';

// ASSETS IMPORTS
import contact_banner from '../assets/images/contact_banner.jpeg';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact">
      <Banner img={contact_banner} title="Contact" />
      <div className="contact-content">
        content
      </div>
    </div>
  );
};

export default Contact;