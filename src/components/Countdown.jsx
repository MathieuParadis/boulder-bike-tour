import React from 'react';

const Countdown = () => {
  return (
    <div className="countdown d-flex flex-wrap justify-content-center justify-content-md-end align-items-center">
      <div className="d-flex flex-wrap justify-content-between align-items-center">
        <div className="time-square d-flex flex-column justify-content-center align-items-center m-2">
          <p className="mb-0">20</p>
          <p className="mb-0">Days</p>
        </div>
        <div className="time-square d-flex flex-column justify-content-center align-items-center m-2">
          <p className="mb-0">20</p>
          <p className="mb-0">Hours</p>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-between align-items-center">
        <div className="time-square d-flex flex-column justify-content-center align-items-center m-2">
          <p className="mb-0">20</p>
          <p className="mb-0">Minutes</p>
        </div>
        <div className="time-square d-flex flex-column justify-content-center align-items-center m-2">
          <p className="mb-0">20</p>
          <p className="mb-0">Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;