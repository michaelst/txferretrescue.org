import React from 'react'
import { render, act, waitFor } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import VetCreatePage, { CREATE_VET } from './'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache()

const mocks = [
  {
    request: {
      query: CREATE_VET,
      variables: {
        city: '',
        companyName: 'Some name',
        notes: '',
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
        createVet: {
          "__typename": "Vet",
          "id": "1",
          "city": null,
          "companyName": "Some name",
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
  }
]

test('render VetCreatePage', async () => {
  const { getByTestId } = render(
    <MockedProvider cache={cache} mocks={mocks}>
      <BrowserRouter>
        <VetCreatePage />
      </BrowserRouter>
    </MockedProvider>
  )

  const nameField = getByTestId('vet-form-name-field')
  userEvent.type(nameField, 'Some name')

  const createButton = getByTestId('create-vet-button')

  await act(async () => await userEvent.click(createButton))

  await waitFor(() => {
    const updatedCache = cache.extract()
    expect(updatedCache['Vet:1'].companyName).toBe('Some name')
  })

})
