import React from 'react'
import Table from 'react-bootstrap/Table'
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer'
import Button from 'react-bootstrap/Button'
import { gql, useQuery } from '@apollo/client'
import { ListFerrets } from './graphql/ListFerrets'
import FerretRow from 'ferrets/FerretRow'

export const LIST_FERRETS = gql`
query ListFerrets {
  ferrets(all: true) {
    id
    name
    gender
    available
    foster
    fee
  }
}
`

function FerretsPage() {
  const { data } = useQuery<ListFerrets>(LIST_FERRETS)

  return (
    <div className="FerretsPage">
      <LinkContainer to="/ferrets/create" className="mb-2">
        <Button className="btn-success">Add ferret</Button>
      </LinkContainer>

      <Table bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Available</th>
            <th>Foster</th>
            <th>Fee</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data &&
            [...data.ferrets]
              .sort((a, b) => a.name.localeCompare(b.name))
              .map(ferret => <FerretRow ferret={ferret} key={ferret.id} />)
          }
        </tbody>
      </Table>
    </div>
  )
}

export default FerretsPage
