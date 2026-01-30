import { Modal, Button } from 'react-bootstrap';

const EventModal = ({ show, event, onClose, onRegister, onDelete }) => {
  if (!event) return null;

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{event.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Time:</strong> {event.time}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p><strong>Description:</strong> {event.description}</p>
        <p><strong>Attendees:</strong> {event.attendees}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => onDelete(event.id)}>Delete</Button>
        <Button variant="success" onClick={() => onRegister(event.id)}>Register</Button>
        <Button variant="secondary" onClick={onClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EventModal;