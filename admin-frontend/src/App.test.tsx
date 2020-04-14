import React from 'react'
import { render } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import App from './App'

test('renders app when not logged in', () => {
  const { getByText } = render(
    <MockedProvider>
      <App />
    </MockedProvider>
  )

  const linkElement = getByText(/login/i)
  expect(linkElement).toBeInTheDocument()
})

test('renders app when logged in', () => {
  localStorage.setItem('token', 'test-token')
  
  const { getByText } = render(
    <MockedProvider>
      <App />
    </MockedProvider>
  )

  const linkElement = getByText(/applications/i)
  expect(linkElement).toBeInTheDocument()
})
