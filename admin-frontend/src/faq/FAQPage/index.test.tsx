import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import FAQPage, { LIST_FAQ_TOPICS } from './'
import { BrowserRouter } from 'react-router-dom'

const mocks = [
  {
    request: {
      query: LIST_FAQ_TOPICS
    },
    result: {
      data: {
        faqTopics: [
          {
            "__typename": "FaqTopic",
            "id": "1",
            "name": "Basic",
            "rank": 1
          },
          {
            "__typename": "FaqTopic",
            "id": "2",
            "name": "Adoption",
            "rank": 2
          }
        ]
      }
    },
  }
]

test('render FAQPage', async () => {
  const { getAllByTestId } = render(
    <MockedProvider mocks={mocks}>
      <BrowserRouter>
        <FAQPage />
      </BrowserRouter>
    </MockedProvider>
  )

  await waitFor(() => {
    const rows = getAllByTestId('TopicRow')
    expect(rows.length).toBe(2)
  })
})
