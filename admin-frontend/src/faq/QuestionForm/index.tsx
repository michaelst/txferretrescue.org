import React from 'react'
import TextInput from 'forms/TextInput'
import TextField from 'forms/TextField'

type TopicFormProps = {
  title: string,
  rank: string,
  content: string,
  setTitle: React.Dispatch<React.SetStateAction<string>>,
  setRank: React.Dispatch<React.SetStateAction<string>>,
  setContent: React.Dispatch<React.SetStateAction<string>>
}
function TopicForm({ title, rank, content, setTitle, setRank, setContent }: TopicFormProps) {
  return (
    <div className="TopicForm">
      <TextInput label="Question" value={title} setValue={setTitle} testId='topic-form-title-field' />
      <TextInput label="Rank" value={rank} setValue={setRank} testId='topic-form-rank-field' />
      <TextField label="Answer" value={content} setValue={setContent} testId='topic-form-content-field' />
    </div>
  )
}

export default TopicForm
