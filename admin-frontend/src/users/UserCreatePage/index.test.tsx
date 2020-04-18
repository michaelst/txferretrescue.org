import React from 'react'
import { render, act, waitFor } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import UserCreatePage, { CREATE_USER } from './'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache()

const mocks = [
  {
    request: {
      query: CREATE_USER,
      variables: {
        email: 'test@example.com'
      }
    },
    result: {
      data: {
        createUser: {
          "__typename": "User",
          "id": "1",
          "email": "test@example.com",
          "canManageApplications": false,
          "canManageUsers": false,
          "canManageFerrets": false,
          "canManageWebsite": false
        }
      }
    },
  }
]

test('render UserCreatePage', async () => {
  const { getByTestId } = render(
    <MockedProvider cache={cache} mocks={mocks}>
      <BrowserRouter>
        <UserCreatePage />
      </BrowserRouter>
    </MockedProvider>
  )

  const emailField = getByTestId('create-user-email-field')
  userEvent.type(emailField, 'test@example.com')

  const createButton = getByTestId('create-user-button')

  await act(async () => await userEvent.click(createButton))

  await waitFor(() => {
    const updatedCache = cache.extract()
    expect(updatedCache['User:1'].email).toBe('test@example.com')
  })

})
