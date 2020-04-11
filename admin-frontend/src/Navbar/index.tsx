import React from 'react';
import './index.scss';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer'

function App() {
  return (
    <div className="App">
      <Navbar bg="white" expand="lg">
        <Container>
          <LinkContainer exact={true} to="/">
            <Navbar.Brand>Texas Ferret Lover's Rescue</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/applications">
                <Nav.Link>Applications</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/ferrets">
                <Nav.Link>Ferrets</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/sitters">
                <Nav.Link>Sitters</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/vets">
                <Nav.Link>Vets</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/faq">
                <Nav.Link>FAQ</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
