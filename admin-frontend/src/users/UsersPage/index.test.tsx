import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import UsersPage, { LIST_USERS } from './'
import { BrowserRouter } from 'react-router-dom'

const mocks = [
  {
    request: {
      query: LIST_USERS,
    },
    result: {
      data: {
        users: [
          {
            "__typename": "User",
            "id": "1",
            "email": "test@example.com",
            "canManageApplications": true,
            "canManageUsers": true,
            "canManageFerrets": true,
            "canManageWebsite": true
          },
          {
            "__typename": "User",
            "id": "2",
            "email": "test2@example.com",
            "canManageApplications": true,
            "canManageUsers": true,
            "canManageFerrets": true,
            "canManageWebsite": true
          }
        ]
      }
    },
  }
]

test('render UsersPage', async () => {
  const { getAllByTestId } = render(
    <MockedProvider mocks={mocks}>
      <BrowserRouter>
        <UsersPage />
      </BrowserRouter>
    </MockedProvider>
  )

  await waitFor(() => {
    const userRows = getAllByTestId('UserRow')
    expect(userRows.length).toBe(2)
  })
})
