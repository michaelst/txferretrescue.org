import React from 'react'
import { render, act, waitFor, fireEvent } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import ResetPasswordPage from './'
import { MemoryRouter } from 'react-router-dom'

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
    fireEvent.change(passwordField, { target: { value: 'password' } })
    await waitFor(() => expect(passwordField).toHaveClass('is-invalid'))

    fireEvent.change(passwordField, { target: { value: 'mynewpassword' } })
    await waitFor(() => expect(passwordField).not.toHaveClass('is-invalid'))
    await waitFor(() => expect(repeatPasswordField).toHaveClass('is-invalid'))

    fireEvent.change(repeatPasswordField, { target: { value: 'mynewpassword' } })
    await waitFor(() => expect(repeatPasswordField).not.toHaveClass('is-invalid'))
  })
})