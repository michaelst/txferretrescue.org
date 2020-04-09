import React from 'react'
import ContentBox from './../../../../ContentBox'
import Organizations from '../Organizations'
import AmazonSmileImage from './images/amazon-smile.png'
import TFLogo from './images/tf-logo.jpg'

function OrganizationRow() {
  return (
    <div className="OrganizationRow">
      <div className="row text-center">
        <div className="col-xs-12 col-lg-6">
          <Organizations />
        </div>
        <div className="col-xs-12 col-lg-6">
          <div className="row">
            <div className="mb-4">
              <a href="http://smile.amazon.com/ch/68-0619842" target={"_blank"} rel="noopener noreferrer">
                <img src={AmazonSmileImage} alt="Support our rescue buy shopping through Amazon Smile" width="100%" />
              </a>
            </div>
            <ContentBox>
              <h5>We are distributors for the following food brand</h5>
              <img src={TFLogo} height="100px" alt="Totally Ferret Food" />
            </ContentBox>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrganizationRow;
