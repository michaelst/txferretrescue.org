import React from 'react'
import { render } from '@testing-library/react'
import FerretsPage from './'
import ApolloProviderMock from '../../ApolloProviderMock'
import { HashRouter } from 'react-router-dom'
import { wait } from '@testing-library/react'



test('renders FerretsPage', () => {
  const { getByText } = render(
    <ApolloProviderMock>
      <HashRouter>
        <FerretsPage foster={false} />
      </HashRouter>
    </ApolloProviderMock>
  )

  wait(() => {
    const linkElement = getByText(/All ferrets have their/i)
    expect(linkElement).toBeInTheDocument()
  })
})
