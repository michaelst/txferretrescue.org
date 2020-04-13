import React from 'react'
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

function App() {
  const [token, setToken] = React.useState(localStorage.getItem('token'))

  React.useEffect(() => {
    if (token) {
      localStorage.setItem('token', token)
    } else {
      localStorage.removeItem('token')
    }
  }, [token])

  if (!token) return <LoginPage setToken={setToken} />

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar setToken={setToken} />
        <Container className="mt-4">
          <Switch>
            <Route path="/applications">
              <ApplicationsPage />
            </Route>
            <Route path="/ferrets">
              <FerretsPage />
            </Route>
            <Route path="/sitters/:sitterId">
              <SitterUpdatePage />
            </Route>
            <Route path="/sitters/create">
              <SitterCreatePage />
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
        </Container>
      </BrowserRouter>
    </div>
  )
}

export default App
