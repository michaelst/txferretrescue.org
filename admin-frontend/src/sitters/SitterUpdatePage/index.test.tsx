import React from 'react'
import { render, act, waitFor } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import SitterUpdatePage, { GET_SITTER, UPDATE_SITTER } from './'
import userEvent from '@testing-library/user-event'
import { Route, MemoryRouter } from 'react-router-dom'
import { InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache().restore({ 'Sitter:1': { name: "test" } })

const mocks = [
  {
    request: {
      query: GET_SITTER,
      variables: {
        id: '1',
      }
    },
    result: {
      data: {
        sitter: {
          "__typename": "Sitter",
          "id": "1",
          "email": null,
          "name": "Test",
          "phone": null,
          "notes": null
        }
      }
    },
  },
  {
    request: {
      query: UPDATE_SITTER,
      variables: {
        id: '1',
        email: '',
        name: "Some name",
        notes: 'Some notes',
        phone: ''
      }
    },
    result: {
      data: {
        updateSitter: {
          "__typename": "Sitter",
          "id": "1",
          "email": null,
          "name": "Some name",
          "phone": null,
          "notes": "Some notes"
        }
      }
    },
  }
]

test('render SitterUpdatePage', async () => {
  const { getByTestId } = render(
    <MockedProvider cache={cache} mocks={mocks}>
      <MemoryRouter initialEntries={['/sitters/1']}>
        <Route path="/sitters/:sitterId">
          <SitterUpdatePage />
        </Route>
      </MemoryRouter>
    </MockedProvider>
  )

  const nameField = getByTestId('sitter-form-name-field')
  userEvent.type(nameField, 'Some name')

  const noteField = getByTestId('sitter-form-notes-field')
  userEvent.type(noteField, 'Some notes')

  const updateButton = getByTestId('update-sitter-button')

  await act(async () => await userEvent.click(updateButton))

  await waitFor(() => {
    const updatedCache = cache.extract()
    expect(updatedCache['Sitter:1'].name).toBe('Some name')
    expect(updatedCache['Sitter:1'].notes).toBe('Some notes')
  })

})
