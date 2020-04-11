import React from 'react'
import { Form } from 'react-bootstrap'

type CheckboxProps = {
  label: string,
  value: boolean,
  setValue: React.Dispatch<React.SetStateAction<boolean>>,
  testId?: string
}

function Checkbox({ label, value, setValue, testId }: CheckboxProps) {
  return (
    <Form.Group>
      <Form.Check
        type="checkbox"
        label={label}
        checked={value}
        onChange={() => setValue(!value)}
        data-testid={testId}
      />
    </Form.Group>
  )
}

export default Checkbox