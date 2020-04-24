import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { gql, useQuery, useMutation } from '@apollo/client'
import QuestionForm from 'faq/QuestionForm'
import ContentBox from 'ContentBox'
import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router-dom"
import { GetFaqContent } from './graphql/GetFaqContent'

export const GET_FAQ_CONTENT = gql`
query GetFaqContent($id: ID!) {
  faqContent(id: $id) {
    id
    title
    content
    rank
  }
}
`

export const UPDATE_FAQ_CONTENT = gql`
mutation UpdateFaqContent($id: ID!, $title: String!, $rank: Int!, $content: String!) {
  updateFaqContent(id: $id, input: {title: $title, rank: $rank, content: $content}) {
    id
    title
    rank
    content
  }
}
`

function QuestionUpdatePage() {
  const { topicId } = useParams()
  const { questionId } = useParams()
  const [title, setTitle] = useState('')
  const [rank, setRank] = useState('')
  const [content, setContent] = useState('')

  useQuery<GetFaqContent>(GET_FAQ_CONTENT, {
    variables: { id: questionId },
    onCompleted: data => {
      setTitle(data.faqContent.title)
      setRank(`${data.faqContent.rank}`)
      setContent(data.faqContent.content)
    }
  })

  const history = useHistory()

  const [updateFaqContent] = useMutation(UPDATE_FAQ_CONTENT, {
    variables: {
      id: questionId,
      title: title,
      rank: parseInt(rank),
      content: content
    },
    onCompleted: () => history.push(`/faq/${topicId}`)
  })

  return (
    <div className='QuestionUpdatePage'>
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
          onClick={() => updateFaqContent()}
          data-testid='update-question-button'
        >
          Update
        </Button>
        <Link to={`/faq/${topicId}`} className="btn btn-danger ml-2">Cancel</Link>
      </ContentBox>
    </div>
  )
}

export default QuestionUpdatePage
