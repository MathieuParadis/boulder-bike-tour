// CONFIG IMPORTS
import React, {useEffect} from 'react';

const Area = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="area">
      area
    </div>
  );
};

export default Area;