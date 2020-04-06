import React from 'react';
import ContentBox from './../../ContentBox'
import { gql, useQuery } from '@apollo/client';
import { ListFerrets } from './graphql/ListFerrets'

const LIST_FERRETS = gql`
query ListFerrets {
  ferrets(foster: false) {
    id
    name
  }
}
`;

function FerretsPage() {
  const { loading, error, data } = useQuery<ListFerrets>(LIST_FERRETS);

  //if (loading) return 'Loading...';
  //if (error) return `Error! ${error.message}`;

  return (
    <div className="FerretsPage">
      <ContentBox>
        ALL ferrets have their rabies and distemper vaccination, are microchipped,
        and have had a health exam to check for teeth, heart, or tumor problems.
        Ferrets are guaranteed for 30 days against illness and 3 months against
        adrenal tumors.
      </ContentBox>

      {data?.ferrets.map(ferret => (
        <div key={ferret.id.toString()}>{ferret.name}</div>
      ))}
    </div>
  );
}

export default FerretsPage;
