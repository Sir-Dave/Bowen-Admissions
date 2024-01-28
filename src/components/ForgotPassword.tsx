import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import logo from '../university_logo.png';


const ForgotPassword: React.FC = () => {

    return (
        <Container className='forgotPassword min-vh-100' fluid>
            <Row className="h-100 pt-5 justify-content-center align-items-center">
                <Col sm="10" md="8" lg="5">
                    <div className='text-center mt-3'>
                        <Image src={logo} height={120} width={150} fluid />

                    </div>

                    <h5 className='text-center'> <b> Forgot Password </b>  </h5>

                    <Form className="bg-white p-4 mt-3">
                        <p className='text-center'>
                          <h5>  <b>Forgot your password?</b> </h5>
                            Enter your email address and we will send you instructions on how to reset your password.
                        </p>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                           
                        </Form.Group>

                       

                        <Button variant="primary" type="submit" className="w-100 btn">
                            Reset Password
                        </Button>
                    </Form>
                </Col>
            </Row>

            <Row className="h-100 justify-content-center align-items-center mt-3">
                <Col sm="10" md="8" lg="5" className='text-center'>
                    <a href="/register-account" className="d-block mt-1 text-decoration-none small">Register an Account</a>
                    <a href='/sign-in' className="d-block mt-1 text-decoration-none small">Login Page</a>
                </Col>
            </Row>

        </Container>


    );
}

export default ForgotPassword;