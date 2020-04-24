import React, { useState, useEffect } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import ApplicationsPage from 'ApplicationsPage'
import TopicCreatePage from 'faq/TopicCreatePage'
import TopicUpdatePage from 'faq/TopicUpdatePage'
import QuestionCreatePage from 'faq/QuestionCreatePage'
import QuestionUpdatePage from 'faq/QuestionUpdatePage'
import FAQPage from 'faq/FAQPage'
import FerretsPage from 'FerretsPage'
import LoginPage from 'LoginPage'
import Navbar from 'Navbar'
import ResetPasswordPage from 'ResetPasswordPage'
import SitterCreatePage from 'sitters/SitterCreatePage'
import SittersPage from 'sitters/SittersPage'
import SitterUpdatePage from 'sitters/SitterUpdatePage'
import UserCreatePage from 'users/UserCreatePage'
import UsersPage from 'users/UsersPage'
import VetCreatePage from 'vets/VetCreatePage'
import VetsPage from 'vets/VetsPage'
import VetUpdatePage from 'vets/VetUpdatePage'
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
          <Container className="py-4">
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
              <Route path="/users/create">
                <UserCreatePage />
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
              <Route path="/vets/create">
                <VetCreatePage />
              </Route>
              <Route path="/vets/:vetId">
                <VetUpdatePage />
              </Route>
              <Route path="/vets">
                <VetsPage />
              </Route>
              <Route path="/faq/create">
                <TopicCreatePage />
              </Route>
              <Route path="/faq/:topicId/create">
                <QuestionCreatePage />
              </Route>
              <Route path="/faq/:topicId/:questionId">
                <QuestionUpdatePage />
              </Route>
              <Route path="/faq/:topicId">
                <TopicUpdatePage />
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
