import React from 'react'
import { render, act, waitFor } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import SittersPage, { LIST_SITTERS, DELETE_SITTER } from './'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'

const mocks = [
  {
    request: {
      query: LIST_SITTERS,
    },
    result: {
      data: {
        sitters: [
          {
            "__typename": "Sitter",
            "id": "1",
            "email": null,
            "name": "Some name",
            "phone": null
          },
          {
            "__typename": "Sitter",
            "id": "2",
            "email": null,
            "name": "Another sitter",
            "phone": null
          }
        ]
      }
    },
  },
  {
    request: {
      query: DELETE_SITTER,
      variables: {
        id: "1"
      }
    },
    result: {
      data: {
        deleteSitter: {
          "__typename": "Sitter",
          "id": "1",
        }
      }
    },
  }
]

test('render SittersPage', async () => {
  const { getByTestId } = render(
    <MockedProvider mocks={mocks}>
      <BrowserRouter>
        <SittersPage />
      </BrowserRouter>
    </MockedProvider>
  )

  await act(async () => {
    await waitFor(() => {
      const otherDeleteLink = getByTestId('delete-sitter-2')
      expect(otherDeleteLink).toBeInTheDocument()
    })

    const deleteLink = getByTestId('delete-sitter-1')

    userEvent.click(deleteLink)

    await waitFor(() => expect(deleteLink).not.toBeInTheDocument())
  })
})
