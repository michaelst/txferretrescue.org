import React from 'react'
import { Form } from 'react-bootstrap'

type QuestionFieldProps = {
  label: string,
  value: boolean | undefined,
  setValue: React.Dispatch<React.SetStateAction<boolean | undefined>>
}

function QuestionField({ label, value, setValue }: QuestionFieldProps) {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <div>
        <Form.Check
          inline
          label="Yes"
          type="radio"
          checked={value === true}
          onChange={() => setValue(true)}
        />
        <Form.Check
          inline
          label="No"
          type="radio"
          checked={value === false}
          onChange={() => setValue(false)}
        />
      </div>
    </Form.Group>
  )
}

export default QuestionField