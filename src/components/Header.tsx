import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header: React.FC = () => {

  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Applicant Console</Navbar.Brand>
          <Nav className="mr-auto">

            <Nav.Link href="#home">Dashboard</Nav.Link>

            <NavDropdown title="Applications" id="applications-dropdown">
              <NavDropdown.Item href="#">My Applications</NavDropdown.Item>
              <NavDropdown.Item href="#">Application Status</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Payment Summary" id="payment-dropdown">
              <NavDropdown.Item href="#">Acceptance Fee</NavDropdown.Item>
              <NavDropdown.Item href="#">Application Fee</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Welcome, User" id="user-dropdown">
              <NavDropdown.Item href="#">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#">Settings</NavDropdown.Item>
              <NavDropdown.Item href="#">Logout</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;