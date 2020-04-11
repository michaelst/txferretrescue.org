import React from 'react'
import { Form } from 'react-bootstrap'

type TextInputProps = {
  label: string,
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  required?: boolean,
  isInvalid?: boolean
}

function TextInput({ label, value, setValue, required = true, isInvalid = false }: TextInputProps) {
  return (
    <Form.Group>
      <Form.Label>{label} {!required && "(optional)"}</Form.Label>
      <Form.Control
        type="text"
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
        isInvalid={isInvalid || (value.length === 0 && required)}
      />
    </Form.Group>
  )
}

export default TextInput