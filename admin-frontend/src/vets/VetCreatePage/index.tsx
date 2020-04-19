import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import VetForm from 'vets/VetForm'
import ContentBox from 'ContentBox'
import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router-dom"
import { LIST_VETS } from '../VetsPage'
import { ListVets } from '../VetsPage/graphql/ListVets'

export const CREATE_VET = gql`
mutation CreateVet($city: String, $companyName: String, $notes: String, $phone: String, $state: String, $street: String, $vetName: String, $website: String, $zip: String) {
  createVet(input: {city: $city, companyName: $companyName, notes: $notes, phone: $phone, state: $state, street: $street, vetName: $vetName, website: $website, zip: $zip}) {
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

function VetCreatePage() {
  const [city, setCity] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [notes, setNotes] = useState('')
  const [phone, setPhone] = useState('')
  const [state, setState] = useState('')
  const [street, setStreet] = useState('')
  const [vetName, setVetName] = useState('')
  const [website, setWebsite] = useState('')
  const [zip, setZip] = useState('')

  const history = useHistory()

  const [createVet] = useMutation(CREATE_VET, {
    variables: {
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
    onCompleted: () => history.push("/vets"),
    onError: () => { },
    update(cache, { data: { createVet } }) {
      const data = cache.readQuery<ListVets | null>({ query: LIST_VETS })

      cache.writeQuery({
        query: LIST_VETS,
        data: { vets: data?.vets.concat([createVet]).sort((a, b) => (a.companyName || '').localeCompare(b.companyName || '')) }
      })
    }
  })

  return (
    <div className="VetCreatePage">
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
          onClick={() => createVet()}
          data-testid="create-vet-button"
        >
          Create
        </Button>
      </ContentBox>
    </div>
  )
}

export default VetCreatePage
