import React from 'react'
import TextInput from 'forms/TextInput'
import TextField from 'forms/TextField'

type SitterFormProps = {
  name: string,
  setName: React.Dispatch<React.SetStateAction<string>>,
  email: string,
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  phone: string,
  setPhone: React.Dispatch<React.SetStateAction<string>>,
  notes: string,
  setNotes: React.Dispatch<React.SetStateAction<string>>
}
function SitterForm({ name, setName, email, setEmail, phone, setPhone, notes, setNotes }: SitterFormProps) {
  return (
    <div className="SitterForm">
      <TextInput label="Name" value={name} setValue={setName} />
      <TextInput label="Email" value={email} setValue={setEmail} required={false} />
      <TextInput label="Phone" value={phone} setValue={setPhone} required={false} />
      <TextField label="Notes" value={notes} setValue={setNotes} required={false} />
    </div>
  )
}

export default SitterForm
