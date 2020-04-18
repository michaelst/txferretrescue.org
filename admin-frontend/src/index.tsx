import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ApolloProvider } from '@apollo/client'
import createApolloClient from 'helpers/createApolloClient'

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={createApolloClient(localStorage.getItem('token'))}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
