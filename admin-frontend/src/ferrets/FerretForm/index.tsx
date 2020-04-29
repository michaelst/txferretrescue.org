import React from 'react'
import TextInput from 'forms/TextInput'
import TextField from 'forms/TextField'
import QuestionField from 'forms/QuestionField'
import GenderField from 'forms/GenderField'
import { Gender } from 'globalTypes'
import Form from 'react-bootstrap/Form'
import './index.scss'

type FerretFormProps = {
  name: string,
  ageYears: string,
  ageMonths: string,
  fee: string,
  bio: string,
  gender: Gender,
  available: boolean | undefined,
  foster: boolean | undefined,
  image: File | undefined,
  setName: React.Dispatch<React.SetStateAction<string>>,
  setAgeYears: React.Dispatch<React.SetStateAction<string>>,
  setAgeMonths: React.Dispatch<React.SetStateAction<string>>,
  setFee: React.Dispatch<React.SetStateAction<string>>,
  setBio: React.Dispatch<React.SetStateAction<string>>,
  setGender: React.Dispatch<React.SetStateAction<Gender>>,
  setAvailable: React.Dispatch<React.SetStateAction<boolean | undefined>>,
  setFoster: React.Dispatch<React.SetStateAction<boolean | undefined>>,
  setImage: React.Dispatch<React.SetStateAction<File | undefined>>
}

const processFile = (selectedFile: File, setImage: React.Dispatch<React.SetStateAction<File | undefined>>) => {
  const reader = new FileReader()
  reader.readAsDataURL(selectedFile)
  const img = new Image()
  reader.onload = event => {
    if (typeof event.target?.result === "string") {
      const img = new Image()
      img.src = event.target.result
      img.onload = () => {
        const elem = document.createElement('canvas')
        elem.width = 400
        elem.height = 400
        const ctx = elem.getContext('2d')

        if (ctx) {
          ctx.drawImage(img, 0, 0, 400, 400)
          ctx.canvas.toBlob((blob) => {
            if (blob) {
              const file = new File([blob], selectedFile.name, {
                type: 'image/jpeg'
              })

              const element = document.getElementById('uploaded-photo') as HTMLImageElement
              if (element) element.src = URL.createObjectURL(blob)

              setImage(file)
            }
          }, 'image/jpeg', 1)
        }
      }
    }
  }
}

function FerretForm({ name, ageYears, ageMonths, fee, bio, gender, available, foster, image, setName, setAgeYears, setAgeMonths, setFee, setBio, setGender, setAvailable, setFoster, setImage }: FerretFormProps) {
  return (
    <div className="FerretForm mb-5">
      <TextInput label="Name" value={name} setValue={setName} testId='ferret-form-name-field' />
      <TextInput label="Age - Years" value={ageYears} setValue={setAgeYears} testId='ferret-form-ageYears-field' />
      <TextInput label="Age - Months" value={ageMonths} setValue={setAgeMonths} testId='ferret-form-ageMonths-field' />
      <TextInput label="Fee" value={fee} setValue={setFee} testId='ferret-form-fee-field' />
      <TextField label="Bio" value={bio} setValue={setBio} required={false} testId='ferret-form-bio-field' />

      <div className="row">
        <div className="col-3">
          <GenderField label="Gender" value={gender} setValue={setGender} testId='ferret-form-gender-field' />
          <QuestionField label="Available" value={available} setValue={setAvailable} testId='ferret-form-available-field' />
          <QuestionField label="Foster" value={foster} setValue={setFoster} testId='ferret-form-foster-field' />
        </div>
        <div className="col">
          <Form.File
            id="upload-photo"
            label={image?.name || "Upload photo"}
            className="d-flex align-items-top"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              if (event.target.files?.length === 1) processFile(event.target.files[0], setImage)
            }}
            custom
          />

          <img id="uploaded-photo" className="mt-2" />
        </div>
      </div>
    </div>
  )
}

export default FerretForm
