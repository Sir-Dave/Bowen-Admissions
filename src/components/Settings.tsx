import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';


const Settings: React.FC = () => {

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

            <div className='container breadcrumb'>
                <Breadcrumb className='mt-3'>
                    <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item active>Update Password</Breadcrumb.Item>
                </Breadcrumb>

            </div>

            <Container className='settings min-vh-100' fluid>
                <h4 id='settings-header'>Settings - Update Password</h4>
                

                <Row className="h-100 justify-content-center align-items-center">
                    <Col sm="10" md="8" lg="6">

                        <Form className="bg-white p-4 mt-3">
                            <h5 className='text-center'> To update your password </h5>

                            <p className='text-center small'>
                                Enter your new password in the input field below and click the 'Update Password' button to update your password
                            </p>

                            <Form.Label>Password*</Form.Label>
                            <Row>
                                <Col>
                                    <InputGroup className="mb-3">
                                        <Form.Control type="password" placeholder="Password" aria-label="password"
                                            aria-describedby="password-input"
                                        />
                                        <InputGroup.Text id="basic-addon1">
                                            {<FontAwesomeIcon icon={faEye} />}

                                        </InputGroup.Text>
                                    </InputGroup>
                                </Col>
                                <Col>
                                    <Button variant="primary" type="submit" className="w-100 btn">
                                        Update Password
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </>




    );
}

export default Settings;