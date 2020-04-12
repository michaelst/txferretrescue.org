import React from 'react'
import { render, waitFor, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from "react-router-dom"
import { MockedProvider } from '@apollo/client/testing'
import { AdoptPage } from './'

test('renders AdoptPage', async () => {
  const { getByText, getByTestId, queryByText } = render(
    <MockedProvider>
      <BrowserRouter>
        <AdoptPage />
      </BrowserRouter>
    </MockedProvider >
  )

  expect(queryByText('Please provide name, address, and phone number of your landlord.')).toBeNull()
  expect(queryByText('When and how many? Do you still have them? If not, where are they now?')).toBeNull()
  expect(queryByText('Please give details. When? Why?')).toBeNull()

  await act(async () => {
    const ownHome = getByTestId('own-home-no')
    userEvent.click(ownHome)

    const ownedBefore = getByTestId('owned-before-yes')
    userEvent.click(ownedBefore)

    const surrendered = getByTestId('surrendered-yes')
    userEvent.click(surrendered)

    const agreeCheckbox = getByTestId('accept-terms')
    userEvent.click(agreeCheckbox)

    const submitButton = getByTestId('submit-button')

    await waitFor(() => {
      expect(submitButton).not.toHaveAttribute('disabled')
    })

    userEvent.click(submitButton)
  })

  await waitFor(() => {
    expect(queryByText('Please provide name, address, and phone number of your landlord.')).not.toBeNull()
    expect(queryByText('When and how many? Do you still have them? If not, where are they now?')).not.toBeNull()
    expect(queryByText('Please give details. When? Why?')).not.toBeNull()

    const errorMessage = getByText(/You must fill out all required fields./i)
    expect(errorMessage).toBeInTheDocument()
  })
})
