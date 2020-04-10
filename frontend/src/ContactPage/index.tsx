import React from 'react';
import './index.scss';
import ContentBox from 'ContentBox'

function ContactPage() {
  return (
    <div className="ContactPage">
      <ContentBox>
        <h4>You may write to us at the following address:</h4>
                Texas Ferret Lover's Rescue<br />
                P.O. Box 800503<br />
                Balch Springs, TX 75180

                <br /><br />

        <h4>You can also email us at:</h4>
        <a href="mailto:milliesanders43@gmail.com">milliesanders43@gmail.com</a>

        <br /><br />

        <h4>Or you can call us between 9AM and 7PM</h4>
        <a href="tel:9722865778">(972) 286-5778</a>

        <br /><br />

        <p>The rescue is not a business and operates out of a private home. We ask that you please respect that.</p>
      </ContentBox>
    </div>
  );
}

export default ContactPage;
