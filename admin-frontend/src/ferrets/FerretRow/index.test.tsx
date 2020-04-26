import React from 'react'
import { render, act, waitFor } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import { BrowserRouter } from 'react-router-dom'
import { DELETE_FERRET, } from './'
import FerretsPage, { LIST_FERRETS } from '../FerretsPage'
import userEvent from '@testing-library/user-event'

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
          }
        ]
      }
    },
  },
  {
    request: {
      query: DELETE_FERRET,
      variables: {
        id: "1",
      }
    },
    result: {
      data: {
        deleteFerret: {
          "__typename": "Ferret",
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
        <FerretsPage />
      </BrowserRouter>
    </MockedProvider>
  )

  await act(async () => {
    await waitFor(() => getByText('Lois'))

    const row = getByText('Lois')

    const deleteButton = getByTestId('delete-ferret-1')
    userEvent.click(deleteButton)

    await waitFor(() => expect(row).not.toBeInTheDocument())
  })
})
