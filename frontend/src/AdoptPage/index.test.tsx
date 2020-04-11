import React from 'react'
import { render } from '@testing-library/react'
import { HashRouter } from "react-router-dom"
import { MockedProvider } from '@apollo/client/testing'
import { AdoptPage } from './'

test('renders AdoptPage', () => {
  const { getByText } = render(
    <MockedProvider>
      <HashRouter>
        <AdoptPage />
      </HashRouter>
    </MockedProvider >
  )
  const linkElement = getByText(/By selecting this box and clicking the submit button/i)
  expect(linkElement).toBeInTheDocument()
})
