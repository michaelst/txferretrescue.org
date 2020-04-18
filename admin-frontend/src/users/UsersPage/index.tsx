import React from 'react'
import Table from 'react-bootstrap/Table'
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer'
import Button from 'react-bootstrap/Button'
import { gql, useQuery } from '@apollo/client'
import { ListUsers } from './graphql/ListUsers'
import UserRow from 'users/UserRow'
import './index.scss'

export const LIST_USERS = gql`
query ListUsers {
  users {
    id
    email
    canManageApplications
    canManageUsers
    canManageFerrets
    canManageWebsite
  }
}
`

function UsersPage() {
  const { data } = useQuery<ListUsers>(LIST_USERS)

  return (
    <div className="UsersPage">
      <LinkContainer to="/users/create" className="mb-2">
        <Button className="btn-success">Add user</Button>
      </LinkContainer>

      <Table bordered>
        <thead>
          <tr>
            <th>Email</th>
            <th>Manage Applications</th>
            <th>Manage Users</th>
            <th>Manage Ferrets</th>
            <th>Manage Website</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data?.users.map(user => <UserRow user={user} key={user.id} />)}
        </tbody>
      </Table>
    </div>
  )
}

export default UsersPage
