import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AuthContext } from '../context/AuthContext';

const Header: React.FC = () => {
  const { user, logout } = AuthContext();

  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark" expand="md">
        <Container>
          <Navbar.Brand href="/"><b>Applicant Console</b></Navbar.Brand>
          <Nav className="mr-auto">

            <Nav.Link href="/">Dashboard</Nav.Link>

            <NavDropdown title="Applications" id="applications-dropdown">
              <NavDropdown.Item href="applicant/form/application">My Applications</NavDropdown.Item>
              <NavDropdown.Item href="#">Application Status</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Payment Summary" id="payment-dropdown">
              <NavDropdown.Item href="#">Acceptance Fee</NavDropdown.Item>
              <NavDropdown.Item href="#">Application Fee</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={`Welcome, ${user?.firstName}`} id="user-dropdown">
              <NavDropdown.Item href='/profile'>Profile </NavDropdown.Item>
              <NavDropdown.Item href="/settings"> Settings </NavDropdown.Item>
              <NavDropdown.Item onClick={logout}> Logout </NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;