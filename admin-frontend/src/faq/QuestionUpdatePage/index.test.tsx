import React from 'react'
import { render, act, waitFor } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import QuestionUpdatePage, { GET_FAQ_CONTENT, UPDATE_FAQ_CONTENT } from './'
import { DELETE_FAQ_CONTENT } from '../QuestionRow'
import userEvent from '@testing-library/user-event'
import { Route, MemoryRouter } from 'react-router-dom'
import { InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache().restore({ 'FaqTopic:1': { name: "test", rank: 2 } })

const mocks = [
  {
    request: {
      query: GET_FAQ_CONTENT,
      variables: {
        id: '1'
      }
    },
    result: {
      data: {
        faqContent: {
          "__typename": "FaqContent",
          "id": "1",
          "title": "What is a ferret?",
          "rank": 1,
          "content": 'Some description'
        }
      }
    },
  },
  {
    request: {
      query: UPDATE_FAQ_CONTENT,
      variables: {
        id: '1',
        title: 'What is a ferret?',
        rank: 1,
        content: 'A different description'
      }
    },
    result: {
      data: {
        updateFaqContent: {
          "__typename": "FaqContent",
          "id": "1",
          "title": "What is a ferret?",
          "rank": 1,
          "content": 'A different description'
        }
      }
    },
  }
]

test('render QuestionUpdatePage', async () => {
  const { getByTestId, getByText } = render(
    <MockedProvider cache={cache} mocks={mocks}>
      <MemoryRouter initialEntries={['/faq/1/1']}>
        <Route path="/faq/:topicId/:questionId">
          <QuestionUpdatePage />
        </Route>
      </MemoryRouter>
    </MockedProvider>
  )

  await waitFor(() => getByText('Some description'))

  const contentField = getByTestId('topic-form-content-field')
  userEvent.type(contentField, 'A different description')

  const updateButton = getByTestId('update-question-button')

  await act(async () => await userEvent.click(updateButton))

  await waitFor(() => {
    const updatedCache = cache.extract()
    expect(updatedCache['FaqContent:1'].content).toBe('A different description')
  })

})
