import React from 'react'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer'
import Button from 'react-bootstrap/Button'
import { gql, useQuery } from '@apollo/client'
import { ListSitters } from './graphql/ListSitters'
import './index.scss'

export const LIST_SITTERS = gql`
query ListSitters {
  sitters {
    id
    email
    name
    phone
  }
}
`

function SittersPage() {
  const { data } = useQuery<ListSitters>(LIST_SITTERS)

  return (
    <div className="SittersPage">
      <LinkContainer to="/sitters/create" className="mb-2">
        <Button className="btn-success">Add sitter</Button>
      </LinkContainer>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data?.sitters.map(sitter => (
            <tr key={sitter.id}>
              <td>{sitter.name}</td>
              <td>{sitter.phone}</td>
              <td>{sitter.email}</td>
              <td className="text-right">
                <Link to={`/sitters/${sitter.id}`}>edit</Link> |
                delete
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default SittersPage
