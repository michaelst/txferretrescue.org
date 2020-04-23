import React from 'react'
import Table from 'react-bootstrap/Table'
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer'
import Button from 'react-bootstrap/Button'
import { gql, useQuery } from '@apollo/client'
import { ListVets } from './graphql/ListVets'
import VetRow from 'vets/VetRow'

export const LIST_VETS = gql`
query ListVets {
  vets {
    id
    companyName
    vetName
  }
}
`

function VetsPage() {
  const { data } = useQuery<ListVets>(LIST_VETS)

  return (
    <div className="VetsPage">
      <LinkContainer to="/vets/create" className="mb-2">
        <Button className="btn-success">Add vet</Button>
      </LinkContainer>

      <Table bordered hover>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Vet Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data?.vets.map(vet => <VetRow vet={vet} key={vet.id} />)}
        </tbody>
      </Table>
    </div>
  )
}

export default VetsPage
