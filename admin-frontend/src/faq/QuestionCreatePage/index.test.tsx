import React from 'react'
import { render, act, waitFor } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import QuestionCreatePage, { CREATE_FAQ_CONTENT } from './'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Route } from 'react-router-dom'
import { InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache()

const mocks = [
  {
    request: {
      query: CREATE_FAQ_CONTENT,
      variables: {
        topicId: '1',
        title: 'What is a ferret?',
        rank: 1,
        content: 'Some description'
      }
    },
    result: {
      data: {
        createFaqContent: {
          "__typename": "FaqContent",
          "id": "1",
          "title": "What is a ferret?",
          "rank": 1,
          "content": 'Some description'
        }
      }
    },
  }
]

test('render QuestionCreatePage', async () => {
  const { getByTestId } = render(
    <MockedProvider cache={cache} mocks={mocks}>
      <MemoryRouter initialEntries={['/faq/1/create']}>
        <Route path="/faq/:topicId/create">
          <QuestionCreatePage />
        </Route>
      </MemoryRouter>
    </MockedProvider>
  )

  const titleField = getByTestId('topic-form-title-field')
  userEvent.type(titleField, 'What is a ferret?')

  const rankField = getByTestId('topic-form-rank-field')
  userEvent.type(rankField, '1')

  const contentField = getByTestId('topic-form-content-field')
  userEvent.type(contentField, 'Some description')

  const createButton = getByTestId('create-question-button')

  await act(async () => await userEvent.click(createButton))

  await waitFor(() => {
    const updatedCache = cache.extract()
    expect(updatedCache['FaqContent:1'].title).toBe('What is a ferret?')
    expect(updatedCache['FaqContent:1'].rank).toBe(1)
  })

})
