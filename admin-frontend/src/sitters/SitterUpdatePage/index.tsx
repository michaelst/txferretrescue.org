import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client'
import SitterForm from 'sitters/SitterForm'
import ContentBox from 'ContentBox'
import Button from 'react-bootstrap/Button'

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
          onClick={() => { }}
        >
          Update
        </Button>
      </ContentBox>
    </div>
  )
}

export default SitterUpdatePage
