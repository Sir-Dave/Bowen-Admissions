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


const AcceptanceFee: React.FC = () => {
    const navigate = useNavigate();

    const acceptanceFee = () => {
        navigate('/');
    };

    return (
        <Container className='acceptanceFee min-vh-100' fluid>
           <Row className="h-100 pt-5 justify-content-center align-items-center">
                <Col sm="10" md="8" lg="5">
                    <div className='text-center mt-3'>
                        <Image src={logo} height={80} width={90} fluid />

                    </div>
                </Col>
            </Row>    
           
            <Row className="h-100 pt-5 justify-content-center align-items-center">
                <Col sm="10" md="8" lg="5">


                    <Form className="bg-white p-4 mt-3">
                        <p className='text-center'>
                          <h4>  Pay Acceptance Fee </h4>
                        </p>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            
                        </Form.Group>
                    
                        <Row>
                                <Col><Form.Label> Session </Form.Label></Col>
                                <Col><Form.Label> Type </Form.Label></Col>
                        </Row>

                        <Row>
                                <Col>
                                    <Form.Select aria-label="status-select">
                                        <option>-Select Session-</option>
                                        <option>2021/2022</option>
                                        <option>2022/2023</option>
                                        <option>2023/2024</option>
                                        <option>2024/2025</option>
                                        <option>2025/2026</option>
                                        <option>2026/2027</option>
                                        <option>2027/2028</option>
                                        <option>2028/2029</option>
                                        <option>2029/2030</option>
                                       
                                    </Form.Select>
                                </Col>

                                <Col>
                                    <Form.Select aria-label="status-select">
                                        <option>-Select Type-</option>
                                        <option>UTME | Direct Entry</option>
                                        <option>Transfer</option>
                                       
                                    </Form.Select>
                                </Col>
                            </Row>
                        
                          
                     
                        <br></br>
                        <Button variant="primary" type="submit" className="w-100 btn">
                            Proceed
                        </Button>
                    </Form>
                </Col>
            </Row>

        </Container>

    );
    }

export default AcceptanceFee;