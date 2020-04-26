import React from 'react'
import { Form } from 'react-bootstrap'
import { Gender}  from 'globalTypes'

type QuestionFieldProps = {
  label: string,
  value: Gender | undefined,
  setValue: React.Dispatch<React.SetStateAction<Gender | undefined>>
  testId?: string
}

function QuestionField({ label, value, setValue, testId }: QuestionFieldProps) {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <div>
        <Form.Check
          inline
          label="Male"
          type="radio"
          checked={value === Gender.MALE}
          onChange={() => setValue(Gender.MALE)}
          data-testid={`${testId}-male`}
        />
        <Form.Check
          inline
          label="Female"
          type="radio"
          checked={value === Gender.FEMALE}
          onChange={() => setValue(Gender.FEMALE)}
          data-testid={`${testId}-female`}
        />
      </div>
    </Form.Group>
  )
}

export default QuestionField