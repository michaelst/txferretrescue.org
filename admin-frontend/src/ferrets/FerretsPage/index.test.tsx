import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import FerretsPage, { LIST_FERRETS } from './'
import { BrowserRouter } from 'react-router-dom'

const mocks = [
  {
    request: {
      query: LIST_FERRETS
    },
    result: {
      data: {
        ferrets: [
          {
            "__typename": "Ferret",
            "available": true,
            "fee": "125.00",
            "foster": false,
            "gender": "FEMALE",
            "id": "1",
            "name": "Lois"
          },
          {
            "__typename": "Ferret",
            "available": false,
            "fee": "100.00",
            "foster": true,
            "gender": "FEMALE",
            "id": "2",
            "name": "Bunny"
          },
        ]
      }
    },
  }
]

test('render FerretsPage', async () => {
  const { getAllByTestId } = render(
    <MockedProvider mocks={mocks}>
      <BrowserRouter>
        <FerretsPage />
      </BrowserRouter>
    </MockedProvider>
  )

  await waitFor(() => {
    const rows = getAllByTestId('FerretRow')
    expect(rows.length).toBe(2)
  })
})
