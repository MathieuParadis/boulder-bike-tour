// CONFIG IMPORTS
import React, {useEffect} from 'react';

// COMPONENTS IMPORTS
import Banner from '../components/Banner';

// ASSETS IMPORTS
import community_banner from '../assets/images/community_banner2.jpg';

const Community = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="community">
      <Banner img={community_banner} title="Community" />

    </div>
  );
};

export default Community;