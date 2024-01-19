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
import { faCalendar } from '@fortawesome/free-regular-svg-icons';


const Profile: React.FC = () => {

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
                    <Breadcrumb.Item active>Profile</Breadcrumb.Item>
                </Breadcrumb>

            </div>

            <Container className='settings min-vh-100' fluid>
                <h4 id='settings-header'>Applicant Profile</h4>


                <Row className="h-100 justify-content-center align-items-center">
                    <Col sm="10" md="10" lg="10">

                        <Form className="bg-white p-4 mt-3">

                            <Row>
                                <Col><Form.Label> First Name </Form.Label></Col>
                                <Col><Form.Label> Middle Name </Form.Label></Col>
                                <Col><Form.Label> Last Name </Form.Label></Col>
                            </Row>

                            <Row>
                                <Col> <Form.Control type="name" placeholder="John" aria-label="first-name" /></Col>
                                <Col> <Form.Control type="name" placeholder="Enter middle name" aria-label="middle-name" /> </Col>
                                <Col> <Form.Control type="name" placeholder="Doe" aria-label="last-name" /></Col>
                            </Row>

                            <Row className='mt-3'>
                                <Col><Form.Label> Email </Form.Label></Col>
                                <Col><Form.Label> Phone Number </Form.Label></Col>
                                <Col><Form.Label> Gender </Form.Label></Col>
                            </Row>

                            <Row>
                                <Col> <Form.Control type="email" placeholder="praise.kolawole@bowen.edu.ng" aria-label="email" disabled readOnly /></Col>
                                <Col> <Form.Control type="phone" placeholder="Enter phone no" aria-label="phone" /> </Col>
                                <Col>
                                    <Form.Select aria-label="gender-select">
                                        <option>Select your gender</option>
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>

                <Row className="h-100 justify-content-center align-items-center">
                    <Col sm="10" md="10" lg="10">

                        <Form className="bg-white p-4 mt-3">

                            <Row>
                                <Col><Form.Label> Marital Status </Form.Label></Col>
                                <Col><Form.Label> Date of Birth </Form.Label></Col>
                                <Col><Form.Label> Religion </Form.Label></Col>
                                <Col><Form.Label> Denomination </Form.Label></Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Select aria-label="status-select">
                                        <option>Choose your status</option>
                                        <option value="single">Single</option>
                                        <option value="married">Married</option>
                                        <option value="duvorced">Divorced</option>
                                    </Form.Select>
                                </Col>
                                <Col>
                                    <InputGroup className="mb-3">
                                        <Form.Control type="text" placeholder="2000-01-01" aria-label="date-of-birth" />
                                        <InputGroup.Text>
                                            {<FontAwesomeIcon icon={faCalendar} />}

                                        </InputGroup.Text>
                                    </InputGroup>
                                </Col>

                                <Col>
                                    <Form.Select aria-label="religion-select">
                                        <option>Choose your status</option>
                                        <option value="christianity">Christianity</option>
                                        <option value="islam">Islam</option>
                                        <option value="other">Others</option>
                                    </Form.Select>
                                </Col>

                                <Col> <Form.Control type="text" placeholder="Enter denomination" aria-label="denomination" /></Col>
                            </Row>

                        </Form>
                    </Col>
                </Row>

            </Container>
        </>

    );
}

export default Profile;