import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import logo from '../university_logo.png';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import { faEye } from '@fortawesome/free-regular-svg-icons';

const RegisterAccount: React.FC = () => {

  return (
    <>

      <style>
        {`
                    body {
                        background-color: #E8E9EB;
                    }
                `}
      </style>

      <Container>

        <Row className='mt-3'>
          <Col md="6" lg="6" >

            <Row>
              <div className='text-center mt-3'>
                <Image src={logo} height={60} width={75} fluid />

              </div>
              <br></br>
              <h6 className='text-center'>Fresh Applicant - Create an Account </h6><br></br>
              <p className='alert alert-success confirmation-email'> If you have not used the
                Bowen University's Undergraduate online application system before now, you need
                to create an account by filling the form below. </p>
              <p className='alert alert-warning confirmation-email'><b> Note </b> <br></br>
                On starting an application, you will receive an email from us. If you did not
                receive this email or have any inquiries about the application form, please
                contact any of our admission's staff (Sunday  admissions@bowen.edu.ng :
                +234 803 537 1251)  (Amos  amos.odunlade@bowen.edu.ng :  +234 703 795 6030)
                (Fisoye  fisoye.kolawole@bowen.edu.ng :  +234 803 492 0436)
                (Chuks  barnabas.anie@bowen.edu.ng :  +234 903 524 3408)  for support and
                assistance. </p>

            </Row>

            <Row>
              <Form className="bg-white p-4 mt-3" >

                <Row>
                  <Col><Form.Label> First Name* </Form.Label></Col>
                  <Col><Form.Label> Last Name* </Form.Label></Col>
                </Row>

                <Row>
                  <Col> <Form.Control type="name" placeholder="First name" aria-label="first-name" /></Col>
                  <Col> <Form.Control type="name" placeholder="Last name" aria-label="last-name" /></Col>
                </Row>

                <Row className='mt-3'>
                  <Col><Form.Label> Country Code* </Form.Label></Col>
                  <Col><Form.Label> Phone Number* </Form.Label></Col>
                </Row>

                <Row>
                  <Col> <Form.Control type="email" placeholder="Code" aria-label="code" /></Col>
                  <Col> <Form.Control type="phone" placeholder="Phone No." aria-label="phone" /> </Col>
                </Row>

                <Row className='mt-3'>
                  <Col><Form.Label> Email Address* </Form.Label></Col>
                  <Col><Form.Label> Password* </Form.Label></Col>
                </Row>

                <Row>
                  <Col> <Form.Control type="email" placeholder="Email" aria-label="email" /></Col>
                  <Col> <InputGroup className="mb-3">
                    <Form.Control type="password" placeholder="Password" aria-label="password"
                      aria-describedby="password-input"
                    />
                    <InputGroup.Text>
                      {<FontAwesomeIcon icon={faEye} />}

                    </InputGroup.Text>
                  </InputGroup> </Col>
                </Row>
                <Button variant="primary" type="submit" className="w-100 btn" onClick={RegisterAccount}>
                  Register
                </Button>
              </Form>


            </Row>


            <Row className="h-10 justify-content-center align-items-center mt-3">
              <Col sm="10" md="8" lg="8" className='text-center'>
                <a href='/sign-in' className="d-block mt-1 text-decoration-none small">Login Page</a>
                <a href='/forgot-password' className="d-block mt-1 text-decoration-none small">Forgot Password? Click to Change your Password</a>
              </Col>
            </Row>


          </Col>



          <Col md="4">
            <br></br><br></br>
            <h5 className='text-left'>
              Bowen University offers the following Undergraduate programmes for UTME, Direct Entry and A-Levels in the following Colleges
            </h5>

            <Card>
              <Card.Header>Agriculture, Engineering and Science</Card.Header>

              <Card.Body className='d-flex flex-column align-items-centre'>

                <Row className='w-100'>
                  <div>
                    <ul>
                      <li>Microbiology</li>
                      <li>Physics</li>
                      <li>Pure and Applied Biology</li>
                      <li>Biochemistry</li>
                      <li>Food Science & Technology</li>
                      <li>Industrial Chemistry</li>
                      <li>Electrical & Electronics Engineering</li>
                      <li>Mathematics</li>
                      <li>Mechatronics Engineering</li>
                      <li>Statistics</li>
                    </ul>
                  </div>

                </Row>

                <Card.Header>Management and Social Sciences</Card.Header>
                <Row className='w-100'>
                  <div><br></br>
                    <ul>
                      <li>Accounting</li>
                      <li>Economics</li>
                      <li>Business Administration</li>
                      <li>Political Science</li>
                      <li>Banking and Finance</li>
                      <li>Sociology</li>
                      <li>Industrial Relations & Personnel Management</li>
                      <li>International Relations</li>
                      <li>Politics and Law</li>
                    </ul>
                  </div>

                </Row>

                <Card.Header>Law</Card.Header>
                <Row className='w-100'>
                  <div><br></br>
                    <ul>
                      <li>Public and International Law (LL.B)</li>
                      <li>Private and Commercial Law (LL.B)</li>
                    </ul>
                  </div>

                </Row>

                <Card.Header>Liberal Studies</Card.Header>
                <Row className='w-100'>
                  <div><br></br>
                    <ul>
                      <li>Music</li>
                      <li>History and International Studies</li>
                      <li>English</li>
                      <li>Theatre Arts</li>
                      <li>Religious Studies</li>
                    </ul>
                  </div>

                </Row>

                <Card.Header>Health Sciences</Card.Header>
                <Row className='w-100'>
                  <div><br></br>
                    <ul>
                      <li>Anatomy</li>
                      <li>Physiotherapy</li>
                      <li>Physiology</li>
                      <li>Public Health</li>
                      <li>Medicine and Surgery</li>
                      <li>Medical Laboratory Science</li>
                      <li>Nursing Science</li>
                      <li>Nutrition and Dietetics</li>
                    </ul>
                  </div>

                </Row>

                <Card.Header>Computing and Communication Studies</Card.Header>
                <Row className='w-100'>
                  <div><br></br>
                    <ul>
                      <li>Computer Science</li>
                      <li>Mass Communication</li>
                      <li>Communication Arts</li>
                      <li>Software Engineering</li>
                      <li>Information Technology</li>
                      <li>Cyber Security</li>
                    </ul>
                  </div>

                </Row>

                <Card.Header>Environmental Sciences</Card.Header>
                <Row className='w-100'>
                  <div><br></br>
                    <ul>
                      <li>Architecture</li>
                      <li>Surveying and Geo-Informatics</li>
                    </ul>
                  </div>

                </Row>


              </Card.Body>
            </Card>

          </Col>

        </Row >
      </Container >

    </>
  );
}

export default RegisterAccount;