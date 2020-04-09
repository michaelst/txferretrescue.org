import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import './App.scss';
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import Navbar from './Navbar'
import { FAQPage } from './pages/FAQPage'
import { FerretsPage } from './pages/FerretsPage'
import { SittersPage } from './pages/resources/SittersPage'
import { VetsPage } from './pages/resources/VetsPage'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Container className="mt-4">
          <Switch>
            <Route path="/adopt">
              adopt
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
      </HashRouter>
    </div>
  );
}

export default App;
