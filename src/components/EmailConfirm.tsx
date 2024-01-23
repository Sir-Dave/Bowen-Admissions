import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import logo from '../university_logo.png';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from '@fortawesome/free-regular-svg-icons';


const EmailConfirm: React.FC = () => {

    return (
        <Container className='emailConfirm min-vh-100' fluid>
            <Row className="h-100 pt-5 justify-content-center align-items-center">
                <Col sm="10" md="8" lg="5">
                    <div className='text-center mt-3'>
                        <Image src={logo} height={120} width={150} fluid />

                    </div>

                    <h6 className='text-center'> <b> Email Confirmation</b> </h6>
                   <p className='alert alert-info confirmation-email'> A confirmation email has been sent to your mail, please check your inbox or spam folder for 
                    the confirmation email and ensure you follow the instructions given to activate your account. </p>

                    <Form className="bg-white p-4 mt-3">
                      <p><center> </center></p>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label> <b> Confirm Email Address </b> </Form.Label>
                            <Form.Control type="email" placeholder="Enter email address to send confirmation link" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100 btn">
                            Resend Confirmation Link
                        </Button>
                    </Form>
                </Col>
            </Row>

            <Row className="h-100 justify-content-center align-items-center mt-3">
                <Col sm="10" md="8" lg="5" className='alert alert-success resend-confirmation'>
                    <p>
                    Did not receive an email, simply enter your email address in the input field above and click the <b> Resend Confirmation Link </b> button.
                       <br></br> The confirmation link sent to you expires in three(3) days.
                    </p>
                </Col>
            </Row>

            <Row className="h-100 justify-content-center align-items-center mt-3">
                <Col sm="10" md="8" lg="5" className='text-center'>
                  Email is verified? <a href='#' className="d-block mt-1 text-decoration-none small">Return to Login</a>
                </Col>
            </Row>
         
        </Container>
        

        

    );
}

export default EmailConfirm;