import React from 'react'
import { Form } from 'react-bootstrap'

type QuestionFieldProps = {
  label: string,
  value: boolean | undefined,
  setValue: React.Dispatch<React.SetStateAction<boolean | undefined>>
  testId?: string
}

function QuestionField({ label, value, setValue, testId }: QuestionFieldProps) {
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
          data-testid={`${testId}-yes`}
        />
        <Form.Check
          inline
          label="No"
          type="radio"
          checked={value === false}
          onChange={() => setValue(false)}
          data-testid={`${testId}-no`}
        />
      </div>
    </Form.Group>
  )
}

export default QuestionField