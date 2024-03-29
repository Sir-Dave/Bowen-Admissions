import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import Header from '../../components/Header';


const IdCard: React.FC = () => {

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

            <Container className='mt-5 bg-gray'>
               
                
                <Card.Header 
                    className= "bg-grey p-4 d-flex justify-content-center" > <h5 id='settings-header'>ID Card Form</h5>
                </Card.Header>    
                    

                <Row>
                    <Col>

                        <Form className="bg-white p-4" >

                            <Row>
                                <Col><Form.Label> Mother's Phone Number </Form.Label></Col>
                                <Col><Form.Label> Father's Phone Number </Form.Label></Col>
                               
                            </Row>

                            <Row>
                                <Col> <Form.Control type="name"  /></Col>
                                <Col> <Form.Control type="name"  /> </Col>
                                
                            </Row>
                            
                            <Row className='mt-3'>
                                <Col><Form.Label> Emergency Name </Form.Label></Col>
                                <Col><Form.Label> Emergency Phone Number </Form.Label></Col>
                               
                            </Row>

                            <Row>
                                <Col> <Form.Control type="name"  /></Col>
                                <Col> <Form.Control type="name"  /> </Col>
                                
                            </Row>

                            <Row className='mt-3'> 
                                <Col><Form.Label> Emergency Address </Form.Label></Col>
                                <Col><Form.Label> Emergency Email </Form.Label></Col>
                               
                            </Row>

                            <Row>
                                <Col> <Form.Control type="name"  /></Col>
                                <Col> <Form.Control type="name"  /> </Col>
                                
                            </Row>

                            <Row className='mt-3'> 
                                <Col><Form.Label> Emergency Relationship </Form.Label></Col>
                                <Col><Form.Label>  </Form.Label></Col>
                               
                            </Row>

                            <Row>
                                <Col> <Form.Control type="name"  /></Col>
                                <Col> 
                                    <div >
                                                <Button variant="primary" type="submit" className="w-100 btn" >
                                                    Save
                                                </Button>
                                    </div> 
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

export default IdCard;