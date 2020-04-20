import React from 'react';
import './index.scss';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer'
import { gql, useQuery } from '@apollo/client'
import { CurrentUser } from './graphql/CurrentUser'

export const CURRENT_USER = gql`
query CurrentUser {
  currentUser {
    canManageApplications
    canManageUsers
    canManageFerrets
    canManageWebsite
  }
}
`

type LoginPageProps = {
  setToken: React.Dispatch<React.SetStateAction<string | null>>
}

function AppNavbar({ setToken }: LoginPageProps) {
  const { data } = useQuery<CurrentUser>(CURRENT_USER)

  return (
    <div className="Navbar">
      <Navbar bg="white" expand="lg">
        <Container>
          <LinkContainer exact={true} to="/">
            <Navbar.Brand>Texas Ferret Lover's Rescue</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {data?.currentUser.canManageApplications && (
                <LinkContainer to="/applications">
                  <Nav.Link>Applications</Nav.Link>
                </LinkContainer>
              )}

              {data?.currentUser.canManageUsers && (
                <LinkContainer to="/users">
                  <Nav.Link>Users</Nav.Link>
                </LinkContainer>
              )}

              {data?.currentUser.canManageFerrets && (
                <LinkContainer to="/ferrets">
                  <Nav.Link>Ferrets</Nav.Link>
                </LinkContainer>
              )}

              {data?.currentUser.canManageWebsite && (
                <LinkContainer to="/sitters">
                  <Nav.Link>Sitters</Nav.Link>
                </LinkContainer>
              )}

              {data?.currentUser.canManageWebsite && (
                <LinkContainer to="/vets">
                  <Nav.Link>Vets</Nav.Link>
                </LinkContainer>
              )}

              {data?.currentUser.canManageWebsite && (
                <LinkContainer to="/faq">
                  <Nav.Link>FAQ</Nav.Link>
                </LinkContainer>
              )}

              <Button
                variant="link"
                className="nav-link p-0 ml-2"
                onClick={() => setToken(null)}
                data-testid='logout-button'
              >
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default AppNavbar;
