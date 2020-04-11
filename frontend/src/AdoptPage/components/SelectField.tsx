import React from 'react'
import { Form } from 'react-bootstrap'

type SelectFieldProps = {
  label: string,
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  possibleValues: Array<string>
}

function SelectField({ label, value, setValue, possibleValues }: SelectFieldProps) {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        as="select"
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
      >
        {possibleValues.map(item => <option key={item}>{item}</option>)}
      </Form.Control>
    </Form.Group>
  )
}

export default SelectField