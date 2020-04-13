import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloLink,
  concat
} from '@apollo/client'

const uri = process.env.NODE_ENV === 'production' ? 'https://api.txferretrescue.org/graphql' : 'http://localhost:4000/graphql'

const httpLink = new HttpLink({ uri: uri })

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: localStorage.getItem('token'),
    }
  })

  return forward(operation)
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink)
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
