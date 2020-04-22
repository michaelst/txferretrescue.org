import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { gql, useMutation } from '@apollo/client'
import { ListFaqTopics, ListFaqTopics_faqTopics } from 'faq/FAQPage/graphql/ListFaqTopics'
import { LIST_FAQ_TOPICS } from 'faq/FAQPage'

export const DELETE_FAQ_TOPIC = gql`
mutation DeleteFaqTopic($id: ID!) {
  deleteFaqTopic(id: $id) {
    id
  }
}
`

type TopicRowProps = {
  topic: ListFaqTopics_faqTopics
}

function TopicRow({ topic }: TopicRowProps) {
  const [deleteFaqTopic] = useMutation(DELETE_FAQ_TOPIC, {
    update(cache, { data: { deleteFaqTopic } }) {
      const data = cache.readQuery<ListFaqTopics | null>({ query: LIST_FAQ_TOPICS })

      cache.writeQuery({
        query: LIST_FAQ_TOPICS,
        data: { faqTopics: data?.faqTopics.filter(topic => topic.id !== deleteFaqTopic.id) }
      })
    }
  })

  return (
    <tr key={topic.id} className="TopicRow" data-testid="TopicRow">
      <td>{topic.name}</td>
      <td>{topic.rank}</td>
      <td>
        <div className="d-flex align-items-center justify-content-center">
          <Link to={`/faq/${topic.id}`} className="pr-1">edit</Link> |
                  <Button
            variant="link"
            className="m-0 p-0 pl-1"
            onClick={() => deleteFaqTopic({ variables: { id: topic.id } })}
            data-testid={`delete-topic-${topic.id}`}
          >
            delete
          </Button>
        </div>
      </td>
    </tr>
  )
}

export default TopicRow
