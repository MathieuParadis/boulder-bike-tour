// CONFIG IMPORTS
import React, {useEffect} from 'react';

// COMPONENT IMPORTS
import Banner from '../components/Banner';

// ASSETS IMPORTS
import contest_banner from '../assets/images/contest_banner.jpeg';

const Contest = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contest">
      <Banner img={contest_banner} title="Slogan contest" />
      <p>Come up with the catchiest slogan you can think about and try to win your ticket to participate to the next edition</p>
      We will select the best slogan and use it ...
    </div>
  );
};

export default Contest;