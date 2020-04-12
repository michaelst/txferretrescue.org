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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
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
