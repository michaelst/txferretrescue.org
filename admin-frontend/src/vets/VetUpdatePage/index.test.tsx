import React from 'react'
import { render, act, waitFor } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import VetUpdatePage, { GET_VET, UPDATE_VET } from './'
import userEvent from '@testing-library/user-event'
import { Route, MemoryRouter } from 'react-router-dom'
import { InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache().restore({ 'Sitter:1': { companyName: "test" } })

const mocks = [
  {
    request: {
      query: GET_VET,
      variables: {
        id: '1'
      }
    },
    result: {
      data: {
        vet: {
          "__typename": "Vet",
          "id": "1",
          "city": null,
          "companyName": "Test",
          "notes": null,
          "phone": null,
          "state": null,
          "street": null,
          "vetName": null,
          "website": null,
          "zip": null
        }
      }
    },
  },
  {
    request: {
      query: UPDATE_VET,
      variables: {
        id: '1',
        city: '',
        companyName: 'Some name',
        notes: 'Some notes',
        phone: '',
        state: '',
        street: '',
        vetName: '',
        website: '',
        zip: '',
      }
    },
    result: {
      data: {
        updateVet: {
          "__typename": "Vet",
          "id": "1",
          "city": null,
          "companyName": "Some name",
          "notes": "Some notes",
          "phone": null,
          "state": null,
          "street": null,
          "vetName": null,
          "website": null,
          "zip": null
        }
      }
    },
  }
]

test('render VetUpdatePage', async () => {
  const { getByTestId } = render(
    <MockedProvider cache={cache} mocks={mocks}>
      <MemoryRouter initialEntries={['/vets/1']}>
        <Route path="/vets/:vetId">
          <VetUpdatePage />
        </Route>
      </MemoryRouter>
    </MockedProvider>
  )

  const nameField = getByTestId('vet-form-name-field')
  userEvent.type(nameField, 'Some name')

  const noteField = getByTestId('vet-form-notes-field')
  userEvent.type(noteField, 'Some notes')

  const updateButton = getByTestId('update-vet-button')

  await act(async () => await userEvent.click(updateButton))

  await waitFor(() => {
    const updatedCache = cache.extract()
    expect(updatedCache['Vet:1'].companyName).toBe('Some name')
    expect(updatedCache['Vet:1'].notes).toBe('Some notes')
  })

})
