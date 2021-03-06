import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { gql, useQuery, useMutation } from '@apollo/client'
import ContentBox from 'ContentBox'
import Button from 'react-bootstrap/Button'
import { useHistory, Link } from "react-router-dom"
import FerretForm from 'ferrets/FerretForm'
import { Gender } from 'globalTypes'
import { GetFerret } from './graphql/GetFerret'
import { UpdateFerretVariables } from './graphql/UpdateFerret'

export const GET_FERRET = gql`
query GetFerret($id: ID!) {
  ferret(id: $id) {
    id
    ageMonths
    ageYears
    available
    bio
    fee
    foster
    gender
    image
    name
  }
}
`

export const UPDATE_FERRET = gql`
mutation UpdateFerret($id: ID!, $name: String!, $ageYears: Int!, $ageMonths: Int!, $fee: String!, $bio: String, $gender: Gender!, $available: Boolean!, $foster: Boolean!, $imageUpload: Upload) {
  updateFerret(id: $id, input: {name: $name, ageYears: $ageYears, ageMonths: $ageMonths, fee: $fee, bio: $bio, gender: $gender, available: $available, foster: $foster, imageUpload: $imageUpload}) {
    id
    ageMonths
    ageYears
    available
    bio
    fee
    foster
    gender
    image
    name
  }
}
`

function FerretUpdatePage() {
  const { ferretId } = useParams()
  const [name, setName] = useState('')
  const [ageYears, setAgeYears] = useState('')
  const [ageMonths, setAgeMonths] = useState('')
  const [fee, setFee] = useState('')
  const [bio, setBio] = useState('')
  const [gender, setGender] = useState(Gender.MALE)
  const [available, setAvailable] = useState<boolean>()
  const [foster, setFoster] = useState<boolean>()
  const [imageUpload, setImageUpload] = useState<File>()

  useQuery(GET_FERRET, {
    variables: { id: ferretId },
    onCompleted: (data: GetFerret) => {
      setName(data.ferret.name)
      setAgeYears(`${data.ferret.ageYears}`)
      setAgeMonths(`${data.ferret.ageMonths}`)
      setFee(data.ferret.fee)
      setBio(data.ferret.bio || '')
      setGender(data.ferret.gender)
      setAvailable(data.ferret.available)
      setFoster(data.ferret.foster)

      const element = document.getElementById('uploaded-photo') as HTMLImageElement
      if (element && data.ferret.image) element.src = data.ferret.image
    }
  })

  const history = useHistory()

  const variables: UpdateFerretVariables = {
    id: ferretId!,
    name: name,
    ageYears: parseInt(ageYears),
    ageMonths: parseInt(ageMonths),
    fee: fee,
    bio: bio,
    gender: gender,
    available: available || false,
    foster: foster || false,
    imageUpload: imageUpload || null
  }

  const [updateFerret] = useMutation(UPDATE_FERRET, {
    variables: variables,
    onCompleted: () => history.push("/ferrets"),
    onError: error => console.log(error)
  })

  return (
    <div className='FerretUpdatePage'>
      <ContentBox>
        <FerretForm
          name={name}
          ageYears={ageYears}
          ageMonths={ageMonths}
          fee={fee}
          bio={bio}
          gender={gender}
          available={available}
          foster={foster}
          imageUpload={imageUpload}
          setName={setName}
          setAgeYears={setAgeYears}
          setAgeMonths={setAgeMonths}
          setFee={setFee}
          setBio={setBio}
          setGender={setGender}
          setAvailable={setAvailable}
          setFoster={setFoster}
          setImageUpload={setImageUpload}
        />

        <Button
          className="btn-success"
          onClick={() => updateFerret()}
          data-testid='update-ferret-button'
        >
          Update
        </Button>
        <Link to={'/ferrets'} className="btn btn-danger ml-2">Cancel</Link>
      </ContentBox>
    </div>
  )
}

export default FerretUpdatePage
