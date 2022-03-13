// CONFIG IMPORTS
import React, {useEffect} from 'react';

const Contest = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contest">
      <h1>Contest page</h1>
    </div>
  );
};

export default Contest;