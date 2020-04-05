import React from 'react';
import './index.scss';
import ContentBox from './../../../../ContentBox'


function InfoRow() {
  return (
    <div className="InfoRow">
      <div className="row">
        <div className="col-sm-4">
          <ContentBox>
            <h3>About Us</h3>

            <p>We are a rescue group that takes in homeless, abandoned, and needy ferrets. We evaluate them,
            get them current on shots, and any medical treatment they may need before finding them a forever home.
                We are not a business, but a volunteer organization.</p>
          </ContentBox>
        </div>
        <div className="col-sm-4">
          <ContentBox>
            <h3>Foster Program</h3>

            <p>Some of the ferrets that are surrendered to us are either too old or have illnesses
                that make them "undesirable" to others. Since we are a <b>NO KILL SHELTER</b>, we place
                these ferrets in a safe, loving, forever foster home to live out the rest of their lives
                as comfortably as we can make it. To learn more about sponsoring or fostering
                these ferrets please click the button below.</p>
          </ContentBox>
        </div>
        <div className="col-sm-4">
          <ContentBox>
            <h3>Surrender</h3>

            <p>If you need to surrender your ferret,
                please call <a href="tel:9722865778">(972) 286-5778</a> to schedule an appointment.
                We ask for a $25 donation/ferret to help cover medical expenses, such as rabies, distemper and
                microchipping.</p>
          </ContentBox>
        </div>
      </div>
    </div>
  );
}

export default InfoRow;