import React from 'react'
import { render, act, waitFor, fireEvent } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import TopicUpdatePage, { GET_FAQ_TOPIC, UPDATE_FAQ_TOPIC } from './'
import { DELETE_FAQ_CONTENT } from '../QuestionRow'
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
          "rank": 2,
          "questions": [
            {
              "__typename": "FaqContent",
              "id": "1",
              "title": "What is a ferret?",
              "rank": 1,
            }
          ]
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
  },
  {
    request: {
      query: DELETE_FAQ_CONTENT,
      variables: {
        id: "1",
      }
    },
    result: {
      data: {
        deleteFaqContent: {
          "__typename": "FaqContent",
          "id": "1",
        }
      }
    },
  }
]

test('render TopicUpdatePage', async () => {
  const { getByTestId, getByText } = render(
    <MockedProvider cache={cache} mocks={mocks}>
      <MemoryRouter initialEntries={['/faq/1']}>
        <Route path="/faq/:topicId">
          <TopicUpdatePage />
        </Route>
      </MemoryRouter>
    </MockedProvider>
  )

  await waitFor(() => getByText('What is a ferret?'))

  const row = getByText('What is a ferret?')

  const deleteButton = getByTestId('delete-question-1')
  userEvent.click(deleteButton)

  await waitFor(() => expect(row).not.toBeInTheDocument())

  const nameField = getByTestId('topic-form-name-field')
  fireEvent.change(nameField, { target: { value: 'Basic' } })

  const rankField = getByTestId('topic-form-rank-field')
  fireEvent.change(rankField, { target: { value: '1' } })

  const updateButton = getByTestId('update-topic-button')

  await act(async () => await userEvent.click(updateButton))

  await waitFor(() => {
    const updatedCache = cache.extract()
    expect(updatedCache['FaqTopic:1'].name).toBe('Basic')
    expect(updatedCache['FaqTopic:1'].rank).toBe(1)
  })

})
