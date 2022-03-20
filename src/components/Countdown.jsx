// CONFIG IMPORTS
import React, {useState} from 'react';

const Countdown = () => {
  const [years, setYears] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  return (
    <div className="countdown-section d-flex flex-column justify-content-md-end align-items-md-end col-12 col-md-6">
      <p className=" date text-white">April 01, 2022</p>
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
    </div>
  );
};

export default Countdown;