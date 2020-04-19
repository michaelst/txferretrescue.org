import React from 'react'
import { render, act, waitFor } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import { BrowserRouter } from 'react-router-dom'
import { DELETE_VET, } from './'
import VetsPage, { LIST_VETS } from '../VetsPage'
import userEvent from '@testing-library/user-event'

const mocks = [
  {
    request: {
      query: LIST_VETS
    },
    result: {
      data: {
        vets: [
          {
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
        ]
      }
    },
  },
  {
    request: {
      query: DELETE_VET,
      variables: {
        id: "1",
      }
    },
    result: {
      data: {
        deleteVet: {
          "__typename": "Vet",
          "id": "1",
        }
      }
    },
  }
]

test('render VetRow', async () => {
  const { getByTestId, getByText } = render(
    <MockedProvider mocks={mocks}>
      <BrowserRouter>
        <VetsPage />
      </BrowserRouter>
    </MockedProvider>
  )

  await act(async () => {
    await waitFor(() => getByText('Some name'))

    const vetRow = getByText('Some name')
    
    const deleteButton = getByTestId('delete-vet-1')
    userEvent.click(deleteButton)

    await waitFor(() => expect(vetRow).not.toBeInTheDocument())
  })
})
