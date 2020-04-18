import React, { useState, useEffect } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import './App.scss'
import ApplicationsPage from 'ApplicationsPage'
import FAQPage from 'FAQPage'
import FerretsPage from 'FerretsPage'
import SittersPage from 'sitters/SittersPage'
import SitterCreatePage from 'sitters/SitterCreatePage'
import SitterUpdatePage from 'sitters/SitterUpdatePage'
import VetsPage from 'VetsPage'
import Navbar from 'Navbar'
import LoginPage from 'LoginPage'
import ResetPasswordPage from 'ResetPasswordPage'
import UsersPage from 'users/UsersPage'

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
    <div className="App h-100">
      <BrowserRouter>
        {!token && (
          <Switch>
            <Route path="/auth/reset-password">
              <ResetPasswordPage setToken={setToken} />
            </Route>
            <Route path="/">
              <LoginPage setToken={setToken} />
            </Route>
          </Switch>
        )}

        {token && <Navbar setToken={setToken} />}

        {token && (
          <Container className="mt-4">
            <Switch>
              <Route path="/auth/reset-password">
                <ResetPasswordPage setToken={setToken} />
              </Route>
              <Route path="/applications">
                <ApplicationsPage />
              </Route>
              <Route path="/ferrets">
                <FerretsPage />
              </Route>
              <Route path="/users">
                <UsersPage />
              </Route>
              <Route path="/sitters/create">
                <SitterCreatePage />
              </Route>
              <Route path="/sitters/:sitterId">
                <SitterUpdatePage />
              </Route>
              <Route path="/sitters">
                <SittersPage />
              </Route>
              <Route path="/vets">
                <VetsPage />
              </Route>
              <Route path="/faq">
                <FAQPage />
              </Route>
              <Route path="/">
                <ApplicationsPage />
              </Route>
            </Switch>
          </Container>)}

      </BrowserRouter>
    </div>
  )
}

export default App
