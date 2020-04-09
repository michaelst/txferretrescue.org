import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { ListVets } from './graphql/ListVets'
import ContentBox from '../../../ContentBox'
import VetBox from './components/VetBox'

export const LIST_VETS = gql`
query ListVets {
  vets {
    id
    city
    companyName
    notes
    phone
    state
    street
    vetName
    website
    zip
  }
}
`

export function VetsPage() {
  const { data } = useQuery<ListVets>(LIST_VETS)

  return (
    <div className="VetsPage">
      <h3 className="text-center mb-4">Emergency Animal Clinic</h3>

      <ContentBox className="col-md-6 offset-md-3">
        <div className="row">
          <span className="col-6 text-left">
            <h4>Emergency Hospital</h4>
          </span>
          <span className="col-6 text-right"><a href="tel:8174102273">(817) 410-2273</a></span>
        </div>
        <span className="text-center">
          2340 W Southlake Blvd<br />
          Southlake, TX 76092<br />
          Monday - Thursday 6pm - 8am<br />
          Friday 6PM - Monday 8AM
        </span>
      </ContentBox>

      <h3 className="text-center mb-4">Ferret Specialists</h3>

      <div className="row">
        {data?.vets.map(vet => (
          <div key={vet.id} className="col-md-6">
            <VetBox  vet={vet} />
          </div>
        ))}
      </div>
    </div>
  )
}
