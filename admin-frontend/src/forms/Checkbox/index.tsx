import React from 'react'
import './index.scss'

type CheckboxProps = {
  value: boolean,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  testId?: string
}

function Checkbox({ value, onChange, testId }: CheckboxProps) {
  return (
    <label className="checkbox" data-testid={testId}>
      <input
        type="checkbox"
        checked={value}
        onChange={onChange}
        data-testid={`${testId}-input`}
      />
      <span className="checkmark"></span>
    </label>
  )
}

export default Checkbox