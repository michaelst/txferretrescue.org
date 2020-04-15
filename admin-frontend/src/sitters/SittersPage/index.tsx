import React from 'react'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer'
import Button from 'react-bootstrap/Button'
import { gql, useQuery, useMutation } from '@apollo/client'
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

export const DELETE_SITTER = gql`
mutation DeleteSitter($id: ID!) {
  deleteSitter(id: $id) {
    id
  }
}
`

function SittersPage() {
  const { data } = useQuery<ListSitters>(LIST_SITTERS)

  const [deleteSitter] = useMutation(DELETE_SITTER, {
    update(cache, { data: { deleteSitter } }) {
      const data = cache.readQuery<ListSitters | null>({ query: LIST_SITTERS })

      cache.writeQuery({
        query: LIST_SITTERS,
        data: { sitters: data?.sitters.filter(sitter => sitter.id !== deleteSitter.id) }
      })
    }
  })

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
              <td>
                <div className="d-flex align-items-center justify-content-center">
                  <Link to={`/sitters/${sitter.id}`} className="pr-1">edit</Link> |
                  <Button
                    variant="link"
                    className="m-0 p-0 pl-1"
                    onClick={() => deleteSitter({ variables: { id: sitter.id } })}
                    data-testid={`delete-sitter-${sitter.id}`}
                  >
                    delete
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default SittersPage
