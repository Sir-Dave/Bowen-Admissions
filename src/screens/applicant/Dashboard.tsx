import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faListAlt, faCreditCard, faBell } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Header from '../../components/Header';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { api } from '../../api/ApiRequest';
import { UserProfile } from '../../dtos/user/UserDto';

const BOWEN_URL = "https://bowenstudent.bowen.edu.ng/v2/welcome/?email=";


const Dashboard: React.FC = () => {
  const { token, user, applicationDetail, getUserProfile, getUserCurrentApplication, hasApplication } = AuthContext();
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    //TODO: Bad practice, refactor this later, even though it is a temporary fix
    api.defaults.headers.common["Authorization"] = "Bearer " + token;
    getUserProfile();
    getUserCurrentApplication();
    setLoading(false);

  }, []);

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
        {loading ? (
          <p>Loading...</p>
        ) : (

          <div>
            <Row className='mt-3'>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Applicant</Breadcrumb.Item>
                <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
              </Breadcrumb>


            </Row>

            <Row>
              <h3>Welcome, {user?.surname.toUpperCase()} {user?.firstName}</h3>

            </Row>

            <Row>
              <Col md="8">
                <Card className='alert alert-danger notice'>
                  <Card.Body>
                    <h4><strong>Notice!!!</strong></h4>
                    <p>
                      This is to inform you that <strong>Law, Nursing Science, Physiotherapy, Medical Laboratory Science</strong> and <strong>Medicine and Surgery Programmes</strong> are no longer available for <strong>2023/2024</strong> Admission Year. However, other programmes are still available for admission.
                    </p>

                  </Card.Body>
                </Card>


                <Card className='alert alert-success application-instruction'>
                  <Card.Body>
                    <h4><strong>Application Instruction</strong></h4>
                    <p>
                      Please complete carefully this application. All required entries are denoted by <strong>thick red left border line</strong>. At any time, you may <strong>SAVE</strong> your work and logout. Return to your application with the email and password you submitted to create an account for this application. After completion and submission of your application, you may PRINT a copy of your application for your own records.
                    </p>

                    <p>
                      Click on the <strong>Begin New Application</strong> button to create your on-line application. If you have questions about the application process, please contact our admissions officers (<strong>Sunday</strong> <a href="#">admissions@bowen.edu.ng :</a>  <strong>+234 803 537 1251</strong>)  (<strong>Amos</strong>  <a href="#">amos.odunlade@bowen.edu.ng:</a>  <strong>+234 703 795 6030</strong>)  (<strong>Fisoye </strong> <a href="#">fisoye.kolawole@bowen.edu.ng:</a>  <strong>+234 803 492 0436</strong>)  (<strong>Chuks</strong>  <a href="#">barnabas.anie@bowen.edu.ng:</a>  <strong>+234 903 524 3408</strong>)  for assistance.

                    </p>

                  </Card.Body>

                </Card>


                <Row>
                  <Col>
                    <Card className='text-white bg-primary ml-3'>
                      <Card.Body>
                        <FontAwesomeIcon icon={faBuilding} />
                        <Card.Text> 0 Application(s) Done</Card.Text>
                        <hr className="hr" />
                        <Card.Text> Begin New Application</Card.Text>
                      </Card.Body>
                    </Card>

                  </Col>

                  <Col>
                    <Card className='text-white bg-warning'>
                      <Card.Body>
                        <FontAwesomeIcon icon={faListAlt} />
                        <Card.Text> Application Fee Summary</Card.Text>
                        <hr className="hr" />
                        <Card.Text> Print Summary</Card.Text>
                      </Card.Body>
                    </Card>

                  </Col>

                </Row>

                <Row className='mt-3'>
                  <Col>
                    <Card className='text-white bg-success'>
                      <Card.Body>
                        <FontAwesomeIcon icon={faCreditCard} />
                        <Card.Text> Payment History</Card.Text>
                        <hr className="hr" />
                        <Card.Text> View Payment(s)</Card.Text>
                      </Card.Body>
                    </Card>

                  </Col>

                  <Col>
                    <Card className='text-white bg-danger'>
                      <Card.Body>
                        <FontAwesomeIcon icon={faBell} />
                        <Card.Text> Application Status</Card.Text>
                        <hr className="hr" />
                        <Card.Text> View Status</Card.Text>
                      </Card.Body>
                    </Card>

                  </Col>
                </Row>

              </Col>

              <Col md="3" offset="1">
                {hasApplication() ? <CurrentAdmissionCard user={user}/> : <EmptyAdmissionCard />}
              </Col>

            </Row >
          </div>
        )}
      </Container >

    </>
  );
}

