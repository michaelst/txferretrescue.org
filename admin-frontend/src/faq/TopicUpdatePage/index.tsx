import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { gql, useQuery, useMutation } from '@apollo/client'
import TopicForm from 'faq/TopicForm'
import ContentBox from 'ContentBox'
import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router-dom"

export const GET_FAQ_TOPIC = gql`
query GetFaqTopic($id: ID!) {
  faqTopic(id: $id) {
    id
    name
    rank
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

  useQuery(GET_FAQ_TOPIC, {
    variables: { id: topicId },
    onCompleted: data => {
      setName(data.faqTopic.name)
      setRank(data.faqTopic.rank)
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
    </div>
  )
}

export default TopicUpdatePage
