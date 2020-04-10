import React from 'react';
import './index.scss';
import Header from './components/Header'
import FerretRow from './components/FerretRow'
import LinkRow from './components/LinkRow'
import InfoRow from './components/InfoRow'
import OrganizationRow from './components/OrganizationRow'
import YouTube from './components/YouTube'


function HomePage() {
  return (
    <div className="HomePage">
      <Header />

      <FerretRow />

      <LinkRow />

      <InfoRow />

      <OrganizationRow />

      <YouTube videoId="SDsC9CF1jXI" />
    </div>
  );
}

export default HomePage;
