import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { LIST_SITTERS, SittersPage } from './'
import { MockedProvider } from '@apollo/client/testing'

function mocks(foster: boolean) {
  return [
    {
      request: {
        query: LIST_SITTERS,
      },
      result: {
        data: {
          sitters: [
            {
              "__typename": "Sitter",
              "email": "blatney1@sbcglobal.net",
              "id": "15",
              "name": "Courtney Sanders",
              "notes": "Located in South Austin, will cover basically all the metro area.",
              "phone": null
            },
            {
              "__typename": "Sitter",
              "email": "jenny.duong011@gmail.com",
              "id": "17",
              "name": "Jenny Duong",
              "notes": "In Denton.  has private room for the ferrets, can separate same, and is experience with medically challenged ferrets",
              "phone": null
            }
          ]
        }
      },
    },
  ]
};

test('renders SittersPage', async () => {
  const { getByText, getAllByTestId } = render(
    <MockedProvider mocks={mocks(false)}>
      <SittersPage />
    </MockedProvider>
  )

  await waitFor(() => {
    const linkElement = getByText(/We do not guarantee any of these sitters/i)
    expect(linkElement).toBeInTheDocument()

    const ferretRows = getAllByTestId('SitterBox')
    expect(ferretRows.length).toBe(2)
  })
})
