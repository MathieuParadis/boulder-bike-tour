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

      <div className="contest-content">
        <div className="d-flex flex-column justify-content-center mb-4">
          <h3 className="mb-4 text-center">Rules</h3>
          <p>
            Come up with the catchiest slogan you can think of for the Boulder Bike Tour. There is only one constraint, the slogan must be 50 characters maximum.
            Our team will review all the proposals and select the best one. The shortlisted slogan will be used as our official tagline.
            and the winner will be awarded the right to enroll in the coming edition, free of charge.
          </p>
        </div>
        <div className="contest-form">

        </div>
      </div>
    </div>
  );
};

export default Contest;