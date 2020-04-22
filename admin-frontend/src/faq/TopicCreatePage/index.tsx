import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import TopicForm from 'faq/TopicForm'
import ContentBox from 'ContentBox'
import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router-dom"
import { LIST_FAQ_TOPICS } from '../FAQPage'
import { ListFaqTopics } from '../FAQPage/graphql/ListFaqTopics'

export const CREATE_FAQ_TOPIC = gql`
mutation CreateFaqTopic($name: String!, $rank: Int!) {
  createFaqTopic(input: {name: $name, rank: $rank}) {
    id
    name
    rank
  }
}
`

function TopicCreatePage() {
  const [name, setName] = useState('')
  const [rank, setRank] = useState('')

  const history = useHistory()

  const [createFaqTopic] = useMutation(CREATE_FAQ_TOPIC, {
    variables: {
      name: name,
      rank: parseInt(rank)
    },
    onCompleted: () => history.push("/faq"),
    onError: () => { },
    update(cache, { data: { createFaqTopic } }) {
      const data = cache.readQuery<ListFaqTopics | null>({ query: LIST_FAQ_TOPICS })

      cache.writeQuery({
        query: LIST_FAQ_TOPICS,
        data: { faqTopics: data?.faqTopics.concat([createFaqTopic]).sort((a, b) => a.rank - b.rank) }
      })
    }
  })

  return (
    <div className="TopicCreatePage">
      <ContentBox>
        <TopicForm
          name={name}
          rank={rank}
          setName={setName}
          setRank={setRank}
        />

        <Button
          className="btn-success"
          onClick={() => createFaqTopic()}
          data-testid="create-topic-button"
        >
          Create
        </Button>
      </ContentBox>
    </div>
  )
}

export default TopicCreatePage
