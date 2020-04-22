import React from 'react'
import Table from 'react-bootstrap/Table'
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer'
import Button from 'react-bootstrap/Button'
import { gql, useQuery } from '@apollo/client'
import { ListFaqTopics } from './graphql/ListFaqTopics'
import TopicRow from 'faq/TopicRow'
import './index.scss'

export const LIST_FAQ_TOPICS = gql`
query ListFaqTopics {
  faqTopics {
    id
    name
    rank
  }
}
`

function FAQPage() {
  const { data } = useQuery<ListFaqTopics>(LIST_FAQ_TOPICS)

  return (
    <div className="FAQPage">
      <LinkContainer to="/faq/create" className="mb-2">
        <Button className="btn-success">Add Topic</Button>
      </LinkContainer>

      <Table bordered hover>
        <thead>
          <tr>
            <th>Topic</th>
            <th>Order</th>
            <th className="action-row"></th>
          </tr>
        </thead>
        <tbody>
          {data?.faqTopics.map(topic => <TopicRow topic={topic} key={topic.id} />)}
        </tbody>
      </Table>
    </div>
  )
}

export default FAQPage
