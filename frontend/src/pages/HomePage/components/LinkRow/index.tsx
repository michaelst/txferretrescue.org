import React from 'react';
import ContentBox from './../../../../ContentBox';
import LinkBox from '../LinkBox';

function LinkRow() {
  return (
    <div className="LinkRow">
      <div className="row">
        <div className="col-sm-4">
          <LinkBox to="/adopt">
            <h3>Apply to Adopt</h3>
          </LinkBox>
        </div>
        <div className="col-sm-4">
          <ContentBox>Donate form</ContentBox>
        </div>
        <div className="col-sm-4">
          <LinkBox to="/contact">
            <h3>Contact Us</h3>
          </LinkBox>
        </div>
      </div>
    </div>
  );
}

export default LinkRow;
