import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import SitterForm from 'sitters/SitterForm'
import ContentBox from 'ContentBox'
import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router-dom"
import { LIST_SITTERS } from '../SittersPage'
import { ListSitters } from '../SittersPage/graphql/ListSitters'

export const CREATE_SITTER = gql`
mutation CreateSitter($email: String, $name: String!, $notes: String, $phone: String) {
  createSitter(input: {email: $email, name: $name, notes: $notes, phone: $phone}) {
    id
    email
    name
    phone
  }
}
`

function SitterCreatePage() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [notes, setNotes] = useState('')
  const [phone, setPhone] = useState('')

  const history = useHistory()

  const [createSitter] = useMutation(CREATE_SITTER, {
    variables: {
      email: email,
      name: name,
      notes: notes,
      phone: phone
    },
    onCompleted: () => history.push("/sitters"),
    update(cache, { data: { createSitter } }) {
      const data = cache.readQuery<ListSitters | null>({ query: LIST_SITTERS })

      cache.writeQuery({
        query: LIST_SITTERS,
        data: { sitters: data?.sitters.concat([createSitter]).sort((a, b) => a.name.localeCompare(b.name)) },
      })
    }
  })

  return (
    <div className="SitterCreatePage">
      <ContentBox>
        <SitterForm
          email={email}
          setEmail={setEmail}
          name={name}
          setName={setName}
          notes={notes}
          setNotes={setNotes}
          phone={phone}
          setPhone={setPhone}
        />

        <Button
          className="btn-success"
          onClick={() => createSitter()}
        >
          Create
        </Button>
      </ContentBox>
    </div>
  )
}

export default SitterCreatePage
