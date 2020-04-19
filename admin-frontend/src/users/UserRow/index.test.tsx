import React from 'react'
import { render, act, waitFor } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import { BrowserRouter } from 'react-router-dom'
import {
  UPDATE_USER_CAN_MANAGE_APPLICATIONS,
  UPDATE_USER_CAN_MANAGE_FERRETS,
  UPDATE_USER_CAN_MANAGE_USERS,
  UPDATE_USER_CAN_MANAGE_WEBSITE,
  DELETE_USER,
  SEND_PASSWORD_RESET
} from './'
import UsersPage, { LIST_USERS } from '../UsersPage'
import userEvent from '@testing-library/user-event'

const mocks = [
  {
    request: {
      query: LIST_USERS
    },
    result: {
      data: {
        users: [
          {
            "__typename": "User",
            "id": "1",
            "email": "test@example.com",
            "canManageApplications": false,
            "canManageUsers": false,
            "canManageFerrets": false,
            "canManageWebsite": false
          }
        ]
      }
    },
  },
  {
    request: {
      query: UPDATE_USER_CAN_MANAGE_APPLICATIONS,
      variables: {
        id: "1",
        canManageApplications: true
      }
    },
    result: {
      data: {
        updateUser: {
          "__typename": "User",
          "id": "1",
          "canManageApplications": true
        }
      }
    },
  },
  {
    request: {
      query: UPDATE_USER_CAN_MANAGE_FERRETS,
      variables: {
        id: "1",
        canManageFerrets: true
      }
    },
    result: {
      data: {
        updateUser: {
          "__typename": "User",
          "id": "1",
          "canManageFerrets": true
        }
      }
    },
  },
  {
    request: {
      query: UPDATE_USER_CAN_MANAGE_USERS,
      variables: {
        id: "1",
        canManageUsers: true
      }
    },
    result: {
      data: {
        updateUser: {
          "__typename": "User",
          "id": "1",
          "canManageUsers": true
        }
      }
    },
  },
  {
    request: {
      query: UPDATE_USER_CAN_MANAGE_WEBSITE,
      variables: {
        id: "1",
        canManageWebsite: true
      }
    },
    result: {
      data: {
        updateUser: {
          "__typename": "User",
          "id": "1",
          "canManageWebsite": true
        }
      }
    },
  },
  {
    request: {
      query: DELETE_USER,
      variables: {
        id: "1",
      }
    },
    result: {
      data: {
        deleteUser: {
          "__typename": "User",
          "id": "1",
        }
      }
    },
  },
  {
    request: {
      query: SEND_PASSWORD_RESET,
      variables: {
        id: "1",
      }
    },
    result: {
      data: {
        sendPasswordReset: {
          "__typename": "User",
          "id": "1",
        }
      }
    },
  }
]

test('render UserRow', async () => {
  const { getByTestId, getByText } = render(
    <MockedProvider mocks={mocks}>
      <BrowserRouter>
        <UsersPage />
      </BrowserRouter>
    </MockedProvider>
  )

  await act(async () => {
    await waitFor(() => getByText('test@example.com'))
    
    const applicationInput = getByTestId('application-checkbox-input')
    const usersInput = getByTestId('users-checkbox-input')
    const ferretsInput = getByTestId('ferrets-checkbox-input')
    const websiteInput = getByTestId('website-checkbox-input')

    expect(applicationInput).toHaveProperty('checked', false)
    expect(usersInput).toHaveProperty('checked', false)
    expect(ferretsInput).toHaveProperty('checked', false)
    expect(websiteInput).toHaveProperty('checked', false)

    const applicationCheckmark = getByTestId('application-checkbox')
    const usersCheckmark = getByTestId('users-checkbox')
    const ferretsCheckmark = getByTestId('ferrets-checkbox')
    const websiteCheckmark = getByTestId('website-checkbox')

    userEvent.click(applicationCheckmark)
    userEvent.click(usersCheckmark)
    userEvent.click(ferretsCheckmark)
    userEvent.click(websiteCheckmark)

    await waitFor(() => {
      expect(applicationInput).toHaveProperty('checked', true)
      expect(usersInput).toHaveProperty('checked', true)
      expect(ferretsInput).toHaveProperty('checked', true)
      expect(websiteInput).toHaveProperty('checked', true)
    })

    const resetButton = getByTestId('reset-user-1')
    expect(resetButton.textContent).toBe('reset password')
    userEvent.click(resetButton)
    expect(resetButton.textContent).toBe('reset sent')

    const userRow = getByText('test@example.com')
    
    const deleteButton = getByTestId('delete-user-1')
    userEvent.click(deleteButton)

    await waitFor(() => expect(userRow).not.toBeInTheDocument())
  })
})
