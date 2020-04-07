import React from 'react'
import { render, waitFor, act } from '@testing-library/react'
import FerretsPage from './'
import ApolloProviderMock from '../../ApolloProviderMock'
import { HashRouter } from 'react-router-dom'

test('renders FerretsPage with foster=false', async () => {
  await act(async () => {
    const { getByText, getAllByTestId } = render(
      <ApolloProviderMock>
        <HashRouter>
          <FerretsPage foster={false} />
        </HashRouter>
      </ApolloProviderMock>
    )

    await waitFor(() => {
      const linkElement = getByText(/All ferrets have their/i)
      expect(linkElement).toBeInTheDocument()

      const ferretRows = getAllByTestId('FerretRow')
      expect(ferretRows.length).toBe(2)
    })
  })
})

test('renders FerretsPage with foster=true', async () => {
  await act(async () => {
    const { getByText, getAllByTestId } = render(
      <ApolloProviderMock>
        <HashRouter>
          <FerretsPage foster={true} />
        </HashRouter>
      </ApolloProviderMock>
    )

    await waitFor(() => {
      const linkElement = getByText(/Most of the ferrets that are surrendered/i)
      expect(linkElement).toBeInTheDocument()

      const ferretRows = getAllByTestId('FerretRow')
      expect(ferretRows.length).toBe(2)
    })
  })
})
