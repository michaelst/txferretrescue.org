import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { gql, useQuery, useMutation } from '@apollo/client'
import TopicForm from 'faq/TopicForm'
import ContentBox from 'ContentBox'
import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router-dom"
import QuestionRow from 'faq/QuestionRow'
import Table from 'react-bootstrap/Table'
import { GetFaqTopic } from './graphql/GetFaqTopic'

export const GET_FAQ_TOPIC = gql`
query GetFaqTopic($id: ID!) {
  faqTopic(id: $id) {
    id
    name
    rank
    questions {
      id
      title
      rank
    }
  }
}
`

export const UPDATE_FAQ_TOPIC = gql`
mutation UpdateFaqTopic($id: ID!, $name: String!, $rank: Int!) {
  updateFaqTopic(id: $id, input: {name: $name, rank: $rank}) {
    id
    name
    rank
  }
}
`

function TopicUpdatePage() {
  const { topicId } = useParams()
  const [name, setName] = useState('')
  const [rank, setRank] = useState('')

  const { data } = useQuery<GetFaqTopic>(GET_FAQ_TOPIC, {
    variables: { id: topicId },
    onCompleted: data => {
      setName(data.faqTopic.name)
      setRank(`${data.faqTopic.rank}`)
    }
  })

  const history = useHistory()

  const [updateFaqTopic] = useMutation(UPDATE_FAQ_TOPIC, {
    variables: {
      id: topicId,
      name: name,
      rank: parseInt(rank)
    },
    onCompleted: () => history.push("/faq")
  })

  return (
    <div className='TopicUpdatePage'>
      <ContentBox>
        <TopicForm
          name={name}
          rank={rank}
          setName={setName}
          setRank={setRank}
        />

        <Button
          className="btn-success"
          onClick={() => updateFaqTopic()}
          data-testid='update-topic-button'
        >
          Update
        </Button>
      </ContentBox>

      {data?.faqTopic && (
        <Table bordered hover>
          <thead>
            <tr>
              <th>Question</th>
              <th>Order</th>
              <th className="action-row"></th>
            </tr>
          </thead>
          <tbody>
            {data.faqTopic.questions.map(question => <QuestionRow topicId={data.faqTopic.id} question={question} key={question.id} />)}
          </tbody>
        </Table>
      )}
    </div>
  )
}

export default TopicUpdatePage
