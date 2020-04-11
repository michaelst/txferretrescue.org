import React from 'react'
import { Form } from 'react-bootstrap'

type TextFieldProps = {
  label: string, 
  value: string, 
  setValue: React.Dispatch<React.SetStateAction<string>>, 
  required?: boolean
}

function TextField({ label, value, setValue, required = true }: TextFieldProps) {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        as="textarea"
        rows="4"
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
        isInvalid={value.length === 0 && required}
      />
    </Form.Group>
  )
}

export default TextField