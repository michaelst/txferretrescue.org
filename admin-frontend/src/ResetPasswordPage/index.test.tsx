import React from 'react'
import { render, act, waitFor } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import ResetPasswordPage from './'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

test('reset password', async () => {
  const { getByTestId } = render(
    <MockedProvider>
      <MemoryRouter>
        <ResetPasswordPage />
      </MemoryRouter>
    </MockedProvider>
  )

  const passwordField = getByTestId('password-field')
  const repeatPasswordField = getByTestId('repeat-password-field')
  const resetButton = getByTestId('reset-button')

  await act(async () => {
    await userEvent.type(passwordField, "password")
    await waitFor(() => expect(passwordField).toHaveClass('is-invalid'))

    await userEvent.type(passwordField, "mynewpassword")
    await waitFor(() => expect(passwordField).not.toHaveClass('is-invalid'))
    await waitFor(() => expect(repeatPasswordField).toHaveClass('is-invalid'))

    await userEvent.type(repeatPasswordField, "mynewpassword")
    await waitFor(() => expect(repeatPasswordField).not.toHaveClass('is-invalid'))
  })
})