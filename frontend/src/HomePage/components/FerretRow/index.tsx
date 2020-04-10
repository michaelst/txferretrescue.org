import React from 'react';
import './index.scss';
import FerretOne from './images/ferret-1.jpg';
import FerretTwo from './images/ferret-2.jpg';
import FerretThree from './images/ferret-3.jpg';
import FerretFour from './images/ferret-4.jpg';
import FerretFive from './images/ferret-5.jpg';
import FerretSix from './images/ferret-6.jpg';

function FerretRow() {
  return (
    <div className="FerretRow d-none d-sm-block">
      <div className="row">
        <div className="col-sm-2 mb-4">
          <img src={FerretOne} alt="Ferret" />
        </div>
        <div className="col-sm-2 mb-4">
          <img src={FerretTwo} alt="Ferret" />
        </div>
        <div className="col-sm-2 mb-4">
          <img src={FerretThree} alt="Ferret" />
        </div>
        <div className="col-sm-2 mb-4">
          <img src={FerretFour} alt="Ferret" />
        </div>
        <div className="col-sm-2">
          <img src={FerretFive} alt="Ferret" />
        </div>
        <div className="col-sm-2">
          <img src={FerretSix} alt="Ferret" />
        </div>
      </div>
    </div>
  );
}

export default FerretRow;
