import React from 'react'
import { render, act, waitFor } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import TopicUpdatePage, { GET_FAQ_TOPIC, UPDATE_FAQ_TOPIC } from './'
import userEvent from '@testing-library/user-event'
import { Route, MemoryRouter } from 'react-router-dom'
import { InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache().restore({ 'FaqTopic:1': { name: "test", rank: 2 } })

const mocks = [
  {
    request: {
      query: GET_FAQ_TOPIC,
      variables: {
        id: '1'
      }
    },
    result: {
      data: {
        faqTopic: {
          "__typename": "FaqTopic",
          "id": "1",
          "name": "test",
          "rank": 2
        }
      }
    },
  },
  {
    request: {
      query: UPDATE_FAQ_TOPIC,
      variables: {
        id: '1',
        name: 'Basic',
        rank: 1,
      }
    },
    result: {
      data: {
        updateFaqTopic: {
          "__typename": "FaqTopic",
          "id": "1",
          "name": "Basic",
          "rank": 1
        }
      }
    },
  }
]

test('render TopicUpdatePage', async () => {
  const { getByTestId } = render(
    <MockedProvider cache={cache} mocks={mocks}>
      <MemoryRouter initialEntries={['/faq/1']}>
        <Route path="/faq/:topicId">
          <TopicUpdatePage />
        </Route>
      </MemoryRouter>
    </MockedProvider>
  )

  const nameField = getByTestId('topic-form-name-field')
  userEvent.type(nameField, 'Basic')

  const rankField = getByTestId('topic-form-rank-field')
  userEvent.type(rankField, '1')

  const updateButton = getByTestId('update-topic-button')

  await act(async () => await userEvent.click(updateButton))

  await waitFor(() => {
    const updatedCache = cache.extract()
    expect(updatedCache['FaqTopic:1'].name).toBe('Basic')
    expect(updatedCache['FaqTopic:1'].rank).toBe(1)
  })

})
