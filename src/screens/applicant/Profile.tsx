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
import Header from '../../components/Header';
import { AuthContext } from '../../context/AuthContext';


const Profile: React.FC = () => {
    const { user } = AuthContext();

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

            <Container className='profile min-vh-100'>
                <Row className="mt-3">
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                        <Breadcrumb.Item active>Profile</Breadcrumb.Item>
                    </Breadcrumb>
                </Row>

                <h4 id='settings-header'>Applicant Profile</h4>

                <Row>
                    <Col>

                        <Form className="bg-white p-4 mt-3" >

                            <Row>
                                <Col><Form.Label> First Name </Form.Label></Col>
                                <Col><Form.Label> Middle Name </Form.Label></Col>
                                <Col><Form.Label> Last Name </Form.Label></Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Control type="name" placeholder="John" aria-label="first-name" value={user ? user.firstName : ''} />
                                </Col>
                                <Col>
                                    <Form.Control type="name" placeholder="Enter middle name" aria-label="middle-name" value={user?.middleName ?? ''} />
                                </Col>
                                <Col>
                                    <Form.Control type="name" placeholder="Doe" aria-label="last-name" value={user ? user.surname : ''}/>
                                </Col>
                            </Row>

                            <Row className='mt-3'>
                                <Col><Form.Label> Email </Form.Label></Col>
                                <Col><Form.Label> Phone Number </Form.Label></Col>
                                <Col><Form.Label> Gender </Form.Label></Col>
                            </Row>

                            <Row>
                                <Col> <Form.Control type="email" aria-label="email" value={user ? user.email : ''} disabled readOnly /></Col>
                                <Col> <Form.Control type="phone" placeholder="Enter phone no" aria-label="phone" value={user?.phoneNo ?? ''}/> </Col>
                                <Col>
                                    <Form.Select aria-label="gender-select" value={user?.gender ?? ''}>
                                        <option value="">Select your gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>

                <Row>
                    <Col>

                        <Form className="bg-white p-4 mt-3">

                            <Row>
                                <Col><Form.Label> Marital Status </Form.Label></Col>
                                <Col><Form.Label> Date of Birth </Form.Label></Col>
                                <Col><Form.Label> Religion </Form.Label></Col>
                                <Col><Form.Label> Denomination </Form.Label></Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Select aria-label="status-select" value={user?.maritalStatus ?? ''}>
                                        <option>Choose your status</option>
                                        <option value="Single">Single</option>
                                        <option value="Married">Married</option>
                                        <option value="Divorced">Divorced</option>
                                    </Form.Select>
                                </Col>
                                <Col>
                                    <InputGroup className="mb-3">
                                        <Form.Control type="text" placeholder="2000-01-01" aria-label="date-of-birth" value={user?.dateOfBirth ?? ''}/>
                                        <InputGroup.Text>
                                            {<FontAwesomeIcon icon={faCalendar} />}

                                        </InputGroup.Text>
                                    </InputGroup>
                                </Col>

                                <Col>
                                    <Form.Select aria-label="religion-select" value={user?.religion ?? ''}>
                                        <option>Choose your status</option>
                                        <option value="Christianity">Christianity</option>
                                        <option value="Islam">Islam</option>
                                        <option value="Other">Others</option>
                                    </Form.Select>
                                </Col>

                                <Col> 
                                <Form.Control type="text" placeholder="Enter denomination" aria-label="denomination" value={user?.denomination ?? ''}/>
                                </Col>
                            </Row>

                        </Form>
                    </Col>
                </Row>

                <Row>
                    <Col>

                        <Form className="bg-white p-4 mt-3">

                            <Row>
                                <Col><Form.Label> Maiden </Form.Label></Col>
                                <Col><Form.Label> Nationality </Form.Label></Col>
                                <Col><Form.Label> State </Form.Label></Col>
                                <Col><Form.Label> LGA </Form.Label></Col>
                            </Row>

                            <Row>
                                <Col> 
                                <Form.Control type="text" placeholder="Enter maiden name" aria-label="maiden-name" value={user?.maidenName ?? ''}/>
                                </Col>

                                <Col>
                                    <Form.Select aria-label="nationality-select" value={user?.nationality ?? ''}>
                                        <option value="">Select your nationality</option>
                                        <option value="Nigeria">Nigeria</option>
                                    </Form.Select>
                                </Col>

                                <Col>
                                    <Form.Select aria-label="state-select" disabled value={user?.stateOfOrigin ?? ''}>
                                        <option>Select your state of origin</option>
                                    </Form.Select>
                                </Col>

                                <Col>
                                    <Form.Select aria-label="lga-select" disabled value={user?.localGovernment ?? ''}>
                                        <option>Select your lga</option>
                                    </Form.Select>
                                </Col>
                            </Row>

                        </Form>
                    </Col>
                </Row>

                <Row>
                    <div className="d-flex justify-content-end mt-3">
                        <Button variant="primary" type="submit" className="btn">
                            Update Profile
                        </Button>
                    </div>

                </Row>
            </Container>
        </>

    );
}

export default Profile;