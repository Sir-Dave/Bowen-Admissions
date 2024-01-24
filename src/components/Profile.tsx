import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import Header from './Header';


const Profile: React.FC = () => {

    return (
        <>
            <Header />

            <style>
                {`
                    body {
                        background-color: #E8E9EB;
                    }
                `}
            </style>

            <Container className='settings min-vh-100' fluid>
                <Row className="h-100 pt-4 justify-content-center align-items-center">
                    <Col lg="11">
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                            <Breadcrumb.Item active>Profile</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>


                <Row className="h-100 pt-2 justify-content-center align-items-center">
                    <Col lg="11">
                        <h4 id='settings-header'>Applicant Profile</h4>
                    </Col>
                </Row>    

                <Row className="h-100 pt-1 justify-content-center align-items-center">
                    <Col lg="11">

                        <Form className="bg-white p-4 mt-3" >

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

                <Row className="h-100 pt-1 justify-content-center align-items-center">
                    <Col lg="11">

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
                                        <option value="divorced">Divorced</option>
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

                <Row className="h-100 pt-1 justify-content-center align-items-center">
                    <Col lg="11">

                        <Form className="bg-white p-4 mt-3">

                            <Row>
                                <Col><Form.Label> Maiden </Form.Label></Col>
                                <Col><Form.Label> Nationality </Form.Label></Col>
                                <Col><Form.Label> State </Form.Label></Col>
                                <Col><Form.Label> LGA </Form.Label></Col>
                            </Row>

                            <Row>
                                <Col> <Form.Control type="text" placeholder="Enter maiden name" aria-label="maiden-name" /></Col>

                                <Col>
                                    <Form.Select aria-label="nationality-select">
                                        <option>Select your nationality</option>
                                        <option value="nigeria">Nigeria</option>
                                    </Form.Select>
                                </Col>

                                <Col>
                                    <Form.Select aria-label="state-select" disabled>
                                        <option>Select your state of origin</option>
                                    </Form.Select>
                                </Col>

                                <Col>
                                    <Form.Select aria-label="lga-select" disabled>
                                        <option>Select your lga</option>
                                    </Form.Select>
                                </Col>
                            </Row>

                        </Form>
                    </Col>
                </Row>

                <Row>
                    <Col lg="11">
                        <div className="d-flex justify-content-end mt-3">
                            <Button variant="primary" type="submit" className="btn">
                                Update Profile
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>

    );
}

export default Profile;