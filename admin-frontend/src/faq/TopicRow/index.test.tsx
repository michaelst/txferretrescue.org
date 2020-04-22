import React from 'react'
import { render, act, waitFor } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import { BrowserRouter } from 'react-router-dom'
import { DELETE_FAQ_TOPIC, } from './'
import FAQPage, { LIST_FAQ_TOPICS } from '../FAQPage'
import userEvent from '@testing-library/user-event'

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
          }
        ]
      }
    },
  },
  {
    request: {
      query: DELETE_FAQ_TOPIC,
      variables: {
        id: "1",
      }
    },
    result: {
      data: {
        deleteFaqTopic: {
          "__typename": "FaqTopic",
          "id": "1",
        }
      }
    },
  }
]

test('render TopicRow', async () => {
  const { getByTestId, getByText } = render(
    <MockedProvider mocks={mocks}>
      <BrowserRouter>
        <FAQPage />
      </BrowserRouter>
    </MockedProvider>
  )

  await act(async () => {
    await waitFor(() => getByText('Basic'))

    const row = getByText('Basic')
    
    const deleteButton = getByTestId('delete-topic-1')
    userEvent.click(deleteButton)

    await waitFor(() => expect(row).not.toBeInTheDocument())
  })
})
