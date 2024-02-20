import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import logo from '../../university_logo.png';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';


const StaffLogin: React.FC = () => {
    const navigate = useNavigate();

    const signIn = () => {
        navigate('/admin/management-console/dashboard');
    };

    return (
        <Container className='staffLogin min-vh-100' fluid>
            <Row className="h-100 pt-5 justify-content-center align-items-center">
                <Col sm="10" md="8" lg="5">
                    <div className='text-center mt-3'>
                        <Image src={logo} height={120} width={150} fluid />

                    </div>

                    <h6 className='text-center'> <b> Staff Login </b> </h6>

                    <Form className="bg-white p-4 mt-3">
                      

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label> <b> Email address </b> </Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            Official email only (e.g user@bowen.edu.ng)
                            </Form.Text>
                        </Form.Group>

                        <Form.Label><b> Password </b></Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control type="password" placeholder="Password" aria-label="password"
                                aria-describedby="password-input"
                            />
                            <InputGroup.Text>
                                {<FontAwesomeIcon icon={faEye} />}

                            </InputGroup.Text>
                        </InputGroup>

                        <Button variant="primary" type="submit" className="w-100 btn" onClick={signIn}>
                            Sign In
                        </Button>
                    </Form>
                </Col>
            </Row>

            <Row className="h-100 justify-content-center align-items-center mt-3">
                <Col sm="10" md="8" lg="5" className='text-center'>
                    <a href='/forgot-password' className="d-block mt-1 text-decoration-none small">Forgot Password?</a>
                    <a href='/sign-in' className="d-block mt-1 text-decoration-none small">Back to Applicant Login</a>
                </Col>
            </Row>

        </Container>


    );
}

export default StaffLogin;