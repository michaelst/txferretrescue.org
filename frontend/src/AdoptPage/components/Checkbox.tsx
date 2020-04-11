import React from 'react'
import { Form } from 'react-bootstrap'

type CheckboxProps = {
  label: string,
  value: boolean,
  setValue: React.Dispatch<React.SetStateAction<boolean>>
}

function Checkbox({ label, value, setValue }: CheckboxProps) {
  return (
    <Form.Group>
      <Form.Check
        type="checkbox"
        label={label}
        checked={value}
        onChange={() => setValue(!value)}
      />
    </Form.Group>
  )
}

export default Checkbox