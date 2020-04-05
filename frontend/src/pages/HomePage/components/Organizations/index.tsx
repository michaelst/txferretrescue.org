import React from 'react';
import './index.scss';
import ContentBox from './../../../../ContentBox'
import AFALogo from './images/afa-logo.jpg'
import BissellLogo from './images/bissell-logo.jpg'
import LostPetLogo from './images/lost-pet-logo.jpg'
import SOSLogo from './images/sos-logo.gif'
import TASCLogo from './images/tasc-logo.jpg'

function Organizations() {
  return (
    <div className="Organizations">
      <ContentBox>
        <h4 className="mb-4">We are proud members of the following organizations</h4>
        <div className="mb-4">
          <img src={TASCLogo} height="140px" alt="Texas Animal Shelter Coalition Logo" />
          <a href="http://www.supportourshelters.org/" target={"_blank"} rel="noopener noreferrer">
            <img src={SOSLogo} height="140px" alt="Support Our Shelters Logo" />
          </a>
          <a href="https://www.ferret.org/" target={"_blank"} rel="noopener noreferrer">
            <img src={AFALogo} height="140px" alt="American Ferret Assocation Logo" />
          </a>
        </div>
        <div>
          <a href="https://bissell.com/partnersforpets" target={"_blank"} rel="noopener noreferrer">
            <img src={BissellLogo} height="140px" alt="Bissell Partners for Pets" />
          </a>
          <img src={LostPetLogo} height="140px" alt="Lost Pets USA" />
        </div>
      </ContentBox>
    </div>
  );
}

export default Organizations;
