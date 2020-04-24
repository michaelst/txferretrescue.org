import React from 'react'
import { Form } from 'react-bootstrap'

type TextFieldProps = {
  label: string, 
  value: string, 
  setValue: React.Dispatch<React.SetStateAction<string>>, 
  required?: boolean,
  testId?: string
  rows?: string
}

function TextField({ label, value, setValue, required = true, testId, rows = '4' }: TextFieldProps) {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        as="textarea"
        rows={rows}
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
        isInvalid={value.length === 0 && required}
        data-testid={testId}
      />
    </Form.Group>
  )
}

export default TextField