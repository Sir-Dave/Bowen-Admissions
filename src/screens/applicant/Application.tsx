import React from 'react';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../components/Header';
import Form from 'react-bootstrap/Form';

interface ApplicationInfo {
    firstName: string;
    lastName: string;
    formNumber: string;
    session: string;
    applicationType: string;
    applicationProgress: string;
}


const Application: React.FC = () => {
    // Retrieve these values later on from a remote source
    var hasApplication = true;

    const applicationList: ApplicationInfo[] = [
        {
            firstName: "John",
            lastName: "Doe",
            formNumber: "2023/19973",
            session: "2023/2024",
            applicationType: "UTME",
            applicationProgress: "Completed"
        },
        {
            firstName: "John",
            lastName: "Doe",
            formNumber: "2022/19973",
            session: "2022/2023",
            applicationType: "UTME",
            applicationProgress: "Completed"
        },
        {
            firstName: "John",
            lastName: "Doe",
            formNumber: "2021/19973",
            session: "2021/2022",
            applicationType: "UTME",
            applicationProgress: "Completed"
        },
        {
            firstName: "John",
            lastName: "Doe",
            formNumber: "2020/19973",
            session: "2020/2021",
            applicationType: "UTME",
            applicationProgress: "Completed"
        }
    ];


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

                <h4><strong> {hasApplication ? "Application Summary" : "Start An Application"} </strong></h4>


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

                {hasApplication ? <ApplicationInfo {...applicationList[0]} /> : <EmptyApplicationInfo />}


                <h6 className='mt-3'><strong> My Applications</strong></h6>
                <Row>
                    <Col>

                        <Form className="bg-white p-4">

                            <div className='d-flex justify-content-end'>
                                <p><strong>Total Form Record(s):</strong> {hasApplication ? applicationList.length : 0}</p>
                            </div>

                            <Row className='bg-dark text-white p-2'>
                                <Col><Form.Label> Form No </Form.Label></Col>
                                <Col><Form.Label> Session </Form.Label></Col>
                                <Col><Form.Label> Application Type </Form.Label></Col>
                                <Col><Form.Label> Application Progress </Form.Label></Col>
                                <Col><Form.Label> Action </Form.Label></Col>
                            </Row>

                            {hasApplication ? (
                                <>
                                    {applicationList.map((appInfo, index) => (
                                        <Row className='mt-2' key={index}>
                                            <Col><Form.Label>{appInfo.formNumber}</Form.Label></Col>
                                            <Col><Form.Label>{appInfo.session}</Form.Label></Col>
                                            <Col><Form.Label>{appInfo.applicationType}</Form.Label></Col>
                                            <Col><Form.Label>{appInfo.applicationProgress}</Form.Label></Col>
                                            <Col>
                                                <Button variant="secondary" type="submit" className="btn btn-dark">
                                                    Print Form Summary
                                                </Button>
                                            </Col>
                                        </Row>
                                    ))}
                                </>
                            ) : (
                                <p>No Form History Data</p>
                            )}


                        </Form>
                    </Col>
                </Row>

            </Container >

        </>
    );
}

const EmptyApplicationInfo: React.FC = () => {
    return (
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
                                name='entry-type'
                                label="UTME (100 Level) - This application is for candidates who have not attended university after graduating from Senior Secondary School."
                            />
                            <Form.Check
                                type="radio"
                                id="a_level"
                                name='entry-type'
                                label="A-LEVEL (JUPEB) - This application is for candidates who want to attend an Advanced Level class or JUPEB programme after Senior Secondary School."
                            />
                            <Form.Check
                                type="radio"
                                id="direct_entry"
                                name='entry-type'
                                label="DIRECT ENTRY - This application is for candidate who have attended any type of College, University or Advanced level programme after Senior Secondary School."
                            />
                            <Form.Check
                                type="radio"
                                id="weekend_programme"
                                name='entry-type'
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
    );
}


const ApplicationInfo: React.FC<ApplicationInfo> = (applicationInfo) => {
    return (
        <Row className='mt-3'>
            <Col>

                <Form className="bg-white p-4">
                    <p className='text-secondary text-dark'>
                        <strong>Current Application: {applicationInfo.lastName.toUpperCase()}, {applicationInfo.firstName}</strong> started an application for <strong>{applicationInfo.applicationType}</strong>. Your application status - <strong>{applicationInfo.applicationProgress}</strong> and form number - <strong>{applicationInfo.formNumber}</strong>

                    </p>

                    <div className="d-flex justify-content-start mt-3">
                        <Button variant="secondary" type="submit" className="btn btn-dark">
                            Print Current Form Summary
                        </Button>
                    </div>

                </Form>
            </Col>
        </Row>
    );
}
export default Application;