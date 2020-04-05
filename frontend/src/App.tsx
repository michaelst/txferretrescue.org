import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import './App.scss';
import Navbar from './Navbar'
import Container from 'react-bootstrap/Container'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'

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
              ferrets
          </Route>
            <Route path="/fosters">
              fosters
          </Route>
            <Route path="/faq">
              faq
          </Route>
            <Route path="/vets">
              vets
          </Route>
            <Route path="/sitters">
              sitters
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
