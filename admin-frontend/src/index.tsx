import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const uri = process.env.NODE_ENV === 'production' ? 'https://txferretrescue.org/graphql' : 'http://localhost:4000/graphql'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: uri,
  })
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
