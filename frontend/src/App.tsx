import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './Navbar/Navbar'
import Container from 'react-bootstrap/container'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
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
            contact
          </Route>
          <Route path="/">
            home
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
