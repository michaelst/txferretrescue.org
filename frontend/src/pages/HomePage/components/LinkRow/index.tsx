import React from 'react'
import LinkBox from '../LinkBox'
import { DonateForm } from '../DonateForm'

function LinkRow() {
  return (
    <div className="LinkRow">
      <div className="row d-flex align-items-center">
        <div className="col-lg-4 d-none d-sm-block">
          <LinkBox to="/adopt">
            <h3>Apply to Adopt</h3>
          </LinkBox>
        </div>
        <div className="col-lg-4">
          <DonateForm />
        </div>
        <div className="col-lg-4"> 
          <LinkBox to="/contact">
            <h3>Contact Us</h3>
          </LinkBox>
        </div>
      </div>
    </div>
  )
}

export default LinkRow
