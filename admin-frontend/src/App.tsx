import React from 'react'
import { Switch, Route, HashRouter } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import './App.scss'
import ApplicationsPage from 'ApplicationsPage'
import FAQPage from 'FAQPage'
import FerretsPage from 'FerretsPage'
import SittersPage from 'SittersPage'
import VetsPage from 'VetsPage'
import Navbar from 'Navbar'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Container className="mt-4">
          <Switch>
            <Route path="/applications">
              <ApplicationsPage />
            </Route>
            <Route path="/ferrets">
              <FerretsPage />
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
      </HashRouter>
    </div>
  )
}

export default App
