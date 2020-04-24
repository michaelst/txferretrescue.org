import React, { useState } from 'react'
import { ListTopics_faqTopics_questions } from '../../graphql/ListTopics'
import './index.scss'
import Collapse from 'react-bootstrap/Collapse'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

type QuestionProps = {
  question: ListTopics_faqTopics_questions
}

function Question({ question }: QuestionProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="Question mb-2" data-testid="Question">
      <Card>
        <Card.Header className="p-1">
          <h4 className="m-0">
            <Button
              variant="link"
              onClick={() => setOpen(!open)}
              aria-controls={`collapse-${question.id}`}
              aria-expanded={open}
            >
              {question.title}
            </Button>
          </h4>
        </Card.Header>
        <Collapse in={open}>
          <Card.Body id={`collapse-${question.id}`}>
            {
              question.content.split('\n').map((item, i) => <p key={i} dangerouslySetInnerHTML={{ __html: item }} /> )
            }
          </Card.Body>
        </Collapse>
      </Card>
    </div>
  )
}

export default Question