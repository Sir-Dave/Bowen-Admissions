import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import logo from '../university_logo.png';


const SignIn: React.FC = () => {

    return (
        <Container className='signIn min-vh-100' fluid>
            <Row className="h-100 justify-content-center align-items-center">
                <Col sm="10" md="8" lg="6">
                    <div className='text-center mt-3'>
                        <Image src={logo} height={120} width={150} fluid />

                    </div>

                    <h6 className='text-center'>Returning Applicant Login  </h6>

                    <Form className="bg-white p-4 mt-3">
                        <p className='text-center'>
                            Use your registered email address and password to login and view or complete existing applications.
                        </p>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" aria-label="password"
                                aria-describedby="password-input"
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100 btn">
                            Sign In
                        </Button>
                    </Form>
                </Col>
            </Row>

            <Row className="h-100 justify-content-center align-items-center mt-3">
                <Col sm="10" md="8" lg="6" className='text-center'>
                    <a href="#" className="d-block mt-1 text-decoration-none small">Register an Account</a>
                    <a href='#' className="d-block mt-1 text-decoration-none small">Forgot Password?</a>
                    <a href='#' className="d-block mt-1 text-decoration-none small">Email not verified? Resend confirmation email</a>
                </Col>
            </Row>


            <Row className="h-100 justify-content-center align-items-center mt-4">
                <Col sm="10" md="8" lg="6" className='text-center'>
                    <a href='#' className="d-block mt-1 text-decoration-none small">Staff Login</a>
                    <a href='#' className="d-block mt-1 text-decoration-none small">Referral Login</a>
                </Col>
            </Row>
        </Container>


    );
}

export default SignIn;