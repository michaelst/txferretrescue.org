import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import ContentBox from 'ContentBox'
import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router-dom"
import { LIST_USERS } from '../UsersPage'
import { ListUsers } from '../UsersPage/graphql/ListUsers'
import TextInput from 'forms/TextInput'

export const CREATE_USER = gql`
mutation CreateUser($email: String!) {
  createUser(input: {email: $email}) {
    id
    email
    canManageApplications
    canManageUsers
    canManageFerrets
    canManageWebsite
  }
}
`

function UserCreatePage() {
  const [email, setEmail] = useState('')

  const history = useHistory()

  const [createUser] = useMutation(CREATE_USER, {
    variables: {
      email: email
    },
    onCompleted: () => history.push("/users"),
    onError: () => {},
    update(cache, { data: { createUser } }) {
      const data = cache.readQuery<ListUsers | null>({ query: LIST_USERS })

      cache.writeQuery({
        query: LIST_USERS,
        data: { users: data?.users.concat([createUser]).sort((a, b) => a.email.localeCompare(b.email)) },
      })
    }
  })

  return (
    <div className="UserCreatePage">
      <ContentBox>
        <TextInput 
          label="Email" 
          value={email} 
          setValue={setEmail} 
          testId="create-user-email-field"
        />

        <Button
          className="btn-success"
          onClick={() => createUser()}
          data-testid="create-user-button"
        >
          Create
        </Button>
      </ContentBox>
    </div>
  )
}

export default UserCreatePage
