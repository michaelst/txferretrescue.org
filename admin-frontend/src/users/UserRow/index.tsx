import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { gql, useMutation } from '@apollo/client'
import { ListUsers, ListUsers_users } from 'users/UsersPage/graphql/ListUsers'
import { LIST_USERS } from 'users/UsersPage'
import Checkbox from 'forms/Checkbox'

export const UPDATE_USER_CAN_MANAGE_APPLICATIONS = gql`
mutation UpdateUserCanManageApplications($id: ID!, $canManageApplications: Boolean!) {
  updateUser(id: $id, input: { canManageApplications: $canManageApplications }) {
    id
    canManageApplications
  }
}
`

export const UPDATE_USER_CAN_MANAGE_USERS = gql`
mutation UpdateUserCanManageUsers($id: ID!, $canManageUsers: Boolean!) {
  updateUser(id: $id, input: { canManageUsers: $canManageUsers }) {
    id
    canManageUsers
  }
}
`

export const UPDATE_USER_CAN_MANAGE_FERRETS = gql`
mutation UpdateUserCanManageFerrets($id: ID!, $canManageFerrets: Boolean!) {
  updateUser(id: $id, input: { canManageFerrets: $canManageFerrets }) {
    id
    canManageFerrets
  }
}
`

export const UPDATE_USER_CAN_MANAGE_WEBSITE = gql`
mutation UpdateUserCanManageWebsite($id: ID!, $canManageWebsite: Boolean!) {
  updateUser(id: $id, input: { canManageWebsite: $canManageWebsite }) {
    id
    canManageWebsite
  }
}
`

export const DELETE_USER = gql`
mutation DeleteUser($id: ID!) {
  deleteUser(id: $id) {
    id
  }
}
`

export const SEND_PASSWORD_RESET = gql`
mutation SendPasswordReset($id: ID!) {
  sendPasswordReset(id: $id) {
    id
  }
}
`

type UserRowProps = {
  user: ListUsers_users
}

function UserRow({ user }: UserRowProps) {
  const [resetSent, setResetSent] = useState(false)

  const [setCanManageApplications] = useMutation(UPDATE_USER_CAN_MANAGE_APPLICATIONS, {
    variables: {
      id: user.id,
      canManageApplications: !user.canManageApplications,
    }
  })

  const [setCanManageUsers] = useMutation(UPDATE_USER_CAN_MANAGE_USERS, {
    variables: {
      id: user.id,
      canManageUsers: !user.canManageUsers,
    }
  })

  const [setCanManageFerrets] = useMutation(UPDATE_USER_CAN_MANAGE_FERRETS, {
    variables: {
      id: user.id,
      canManageFerrets: !user.canManageFerrets,
    }
  })

  const [setCanManageWebsite] = useMutation(UPDATE_USER_CAN_MANAGE_WEBSITE, {
    variables: {
      id: user.id,
      canManageWebsite: !user.canManageWebsite,
    }
  })

  const [sendPasswordReset] = useMutation(SEND_PASSWORD_RESET)

  const [deleteUser] = useMutation(DELETE_USER, {
    update(cache, { data: { deleteUser } }) {
      const data = cache.readQuery<ListUsers | null>({ query: LIST_USERS })

      cache.writeQuery({
        query: LIST_USERS,
        data: { users: data?.users.filter(user => user.id !== deleteUser.id) }
      })
    }
  })

  return (
    <tr className="UserRow" data-testid="UserRow">
      <td>{user.email}</td>
      <td>
        <Checkbox
          value={user.canManageApplications}
          onChange={() => setCanManageApplications()}
          testId="application-checkbox"
        />
      </td>
      <td>
        <Checkbox
          value={user.canManageUsers}
          onChange={() => setCanManageUsers()}
          testId="users-checkbox"
        />
      </td>
      <td>
        <Checkbox
          value={user.canManageFerrets}
          onChange={() => setCanManageFerrets()}
          testId="ferrets-checkbox"
        />
      </td>
      <td>
        <Checkbox
          value={user.canManageWebsite}
          onChange={() => setCanManageWebsite()}
          testId="website-checkbox"
        />
      </td>
      <td>
        <div className="d-flex align-items-center justify-content-center">
          <Button
            variant="link"
            className="m-0 p-0 mr-1"
            onClick={() => {
              sendPasswordReset({ variables: { id: user.id } })
              setResetSent(true)
            }}
            data-testid={`reset-user-${user.id}`}
            disabled={resetSent}
          >
            {resetSent ? 'reset sent' : 'reset password'}
          </Button> |
          <Button
            variant="link"
            className="m-0 p-0 ml-1"
            onClick={() => deleteUser({ variables: { id: user.id } })}
            data-testid={`delete-user-${user.id}`}
          >
            delete
          </Button>
        </div>
      </td>
    </tr>
  )
}

export default UserRow
