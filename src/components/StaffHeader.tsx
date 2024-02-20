import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const StaffHeader: React.FC = () => {

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="md">
        <Container>
          <Navbar.Brand href="/"><b>UG Admissions</b></Navbar.Brand>
          <Nav className="mr-auto">

            <Nav.Link href="/admin/management-console/dashboard">Dashboard</Nav.Link>

            <NavDropdown data-bs-theme="light" title="Payment" id="payment-dropdown">
              <NavDropdown.Item href="#">Setting</NavDropdown.Item>
              <NavDropdown.Item href="#">Statistics</NavDropdown.Item>
              <NavDropdown.Item href="#">Verify</NavDropdown.Item>
              <NavDropdown.Item href="#">Store School Fee</NavDropdown.Item>
              <NavDropdown.Item href="#">Set School Fee</NavDropdown.Item>
              <NavDropdown.Item href="#">View Applicant School Fee</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown data-bs-theme="light" title="Application" id="application-dropdown">
              <NavDropdown.Item href="#">Create</NavDropdown.Item>
              <NavDropdown.Item href="#">Statistics</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown data-bs-theme="light" title="Applicant" id="applicant-dropdown">
              <NavDropdown.Item href="#">Applicant</NavDropdown.Item>
              <NavDropdown.Item href="#">Progress</NavDropdown.Item>
              <NavDropdown.Item href="#">Registered Applicant</NavDropdown.Item>
              <NavDropdown.Item href="#">Reset Password</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown data-bs-theme="light" title="Administration" id="administration-dropdown">
              <NavDropdown.Item href='#'>Form </NavDropdown.Item>
              <NavDropdown.Item href="#"> Programme </NavDropdown.Item>
              <NavDropdown.Item href="#"> Programme-cutoff </NavDropdown.Item>
              <NavDropdown.Item href='#'>Referral </NavDropdown.Item>
              <NavDropdown.Item href="#"> Region </NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default StaffHeader;