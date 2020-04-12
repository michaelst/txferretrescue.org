import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import './App.scss'
import ContactPage from 'ContactPage'
import HomePage from 'HomePage'
import Navbar from 'Navbar'
import { FAQPage } from 'FAQPage'
import { AdoptPage } from 'AdoptPage'
import { FerretsPage } from 'FerretsPage'
import { SittersPage } from 'SittersPage'
import { VetsPage } from 'VetsPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Container className="mt-4">
          <Switch>
            <Route path="/apply">
              <AdoptPage />
          </Route>
            <Route path="/ferrets">
              <FerretsPage foster={false} />
          </Route>
            <Route path="/fosters">
              <FerretsPage foster={true} />
          </Route>
            <Route path="/faq">
              <FAQPage />
          </Route>
            <Route path="/vets">
              <VetsPage />
          </Route>
            <Route path="/sitters">
              <SittersPage />
          </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Container>
      </BrowserRouter>
    </div>
  )
}

export default App
