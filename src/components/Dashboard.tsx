import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faListAlt, faCreditCard, faBell } from '@fortawesome/free-regular-svg-icons';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const Dashboard: React.FC = () => {

  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Applicant Console</Navbar.Brand>
          <Nav className="mr-auto">

            <Nav.Link href="#home">Dashboard</Nav.Link>

            <NavDropdown title="Applications" id="applications-dropdown">
              <NavDropdown.Item href="#">My Applications</NavDropdown.Item>
              <NavDropdown.Item href="#">Application Status</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Payment Summary" id="payment-dropdown">
              <NavDropdown.Item href="#">Acceptance Fee</NavDropdown.Item>
              <NavDropdown.Item href="#">Application Fee</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Welcome, User" id="user-dropdown">
              <NavDropdown.Item href="#">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#">Settings</NavDropdown.Item>
              <NavDropdown.Item href="#">Logout</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Container>
      </Navbar>

      <Breadcrumb className='container'>
        <Breadcrumb.Item href="#">Applicant</Breadcrumb.Item>
        <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
      </Breadcrumb>

      <div className="container">
        <div className='row'>
          <h3>Welcome, DOE John</h3>
        </div>
        <div className="row">
          <div className="col-md-8">

            <div className='row alert alert-danger notice'>
              <h4><strong>Notice!!!</strong></h4>
              <p>
                This is to inform you that <strong>Law, Nursing Science, Physiotherapy, Medical Laboratory Science</strong> and <strong>Medicine and Surgery Programmes</strong> are no longer available for <strong>2023/2024</strong> Admission Year. However, other programmes are still available for admission.
              </p>
            </div>

            <div className='row alert alert-success application-instruction'>
              <h4><strong>Application Instruction</strong></h4>
              <p>
                Please complete carefully this application. All required entries are denoted by <strong>thick red left border line</strong>. At any time, you may <strong>SAVE</strong> your work and logout. Return to your application with the email and password you submitted to create an account for this application. After completion and submission of your application, you may PRINT a copy of your application for your own records.
              </p>

              <p>
                Click on the <strong>Begin New Application</strong> button to create your on-line application. If you have questions about the application process, please contact our admissions officers (<strong>Sunday</strong> <a href="#">admissions@bowen.edu.ng :</a>  <strong>+234 803 537 1251</strong>)  (<strong>Amos</strong>  <a href="#">amos.odunlade@bowen.edu.ng:</a>  <strong>+234 703 795 6030</strong>)  (<strong>Fisoye </strong> <a href="#">fisoye.kolawole@bowen.edu.ng:</a>  <strong>+234 803 492 0436</strong>)  (<strong>Chuks</strong>  <a href="#">barnabas.anie@bowen.edu.ng:</a>  <strong>+234 903 524 3408</strong>)  for assistance.

              </p>
            </div>

            <div className='row gy-2'>

              <Card className='col-6 text-white bg-primary'>
                <Card.Body>
                  <FontAwesomeIcon icon={faBuilding} />
                  <Card.Text> 0 Application(s) Done</Card.Text>
                  <hr className="hr" />
                  <Card.Text> Begin New Application</Card.Text>
                </Card.Body>
              </Card>

              <Card className='col-6 text-white bg-warning'>
                <Card.Body>
                  <FontAwesomeIcon icon={faListAlt} />
                  <Card.Text> Application Fee Summary</Card.Text>
                  <hr className="hr" />
                  <Card.Text> Print Summary</Card.Text>
                </Card.Body>
              </Card>

              <Card className='col-6 text-white bg-success'>
                <Card.Body>
                  <FontAwesomeIcon icon={faCreditCard} />
                  <Card.Text> Payment History</Card.Text>
                  <hr className="hr" />
                  <Card.Text> View Payment(s)</Card.Text>
                </Card.Body>
              </Card>

              <Card className='col-6 text-white bg-danger'>
                <Card.Body>
                  <FontAwesomeIcon icon={faBell} />
                  <Card.Text> Application Status</Card.Text>
                  <hr className="hr" />
                  <Card.Text> View Status</Card.Text>
                </Card.Body>
              </Card>

            </div>
          </div>

          <div className="offset-md-1 col-md-3">
            <Card>
              <Card.Header>Current Admission and Application</Card.Header>

              <Card.Body className='d-flex flex-column align-items-center'>
                <Button variant="primary">Current Admission</Button>

                <div className='row w-100 justify-content-between'>
                  <div className='col-6'>
                    <Card.Text>  <strong>Starts</strong> </Card.Text>
                  </div>

                  <div className='col-6 fs-6 text-end'>
                    <Card.Text className='fs-6'> Wednesday, May 3, 2023 </Card.Text>
                  </div>
                </div>


                <div className='row w-100 justify-content-between'>

                  <div className='col-6'>
                    <Card.Text> <strong>Ends</strong> </Card.Text>
                  </div>

                  <div className='col-6 text-end'>
                    <Card.Text className='fs-6'> Wednesday, January 31, 2024 </Card.Text>
                  </div>

                </div>



                <hr className="my-3" /> {/* Divider after "Ends" */}

                <Button variant="primary">Current Application</Button>

                <Card.Text><strong>No Application Currently</strong></Card.Text>

                <Button variant="outline-success">View Form History</Button>
                <hr className="hr my-3" />
              </Card.Body>
            </Card>

          </div>

        </div>
        </div>

      </>
      );
}

      export default Dashboard;