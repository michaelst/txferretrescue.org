import React from 'react'
import TextInput from 'forms/TextInput'

type TopicFormProps = {
  name: string,
  rank: string,
  setName: React.Dispatch<React.SetStateAction<string>>,
  setRank: React.Dispatch<React.SetStateAction<string>>,
}
function TopicForm({ name, rank, setName, setRank }: TopicFormProps) {
  return (
    <div className="TopicForm">
      <TextInput label="Name" value={name} setValue={setName} testId='topic-form-name-field' />
      <TextInput label="Rank" value={rank} setValue={setRank} testId='topic-form-rank-field' />
    </div>
  )
}

export default TopicForm
