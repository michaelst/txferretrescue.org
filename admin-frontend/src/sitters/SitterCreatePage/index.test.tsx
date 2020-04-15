import React from 'react'
import { render, act, waitFor } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import SitterCreatePage, { CREATE_SITTER } from './'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache().restore({'Sitter:2': {name: "test"}})

const mocks = [
  {
    request: {
      query: CREATE_SITTER,
      variables: {
        email: '',
        name: "Some name",
        notes: '',
        phone: ''
      }
    },
    result: {
      data: {
        createSitter: {
          "__typename": "Sitter",
          "id": "1",
          "email": null,
          "name": "Some name",
          "phone": null
        }
      }
    },
  }
]

test('render SitterCreatePage', async () => {
  const { getByTestId } = render(
    <MockedProvider cache={cache} mocks={mocks}>
      <BrowserRouter>
        <SitterCreatePage />
      </BrowserRouter>
    </MockedProvider>
  )

  const nameField = getByTestId('sitter-form-name-field')
  userEvent.type(nameField, 'Some name')

  const createButton = getByTestId('create-sitter-button')

  await act(async () => await userEvent.click(createButton))

  await waitFor(() => {
    const updatedCache = cache.extract()
    expect(updatedCache['Sitter:1'].name).toBe('Some name')
  })

})
