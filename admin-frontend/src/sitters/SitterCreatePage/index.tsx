import React, { useState } from 'react'
import SitterForm from 'sitters/SitterForm'
import ContentBox from 'ContentBox'
import Button from 'react-bootstrap/Button'

function SitterCreatePage() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [notes, setNotes] = useState('')
  const [phone, setPhone] = useState('')

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
          onClick={() => { }}
        >
          Create
        </Button>
      </ContentBox>
    </div>
  )
}

export default SitterCreatePage
