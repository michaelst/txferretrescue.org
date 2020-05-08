import React from 'react'
import { render, act, waitFor } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import App from './App'
import Routes from 'Routes'
import { LOGIN } from 'LoginPage'
import { CURRENT_USER } from 'Navbar'
import userEvent from '@testing-library/user-event'

const mocks = [
  {
    request: {
      query: LOGIN,
      variables: {
        email: 'admin',
        password: 'password'
      },
    },
    result: {
      data: {
        login: {
          "__typename": "Auth",
          "token": "test-token"
        }
      }
    },
  },
  {
    request: {
      query: CURRENT_USER
    },
    result: {
      data: {
        currentUser: {
          "__typename": "User",
          "canManageApplications": true,
          "canManageUsers": true,
          "canManageFerrets": true,
          "canManageWebsite": true
        }
      }
    },
  },
  {
    request: {
      query: LOGIN,
      variables: {
        email: 'admin',
        password: 'invalid'
      },
    },
    error: new Error("invalid")
  },
]

test('invalid login', async () => {
  const { getByTestId } = render(
    <MockedProvider mocks={mocks}>
      <Routes isLoggedIn={false} />
    </MockedProvider>
  )

  const emailField = getByTestId('email-field')
  const passwordField = getByTestId('password-field')
  const loginButton = getByTestId('login-button')

  await act(async () => {
    await userEvent.type(emailField, "admin")
    await userEvent.type(passwordField, "invalid")
    userEvent.click(loginButton)

    await waitFor(() => {
      expect(emailField).toHaveClass('is-invalid')
      expect(passwordField).toHaveClass('is-invalid')
    })
  })
})

test('login', async () => {
  const { getByTestId, getByText } = render(
    <MockedProvider mocks={mocks}>
      <Routes isLoggedIn={false} setToken={() => localStorage.setItem('token', 'test-token')} />
    </MockedProvider>
  )

  const emailField = getByTestId('email-field')
  const passwordField = getByTestId('password-field')
  const loginButton = getByTestId('login-button')

  await act(async () => {
    await userEvent.type(emailField, "admin")
    await userEvent.type(passwordField, "password")
    userEvent.click(loginButton)

    await waitFor(() => {
      expect(localStorage.getItem('token')).toBe('test-token')
    })
  })
})

test('logout', async () => {
  localStorage.setItem('token', 'test-token')

  const { getByTestId } = render(
    <MockedProvider>
      <Routes isLoggedIn={true} setToken={() => localStorage.removeItem('token')} />
    </MockedProvider>
  )

  const logoutButton = getByTestId('logout-button')

  await act(async () => {
    userEvent.click(logoutButton)

    await waitFor(() => {
      expect(localStorage.getItem('token')).toBe(null)
    })
  })
})
