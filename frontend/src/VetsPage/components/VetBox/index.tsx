import React from 'react'
import { ListVets_vets } from '../../graphql/ListVets'
import ContentBox from 'ContentBox'

type VetBoxProps = {
  vet: ListVets_vets
}

function CompanyName(vet: ListVets_vets) {
  if (vet.website) {
    return <h5><a href={vet.website} target="_blank">{vet.companyName}</a></h5>
  }

  return <h5>{vet.companyName}</h5>
}

function VetBox({ vet }: VetBoxProps) {
  return (
    <div className="VetBox" data-testid="VetBox">
      <ContentBox>
        <div className="row">
          <div className="col-8">
            {CompanyName(vet)}
          </div>
          <div className="col-4 text-right">
            {vet.phone && (
              <span><a href={`tel:${vet.phone}`}>{vet.phone}</a></span>
            )}
          </div>
        </div>
        <h6>{vet.vetName}</h6>
        {vet.street}<br />
        {vet.city}, {vet.state} {vet.zip}
      </ContentBox>
    </div>
  )
}

export default VetBox
