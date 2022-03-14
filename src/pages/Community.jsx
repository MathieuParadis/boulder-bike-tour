// CONFIG IMPORTS
import React, {useEffect} from 'react';

// COMPONENTS IMPORTS
import Banner from '../components/Banner';

// ASSETS IMPORTS
import community_banner from '../assets/images/community_banner.jpg';


const Community = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="community">
      <Banner img={community_banner} title="Community" />
      <div className="community-content">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h3 className="mb-4">Sport, a vector of integration</h3>
          <p>
            BBT Sport Center is a non-profit organization created by our admiration for the sport of cycling. Bonded by friendship, we are passionately committed to serving our community and promoting the etiquette and safety of cycling to young riders.
            Using cycling as a springboard, we extend the organization’s reach through our active involvement with local charities. All year long we organize events to promote cycling and sport in general, to underprivileged people and communities.
          </p>
          <p>
            Our Partnership with the Clark County School District has our members teaching your youth biking safety and the joy of riding a bike. With Bike Rodeos and Safe Routes to School programs, 
            our Team members are able to share and teach our local youth their passion of riding a bike. With the help of our sponsors, teammates, and donations we are able to provide bikes, helmets, 
            bike locks and various other services to local children who may not otherwise obtain these items.
          </p>
          <q className="h5">Sport has a unique power to bring people together, attract, mobilize, inspire and generate social inclusion.</q>
        </div>
      </div>
    </div>
  );
};

export default Community;