import React from 'react';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header';
import Form from 'react-bootstrap/Form';

const Application: React.FC = () => {

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

            <Container>
                <Row className='mt-3'>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Applicant</Breadcrumb.Item>
                        <Breadcrumb.Item active>Form</Breadcrumb.Item>
                        <Breadcrumb.Item active>My Applications</Breadcrumb.Item>
                    </Breadcrumb>
                </Row>

                <h4><strong> Start An Application</strong></h4>

                <h6 className='mt-3'><strong> Current Application </strong></h6>
                <Row>
                    <Col>

                        <Form className="bg-white p-4">

                            <Row className='bg-dark text-white p-2'>
                                <Col md={3}><Form.Label> Session </Form.Label></Col>
                                <Col><Form.Label> Starts </Form.Label></Col>
                                <Col><Form.Label> Ends </Form.Label></Col>
                            </Row>

                            <Row className='mt-2'>
                                <Col md={3}><Form.Label> <strong>2023/2024</strong> </Form.Label> </Col>
                                <Col><Form.Label> <strong>Wednesday, May 3, 2023</strong> </Form.Label></Col>
                                <Col><Form.Label> <strong>Wednesday, January 31, 2024 </strong></Form.Label></Col>
                            </Row>

                        </Form>
                    </Col>
                </Row>

                <Row className='mt-3'>
                    <Col>

                        <Form className="bg-white p-4">
                            <p className='text-primary'>
                                Our records show you do not currently have an application in progress. Select an <strong>Application Type</strong> and click the <strong>Begin Application</strong> button to create your application form.

                            </p>
                            <h6><strong>Application Type:</strong></h6>

                            <Row>
                                <Col>
                                    <Form.Check
                                        type="radio"
                                        id="utme"
                                        label="UTME (100 Level) - This application is for candidates who have not attended university after graduating from Senior Secondary School."
                                    />
                                    <Form.Check
                                        type="radio"
                                        id="a_level"
                                        label="A-LEVEL (JUPEB) - This application is for candidates who want to attend an Advanced Level class or JUPEB programme after Senior Secondary School."
                                    />
                                    <Form.Check
                                        type="radio"
                                        id="direct_entry"
                                        label="DIRECT ENTRY - This application is for candidate who have attended any type of College, University or Advanced level programme after Senior Secondary School."
                                    />
                                    <Form.Check
                                        type="radio"
                                        id="weekend_programme"
                                        label="WEEKEND PROGRAMME - This application is for candidates who have attended College or University and must have NYSC discharge certificate or an exemption letter. Please note that for a 4 year or 5 year course you may be admitted to 200 level or 300 level respectively."
                                    />
                                </Col>

                            </Row>

                            <div className="d-flex justify-content-start mt-3">
                                <Button variant="primary" type="submit" className="btn">
                                    Begin Application
                                </Button>
                            </div>

                        </Form>
                    </Col>
                </Row>

                <h6 className='mt-3'><strong> My Applications</strong></h6>
                <Row>
                    <Col>

                        <Form className="bg-white p-4">

                            <div className='d-flex justify-content-end'>
                                <p><strong>Total Form Record(s):</strong> 0</p>
                            </div>

                            <Row className='bg-dark text-white p-2'>
                                <Col><Form.Label> Form No </Form.Label></Col>
                                <Col><Form.Label> Session </Form.Label></Col>
                                <Col><Form.Label> Application Type </Form.Label></Col>
                                <Col><Form.Label> Application Progress </Form.Label></Col>
                                <Col><Form.Label> Action </Form.Label></Col>
                            </Row>

                            <Row className='mt-2'>
                                <p>No Form History Data</p>
                            </Row>

                        </Form>
                    </Col>
                </Row>

            </Container >

        </>
    );
}

export default Application;