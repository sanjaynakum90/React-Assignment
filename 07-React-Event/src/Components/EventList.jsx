import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

const EventList = ({ events, onView, onRegister }) => {
  return (
    <Container className="my-4">
      <Row>
        {events.map(event => (
          <Col md={4} key={event.id}>
            <Card className="mb-4 shadow-sm">
              <Card.Body>
                <Badge bg="primary">{event.category}</Badge>
                <Card.Title className="mt-2">{event.title}</Card.Title>
                <Card.Text>
                  📅 {event.date}<br />
                  📍 {event.location}<br />
                  👥 {event.attendees}
                </Card.Text>
                <div className="d-grid gap-2">
                  <Button onClick={() => onView(event)}>View</Button>
                  <Button variant="outline-success" onClick={() => onRegister(event.id)}>Register</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default EventList;