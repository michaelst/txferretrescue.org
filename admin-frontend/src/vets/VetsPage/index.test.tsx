import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import VetsPage, { LIST_VETS } from './'
import { BrowserRouter } from 'react-router-dom'

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
          },
          {
            "__typename": "Vet",
            "id": "2",
            "city": null,
            "companyName": "Another name",
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
  }
]

test('render VetsPage', async () => {
  const { getAllByTestId } = render(
    <MockedProvider mocks={mocks}>
      <BrowserRouter>
        <VetsPage />
      </BrowserRouter>
    </MockedProvider>
  )

  await waitFor(() => {
    const userRows = getAllByTestId('VetRow')
    expect(userRows.length).toBe(2)
  })
})
