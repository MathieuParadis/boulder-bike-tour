// CONFIG IMPORTS
import React, {useEffect} from 'react';

// COMPONENT IMPORTS
import Banner from '../components/Banner';

// ASSETS IMPORTS
import contest_banner from '../assets/images/contest_banner.jpeg';

const Contest = () => {

  const postProposal = (e) => {
    e.preventDefault()
    let fname = document.querySelector('#first_name').value;
    let lname = document.querySelector('#last_name').value;
    let email = document.querySelector('#email').value;
    let slogan = document.querySelector('#slogan').value;

    const data = {
      first_name: fname,
      last_name: lname,
      email: email,
    slogan: slogan
    };

    alert(data);
    console.log(data);
  }





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
        <div className="contest-form d-flex flex-column justify-content-center mb-4">
          <h3 className="mb-4 text-center">Propose your idea</h3>
          <form onSubmit={postProposal}>
            <div className="mb-3">
              <label htmlFor="first_name" className="form-label">First name</label>
              <input type="text" className="form-control" id="first_name" aria-describedby="first_name input field" placeholder="" required />
            </div>
            <div className="mb-3">
              <label htmlFor="last_name" className="form-label">Last name</label>
              <input type="text" className="form-control" id="last_name" aria-describedby="last_name input field" placeholder="" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" aria-describedby="email input field" placeholder="" required />
            </div>
            <div className="mb-3">
              <label htmlFor="slogan" className="form-label">Slogan</label>
              <small> (50 characters max)</small>
              <textarea type="text" className="form-control" id="slogan" aria-describedby="slogan" rows="5" placeholder="Your slogan here ..." maxLength="50" required />
            </div>
            <div className="mt-4">
              <button type="submit" className="btn btn-primary text-white mb-3" id="register_btn">Submit proposal</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contest;