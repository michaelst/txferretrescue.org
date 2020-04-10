import React from 'react'
import { ListTopics_faqTopics } from '../../graphql/ListTopics'
import Question from '../Question'

type TopicProps = {
  topic: ListTopics_faqTopics
}

function Topic({ topic }: TopicProps) {
  return (
    <div className="Topic mb-4" data-testid="Topic">
      <h3>{topic.name}</h3>

      {topic.questions.map(question => <Question key={question.id} question={question} />)}
    </div>
  )
}

export default Topic