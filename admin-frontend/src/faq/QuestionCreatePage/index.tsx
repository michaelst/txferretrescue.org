import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import QuestionForm from 'faq/QuestionForm'
import ContentBox from 'ContentBox'
import Button from 'react-bootstrap/Button'
import { useHistory, useParams, Link } from "react-router-dom"
import { GetFaqTopic } from 'faq/TopicUpdatePage/graphql/GetFaqTopic'
import { GET_FAQ_TOPIC } from 'faq/TopicUpdatePage'

export const CREATE_FAQ_CONTENT = gql`
mutation CreateFaqContent($topicId: ID!, $title: String!, $rank: Int!, $content: String!) {
  createFaqContent(input: {topicId: $topicId, title: $title, rank: $rank, content: $content}) {
    id
    title
    rank
  }
}
`

function QuestionCreatePage() {
  const { topicId } = useParams()
  const [title, setTitle] = useState('')
  const [rank, setRank] = useState('')
  const [content, setContent] = useState('')

  const history = useHistory()

  const [createFaqContent] = useMutation(CREATE_FAQ_CONTENT, {
    variables: {
      topicId: topicId,
      title: title,
      rank: parseInt(rank),
      content: content
    },
    onCompleted: () => history.push(`/faq/${topicId}`),
    onError: error => console.log(error),
    update(cache, { data: { createFaqContent } }) {
      const data = cache.readQuery<GetFaqTopic | null>({
        query: GET_FAQ_TOPIC,
        variables: { id: topicId }
      })

      const questions = data?.faqTopic.questions.concat([createFaqContent])

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
    <div className="QuestionCreatePage">
      <ContentBox>
        <QuestionForm
          title={title}
          rank={rank}
          content={content}
          setTitle={setTitle}
          setRank={setRank}
          setContent={setContent}
        />

        <Button
          className="btn-success"
          onClick={() => createFaqContent()}
          data-testid="create-question-button"
        >
          Create
        </Button>
        <Link to={`/faq/${topicId}`} className="btn btn-danger ml-2">Cancel</Link>
      </ContentBox>
    </div>
  )
}

export default QuestionCreatePage
