import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

const EmptyAdmissionCard: React.FC = () => {
    return (
        <Card>
            <Card.Header>Current Admission and Application</Card.Header>

            <Card.Body className='d-flex flex-column align-items-center'>
                <Button variant="primary" className='btn w-100'>Current Admission</Button>

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

export default EmptyAdmissionCard;
