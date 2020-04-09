import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { ListSitters } from './graphql/ListSitters'
import ContentBox from '../../../ContentBox'
import SitterBox from './components/SitterBox'

export const LIST_SITTERS = gql`
query ListSitters {
  sitters {
    id
    email
    name
    notes
    phone
  }
}
`

export function SittersPage() {
  const { data } = useQuery<ListSitters>(LIST_SITTERS)

  return (
    <div className="SittersPage">
      <h3 className="text-center mb-4">Ferret Sitters</h3>

      <ContentBox>
        We do not guarantee any of these sitters, you are fully responsible for ensuring the sitter fits your needs. 
        By using this website to find a sitter you agree to not hold us responsible for the actions of these sitters.
      </ContentBox>

      <div className="row">
        {data?.sitters.map(sitter => (
          <div key={sitter.id} className="col-md-6">
            <SitterBox  sitter={sitter} />
          </div>
        ))}
      </div>

      <h5 className="text-center">
        If you are a ferret sitter and would like to be listed here,
        please call Millie at <a href="tel:9722865778">(972) 286-5778</a> for an interview.
      </h5>
    </div>
  )
}
