import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { gql, useQuery, useMutation } from '@apollo/client'
import SitterForm from 'sitters/SitterForm'
import ContentBox from 'ContentBox'
import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router-dom"

export const GET_SITTER = gql`
query GetSitter($id: ID!) {
  sitter(id: $id) {
    id
    email
    name
    notes
    phone
  }
}
`

export const UPDATE_SITTER = gql`
mutation UpdateSitter($id: ID!, $email: String, $name: String!, $notes: String, $phone: String) {
  updateSitter(id: $id, input: {email: $email, name: $name, notes: $notes, phone: $phone}) {
    id
    email
    name
    phone
  }
}
`

function SitterUpdatePage() {
  const { sitterId } = useParams()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [notes, setNotes] = useState('')
  const [phone, setPhone] = useState('')

  useQuery(GET_SITTER, {
    variables: { id: sitterId },
    onCompleted: data => {
      setEmail(data.sitter.email || '')
      setName(data.sitter.name)
      setNotes(data.sitter.notes || '')
      setPhone(data.sitter.phone || '')
    }
  })

  const history = useHistory()

  const [updateSitter] = useMutation(UPDATE_SITTER, {
    variables: {
      id: sitterId,
      email: email,
      name: name,
      notes: notes,
      phone: phone
    },
    onCompleted: () => history.push("/sitters")
  })

  return (
    <div className='SitterUpdatePage'>
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
          onClick={() => updateSitter()}
        >
          Update
        </Button>
      </ContentBox>
    </div>
  )
}

export default SitterUpdatePage