const EmptyAdmissionCard: React.FC = () => {
  return (
    <Card>
      <Card.Header>Current Admission and Application</Card.Header>

      <Card.Body className='d-flex flex-column align-items-center'>
    

        <Row className='w-100 mt-3'>
          <div className="d-flex justify-content-between align-items-center">
            <p className='text-dates'> <strong>Starts</strong>  </p>
            <p className='text-dates'> Wednesday, May 3, 2023 </p>
          </div>

        </Row>


        <Row className='w-100'>
          <div className="d-flex justify-content-between align-items-center">
            <p className='text-dates'> <strong>Ends</strong>  </p>
            <p className='text-dates'> Wednesday, January 31, 2024</p>
          </div>

        </Row>

        <Button variant="primary" className='btn w-100'>Current Application</Button>

        <Card.Text className='mt-3'><strong>No Application Currently</strong></Card.Text>

        <Button variant="outline-success" className='btn w-100'>View Form History</Button>
      </Card.Body>
    </Card>

  );
}

const CurrentAdmissionCard: React.FC<{user: UserProfile | null}> = ({user}) => {
  const navigate = useNavigate();

  const viewFormSummary = () => {
    navigate('/applicant/form/application');
  };
  return (
    <Card>
      <Card.Header>Current Admission and Application</Card.Header>

      <Card.Body className='d-flex flex-column align-items-center'>
      <p className='current'>Current Admission</p>

        <Row className='w-100 mt-3'>
          <div className="d-flex justify-content-between align-items-center">
            <p className='text-dates'> <strong>Starts</strong>  </p>
            <p className='text-dates'> Wednesday, May 3, 2023 </p>
          </div>

        </Row>


        <Row className='w-100'>
          <div className="d-flex justify-content-between align-items-center">
            <p className='text-dates'> <strong>Ends</strong>  </p>
            <p className='text-dates'> Wednesday, January 31, 2024</p>
          </div>

        </Row><br></br>

        <p className='current'>Current Application</p>

        <Card.Text className='mt-3'>Application Form Submitted</Card.Text>

        <Button variant="outline-success" className='btn w-100' onClick={viewFormSummary}>Print Form Summary </Button>

        <Button variant="outline-info" className='mt-4 btn w-100'>Print Letter of Admission</Button>
              <Button variant="outline-info" className='mt-2 btn w-100' href="applicant/form/acceptanceFee">Pay Acceptance Fee</Button>
              <Button variant="outline-success" className='mt-2 btn w-100'>Print Affidavit</Button>
              <Button variant="outline-success" className='mt-2 btn w-100' href={`${BOWEN_URL + user?.email}`}>Pay School Fees</Button>
              <Button variant="outline-success" className='mt-2 btn w-100' href={`${BOWEN_URL + user?.email}`}>Upload Documents</Button>
              <Button variant="outline-success" className='mt-2 btn w-100' href="applicant/form/idCard">Fill ID Card Information</Button>
              <Button variant="outline-info" className='mt-2 btn w-100'>Download Pledge Form</Button>
      </Card.Body>
    </Card>

  );
}
export default Dashboard;