import React, { useState, useEffect } from 'react'
import Routes from './Routes'
import { ApolloProvider } from '@apollo/client'
import createApolloClient from 'helpers/createApolloClient'
import './App.scss'

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'))

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token)
    } else {
      localStorage.removeItem('token')
    }
  }, [token])

  return (
    <ApolloProvider client={createApolloClient(token)}>
      <Routes isLoggedIn={!!token} setToken={setToken} />
    </ApolloProvider>
  )
}

export default App
