// CONFIG IMPORTS
import React, {useState, useEffect} from 'react';

import moment from 'moment'

const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const eventDate = "01/04/2023 09:00:00";

  const updateCountdown = () => {
    let secBeforeEvent = moment(eventDate, "DD/MM/YYYY HH:mm:ss").diff(moment().format())/1000;
    let secCountdown = (secBeforeEvent) % 60;
    let minCountdown = (Math.floor(secBeforeEvent / 60)) % 60;
    let hoursCountdown = (Math.floor(secBeforeEvent / 3600)) % 24;
    let daysCountdown = (Math.floor(secBeforeEvent / 86400));

    setSeconds(secCountdown);
    setMinutes(minCountdown);
    setHours(hoursCountdown);
    setDays(daysCountdown);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      updateCountdown();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-section d-flex flex-column justify-content-md-end align-items-md-end col-12 col-md-6">
      <p className=" date d-block d-md-none text-white text-center"><strong>2023, April 01</strong><br></br>9.00 am</p>
      <p className=" date text-white d-none d-md-block text-md-end"><strong>2023, April 01</strong><br></br>9.00 am</p>

      <div className="countdown d-flex flex-wrap justify-content-center justify-content-md-end align-items-center">
        <div className="d-flex flex-wrap justify-content-between align-items-center">
          <div className="time-square d-flex flex-column justify-content-center align-items-center m-2">
            <p className="countdown-text mb-0">{days}</p>
            <p className="countdown-text mb-0">Days</p>
          </div>
          <div className="time-square d-flex flex-column justify-content-center align-items-center m-2">
            <p className="countdown-text mb-0">{hours}</p>
            <p className="countdown-text mb-0">Hours</p>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-between align-items-center">
          <div className="time-square d-flex flex-column justify-content-center align-items-center m-2">
            <p className="countdown-text mb-0">{minutes}</p>
            <p className="countdown-text mb-0">Minutes</p>
          </div>
          <div className="time-square d-flex flex-column justify-content-center align-items-center m-2">
            <p className="countdown-text mb-0">{seconds}</p>
            <p className="countdown-text mb-0">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;