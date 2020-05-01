import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import FerretForm from 'ferrets/FerretForm'
import ContentBox from 'ContentBox'
import Button from 'react-bootstrap/Button'
import { useHistory, Link } from "react-router-dom"
import { LIST_FERRETS } from '../FerretsPage'
import { ListFerrets } from '../FerretsPage/graphql/ListFerrets'
import { Gender}  from 'globalTypes'

export const CREATE_FERRET = gql`
mutation CreateFerret($name: String!, $ageYears: Int!, $ageMonths: Int!, $fee: String!, $bio: String, $gender: Gender!, $available: Boolean!, $foster: Boolean!, $imageUpload: Upload) {
  createFerret(input: {name: $name, ageYears: $ageYears, ageMonths: $ageMonths, fee: $fee, bio: $bio, gender: $gender, available: $available, foster: $foster, imageUpload: $imageUpload}) {
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

function FerretCreatePage() {
  const [name, setName] = useState('')
  const [ageYears, setAgeYears] = useState('')
  const [ageMonths, setAgeMonths] = useState('')
  const [fee, setFee] = useState('')
  const [bio, setBio] = useState('')
  const [gender, setGender] = useState(Gender.MALE)
  const [available, setAvailable] = useState<boolean>()
  const [foster, setFoster] = useState<boolean>()
  const [imageUpload, setImageUpload] = useState<File>()

  const history = useHistory()

  const [createFerret] = useMutation(CREATE_FERRET, {
    variables: {
      name: name,
      ageYears: parseInt(ageYears),
      ageMonths: parseInt(ageMonths),
      fee: fee,
      bio: bio,
      gender: gender,
      available: available,
      foster: foster,
      imageUpload: imageUpload
    },
    onCompleted: () => history.push('/ferrets'),
    onError: () => { },
    update(cache, { data: { createFerret } }) {
      const data = cache.readQuery<ListFerrets | null>({ query: LIST_FERRETS })

      cache.writeQuery({
        query: LIST_FERRETS,
        data: { ferrets: data?.ferrets.concat([createFerret]) }
      })
    }
  })

  return (
    <div className="FerretCreatePage">
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
          onClick={() => createFerret()}
          data-testid="create-ferret-button"
        >
          Create
        </Button>
        <Link to={'/ferrets'} className="btn btn-danger ml-2">Cancel</Link>
      </ContentBox>
    </div>
  )
}

export default FerretCreatePage
