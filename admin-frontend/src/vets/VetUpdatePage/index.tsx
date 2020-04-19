import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { gql, useQuery, useMutation } from '@apollo/client'
import VetForm from 'vets/VetForm'
import ContentBox from 'ContentBox'
import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router-dom"

export const GET_VET = gql`
query GetVet($id: ID!) {
  vet(id: $id) {
    id
    city
    companyName
    notes
    phone
    state
    street
    vetName
    website
    zip
  }
}
`

export const UPDATE_VET = gql`
mutation UpdateVet($id: ID!, $city: String, $companyName: String, $notes: String, $phone: String, $state: String, $street: String, $vetName: String, $website: String, $zip: String) {
  updateVet(id: $id, input: {city: $city, companyName: $companyName, notes: $notes, phone: $phone, state: $state, street: $street, vetName: $vetName, website: $website, zip: $zip}) {
    id
    city
    companyName
    notes
    phone
    state
    street
    vetName
    website
    zip
  }
}
`

function VetUpdatePage() {
  const { vetId } = useParams()
  const [city, setCity] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [notes, setNotes] = useState('')
  const [phone, setPhone] = useState('')
  const [state, setState] = useState('')
  const [street, setStreet] = useState('')
  const [vetName, setVetName] = useState('')
  const [website, setWebsite] = useState('')
  const [zip, setZip] = useState('')

  useQuery(GET_VET, {
    variables: { id: vetId },
    onCompleted: data => {
      setCity(data.vet.city || '')
      setCompanyName(data.vet.companyName || '')
      setNotes(data.vet.notes || '')
      setPhone(data.vet.phone || '')
      setState(data.vet.state || '')
      setStreet(data.vet.street || '')
      setVetName(data.vet.vetName || '')
      setWebsite(data.vet.website || '')
      setZip(data.vet.zip || '')
    }
  })

  const history = useHistory()

  const [updateVet] = useMutation(UPDATE_VET, {
    variables: {
      id: vetId,
      city: city,
      companyName: companyName,
      notes: notes,
      phone: phone,
      state: state,
      street: street,
      vetName: vetName,
      website: website,
      zip: zip
    },
    onCompleted: () => history.push("/vets")
  })

  return (
    <div className='VetUpdatePage'>
      <ContentBox>
        <VetForm
          city={city}
          companyName={companyName}
          notes={notes}
          phone={phone}
          state={state}
          street={street}
          vetName={vetName}
          website={website}
          zip={zip}
          setCity={setCity}
          setCompanyName={setCompanyName}
          setNotes={setNotes}
          setPhone={setPhone}
          setState={setState}
          setStreet={setStreet}
          setVetName={setVetName}
          setWebsite={setWebsite}
          setZip={setZip}
        />

        <Button
          className="btn-success"
          onClick={() => updateVet()}
          data-testid='update-vet-button'
        >
          Update
        </Button>
      </ContentBox>
    </div>
  )
}

export default VetUpdatePage
