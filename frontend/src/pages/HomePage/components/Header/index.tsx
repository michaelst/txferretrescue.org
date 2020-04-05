import React from 'react';
import './index.scss';
import Logo from '../../../../logo.jpg'
import ContentBox from './../../../../ContentBox'
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer'
import Button from 'react-bootstrap/Button'

function Header() {
  return (
    <div className="Header">
      <ContentBox>
          <div className="row">
            <div className="col-sm-2">
              <img src={Logo} alt="Texas Ferret Lover's Rescue Logo" />
            </div>
            <div className="col-sm-8 text-center">
              <h2>Texas Ferret Lover's Rescue</h2>

              <p>Our Mission: We're saving lives, as many as we can. Finding forever homes for our thieving friends.</p>

              <LinkContainer to="/adopt">
                <Button className="btn-lg btn-success">Adopt A Ferret!</Button>
              </LinkContainer>
            </div>
            <div className="col-sm-2 d-none d-sm-block">
              <img src={Logo} alt="Texas Ferret Lover's Rescue Logo" />
            </div>
          </div>
      </ContentBox>
    </div>
  );
}

export default Header;
