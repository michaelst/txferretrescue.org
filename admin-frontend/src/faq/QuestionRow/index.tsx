import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { gql, useMutation } from '@apollo/client'
import { GetFaqTopic, GetFaqTopic_faqTopic_questions } from 'faq/TopicUpdatePage/graphql/GetFaqTopic'
import { GET_FAQ_TOPIC } from 'faq/TopicUpdatePage'

export const DELETE_FAQ_CONTENT = gql`
mutation DeleteFaqContent($id: ID!) {
  deleteFaqContent(id: $id) {
    id
  }
}
`

type QuestionRowProps = {
  topicId: string,
  question: GetFaqTopic_faqTopic_questions
}

function QuestionRow({ topicId, question }: QuestionRowProps) {
  const [deleteFaqContent] = useMutation(DELETE_FAQ_CONTENT, {
    update(cache, { data: { deleteFaqContent } }) {
      const data = cache.readQuery<GetFaqTopic | null>({
        query: GET_FAQ_TOPIC,
        variables: { id: topicId }
      })

      const questions = data?.faqTopic.questions.filter(question => question.id !== deleteFaqContent.id)

      cache.writeQuery({
        query: GET_FAQ_TOPIC,
        variables: { id: topicId },
        data: {
          faqTopic: { ...data?.faqTopic, ...{ questions: questions } }
        }
      })
    }
  })

  return (
    <tr key={question.id} className="QuestionRow" data-testid="QuestionRow">
      <td>{question.title}</td>
      <td>{question.rank}</td>
      <td>
        <div className="d-flex align-items-center justify-content-center">
          <Link to={`/faq/${topicId}/${question.id}`} className="pr-1">edit</Link> |
                  <Button
            variant="link"
            className="m-0 p-0 pl-1"
            onClick={() => deleteFaqContent({ variables: { id: question.id } })}
            data-testid={`delete-question-${question.id}`}
          >
            delete
          </Button>
        </div>
      </td>
    </tr>
  )
}

export default QuestionRow
