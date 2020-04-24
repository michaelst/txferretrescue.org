import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { ListTopics } from './graphql/ListTopics'
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer'
import Button from 'react-bootstrap/Button'
import ContentBox from 'ContentBox'
import Topic from './components/Topic'

export const LIST_TOPICS = gql`
query ListTopics {
  faqTopics {
    id
    name
    rank
    questions {
      id
      content
      title
      rank
    }
  }
}
`

export function FAQPage() {
  const { data } = useQuery<ListTopics>(LIST_TOPICS)

  return (
    <div className="FAQPage">
      <h3>Frequently Asked Questions</h3>

      <ContentBox>
        {data &&
          [...data.faqTopics]
            .sort((a, b) => a.rank - b.rank)
            .map(topic => <Topic key={topic.id} topic={topic} />)
        }

        <LinkContainer to="/apply">
          <Button className="btn-lg btn-success">Adopt A Ferret!</Button>
        </LinkContainer>
      </ContentBox>
    </div>
  )
}
