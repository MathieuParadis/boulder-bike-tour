// CONFIG IMPORTS
import React, {useEffect} from 'react';

const Volunteer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="volunteer">
      Volunteering
    </div>
  );
};

export default Volunteer;