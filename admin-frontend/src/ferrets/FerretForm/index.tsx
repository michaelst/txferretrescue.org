import React from 'react'
import TextInput from 'forms/TextInput'
import TextField from 'forms/TextField'
import QuestionField from 'forms/QuestionField'
import GenderField from 'forms/GenderField'
import { Gender}  from 'globalTypes'

type FerretFormProps = {
  name: string,
  ageYears: string,
  ageMonths: string,
  fee: string,
  bio: string,
  gender: Gender | undefined,
  available: boolean | undefined,
  foster: boolean | undefined,
  setName: React.Dispatch<React.SetStateAction<string>>,
  setAgeYears: React.Dispatch<React.SetStateAction<string>>,
  setAgeMonths: React.Dispatch<React.SetStateAction<string>>,
  setFee: React.Dispatch<React.SetStateAction<string>>,
  setBio: React.Dispatch<React.SetStateAction<string>>,
  setGender: React.Dispatch<React.SetStateAction<Gender | undefined>>,
  setAvailable: React.Dispatch<React.SetStateAction<boolean | undefined>>,
  setFoster: React.Dispatch<React.SetStateAction<boolean | undefined>>
}
function FerretForm({ name, ageYears, ageMonths, fee, bio, gender, available, foster, setName, setAgeYears, setAgeMonths, setFee, setBio, setGender, setAvailable, setFoster }: FerretFormProps) {
  return (
    <div className="FerretForm">
      <TextInput label="Name" value={name} setValue={setName} testId='ferret-form-name-field' />
      <TextInput label="Age - Years" value={ageYears} setValue={setAgeYears} testId='ferret-form-ageYears-field' />
      <TextInput label="Age - Months" value={ageMonths} setValue={setAgeMonths} testId='ferret-form-ageMonths-field' />
      <TextInput label="Fee" value={fee} setValue={setFee} testId='ferret-form-fee-field' />
      <TextField label="Bio" value={bio} setValue={setBio} required={false} testId='ferret-form-bio-field' />
      <GenderField label="Gender" value={gender} setValue={setGender} testId='ferret-form-gender-field' />
      <QuestionField label="Available" value={available} setValue={setAvailable} testId='ferret-form-available-field' />
      <QuestionField label="Foster" value={foster} setValue={setFoster} testId='ferret-form-foster-field' />
    </div>
  )
}

export default FerretForm
