import React from 'react';
import './Navbar.scss';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer'

function App() {
  return (
    <div className="App">
      <Navbar bg="white" expand="lg">
        <Container>
          <Navbar.Brand href="/">Texas Ferret Lover's Rescue</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/adopt">
                <Nav.Link>Adopt</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/ferrets">
                <Nav.Link>Ferrets</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/fosters">
                <Nav.Link>Fosters</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/faq">
                <Nav.Link>FAQ</Nav.Link>
              </LinkContainer>
              <NavDropdown title="Resources" id="basic-nav-dropdown">
                <LinkContainer to="/vets">
                  <NavDropdown.Item>Vets</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/sitters">
                  <NavDropdown.Item>Sitters</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer to="/contact">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
