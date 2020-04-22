import React from 'react'
import { render, act, waitFor } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import TopicCreatePage, { CREATE_FAQ_TOPIC } from './'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache()

const mocks = [
  {
    request: {
      query: CREATE_FAQ_TOPIC,
      variables: {
        name: 'Basic',
        rank: 1
      }
    },
    result: {
      data: {
        createFaqTopic: {
          "__typename": "FaqTopic",
          "id": "1",
          "name": "Basic",
          "rank": 1
        }
      }
    },
  }
]

test('render TopicCreatePage', async () => {
  const { getByTestId } = render(
    <MockedProvider cache={cache} mocks={mocks}>
      <BrowserRouter>
        <TopicCreatePage />
      </BrowserRouter>
    </MockedProvider>
  )

  const nameField = getByTestId('topic-form-name-field')
  userEvent.type(nameField, 'Basic')

  const rankField = getByTestId('topic-form-rank-field')
  userEvent.type(rankField, '1')

  const createButton = getByTestId('create-topic-button')

  await act(async () => await userEvent.click(createButton))

  await waitFor(() => {
    const updatedCache = cache.extract()
    expect(updatedCache['FaqTopic:1'].name).toBe('Basic')
    expect(updatedCache['FaqTopic:1'].rank).toBe(1)
  })

})
