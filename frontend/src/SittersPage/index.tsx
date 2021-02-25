import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { ListSitters } from './graphql/ListSitters'
import ContentBox from 'ContentBox'
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
            <SitterBox sitter={sitter} />
          </div>
        ))}
      </div>

      <h5 className="text-center">
        For further ferret sitting options, see the Facebook page, Ferret Sitters Connections.
        <a href="https://www.facebook.com/groups/344263992897139">https://www.facebook.com/groups/344263992897139</a>
      </h5>
    </div>
  )
}
