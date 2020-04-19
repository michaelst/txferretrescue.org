import React from 'react'
import TextInput from 'forms/TextInput'

type VetFormProps = {
  city: string,
  companyName: string,
  notes: string,
  phone: string,
  state: string,
  street: string,
  vetName: string,
  website: string,
  zip: string,
  setCity: React.Dispatch<React.SetStateAction<string>>,
  setCompanyName: React.Dispatch<React.SetStateAction<string>>,
  setNotes: React.Dispatch<React.SetStateAction<string>>,
  setPhone: React.Dispatch<React.SetStateAction<string>>,
  setState: React.Dispatch<React.SetStateAction<string>>,
  setStreet: React.Dispatch<React.SetStateAction<string>>,
  setVetName: React.Dispatch<React.SetStateAction<string>>,
  setWebsite: React.Dispatch<React.SetStateAction<string>>,
  setZip: React.Dispatch<React.SetStateAction<string>>
}
function SitterForm({ city, companyName, notes, phone, state, street, vetName, website, zip, setCity, setCompanyName, setNotes, setPhone, setState, setStreet, setVetName, setWebsite, setZip }: VetFormProps) {
  return (
    <div className="SitterForm">
      <TextInput label="Company Name" value={companyName} setValue={setCompanyName} required={false} testId='vet-form-name-field' />
      <TextInput label="Vet Name" value={vetName} setValue={setVetName} required={false} />
      <TextInput label="Street" value={street} setValue={setStreet} required={false} />
      <TextInput label="City" value={city} setValue={setCity} required={false} />
      <TextInput label="State" value={state} setValue={setState} required={false} />
      <TextInput label="Zip" value={zip} setValue={setZip} required={false} />
      <TextInput label="Phone" value={phone} setValue={setPhone} required={false} />
      <TextInput label="Website" value={website} setValue={setWebsite} required={false} />
      <TextInput label="Notes" value={notes} setValue={setNotes} required={false} testId='vet-form-notes-field' />
    </div>
  )
}

export default SitterForm
