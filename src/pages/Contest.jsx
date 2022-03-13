// CONFIG IMPORTS
import React, {useEffect} from 'react';

// COMPONENT IMPORTS
import Banner from '../components/Banner';

// ASSETS IMPORTS
import contest_banner from '../assets/images/contact_banner.jpeg';

const Contest = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contest">
      <Banner img={contest_banner} title="Slogan contest" />
      <div className="contest-content">
        content
      </div>
    </div>
  );
};

export default Contest;