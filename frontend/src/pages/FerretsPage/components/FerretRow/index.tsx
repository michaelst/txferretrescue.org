import React from 'react'
import ContentBox from '../../../../ContentBox'
import { ListFerrets_ferrets } from '../../graphql/ListFerrets'
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer'
import Button from 'react-bootstrap/Button'

type FerretRowProps = {
  ferret: ListFerrets_ferrets
}

function FerretRow({ ferret }: FerretRowProps) {
  return (
    <div className="FerretRow mb-4" data-testid="FerretRow">
      <ContentBox>
        <div className="row">
          <div className="col-sm-4 col-md-3 col-lg-2 text-center">
            {ferret.imageUrl &&
              <img src={ferret.imageUrl} className="w-100 mb-2" alt={"Ferret - " + ferret.name} />
            }
            <LinkContainer to="/apply">
              <Button className="btn-success">Apply to Adopt</Button>
            </LinkContainer>
          </div>
          <div className="col-sm-8 col-md-9 col-lg-10">
            <h4>{ferret.name}</h4>
            <p>
              <b>Age: </b>
              {ferret.ageYears} {ferret.ageYears === 1 ? 'year ' : 'years '}
              {ferret.ageMonths} {ferret.ageMonths === 1 ? 'month' : 'months'}
              <br />
              <b>Gender:</b> {ferret.gender}
              <br />
              <b>Adoption Fee:</b> ${ferret.fee}
            </p>

            <p className="ferret-bio">{ferret.bio}</p>
          </div>
        </div>
      </ContentBox>
    </div>
  )
}

export default FerretRow
