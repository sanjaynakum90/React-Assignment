import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setShowAlert(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });

    // Hide alert after 5 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  return (
    <div className="contact-page page-container">
      <Container>
        {/* Header */}
        <Row className="mb-5">
          <Col>
            <h1 className="display-4 mb-3">Get In Touch</h1>
            <p className="lead text-muted">
              Have a question or want to work together? We'd love to hear from you.
            </p>
          </Col>
        </Row>

        <Row>
          {/* Contact Form */}
          <Col lg={8} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body className="p-4">
                <h3 className="mb-4">Send Us a Message</h3>
                
                {showAlert && (
                  <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                    <i className="bi bi-check-circle-fill me-2"></i>
                    Thank you for your message! We'll get back to you soon.
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Name *</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Subject *</Form.Label>
                        <Form.Select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="services">Services Information</option>
                          <option value="quote">Request a Quote</option>
                          <option value="support">Technical Support</option>
                          <option value="partnership">Partnership</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-4">
                    <Form.Label>Message *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or inquiry..."
                      required
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" size="lg" className="w-100">
                    <i className="bi bi-send me-2"></i>
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Contact Information */}
          <Col lg={4}>
            <Card className="shadow-sm mb-4">
              <Card.Body>
                <h4 className="mb-4">Contact Information</h4>
                
                <div className="contact-info-item mb-4">
                  <div className="contact-icon">
                    <i className="bi bi-geo-alt-fill text-primary"></i>
                  </div>
                  <div>
                    <h6>Address</h6>
                    <p className="text-muted">
                      123 Navigator Street<br />
                      Tech City, TC 12345<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="contact-info-item mb-4">
                  <div className="contact-icon">
                    <i className="bi bi-telephone-fill text-success"></i>
                  </div>
                  <div>
                    <h6>Phone</h6>
                    <p className="text-muted">
                      +1 (555) 123-4567<br />
                      +1 (555) 987-6543
                    </p>
                  </div>
                </div>

                <div className="contact-info-item mb-4">
                  <div className="contact-icon">
                    <i className="bi bi-envelope-fill text-danger"></i>
                  </div>
                  <div>
                    <h6>Email</h6>
                    <p className="text-muted">
                      info@navigator.com<br />
                      support@navigator.com
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon">
                    <i className="bi bi-clock-fill text-warning"></i>
                  </div>
                  <div>
                    <h6>Business Hours</h6>
                    <p className="text-muted">
                      Monday - Friday: 9AM - 6PM<br />
                      Saturday: 10AM - 4PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Card className="shadow-sm bg-primary text-white">
              <Card.Body>
                <h5 className="mb-3">Follow Us</h5>
                <div className="social-links-contact">
                  <a href="#" className="text-white me-3">
                    <i className="bi bi-facebook" style={{fontSize: '1.5rem'}}></i>
                  </a>
                  <a href="#" className="text-white me-3">
                    <i className="bi bi-twitter" style={{fontSize: '1.5rem'}}></i>
                  </a>
                  <a href="#" className="text-white me-3">
                    <i className="bi bi-linkedin" style={{fontSize: '1.5rem'}}></i>
                  </a>
                  <a href="#" className="text-white me-3">
                    <i className="bi bi-instagram" style={{fontSize: '1.5rem'}}></i>
                  </a>
                  <a href="#" className="text-white">
                    <i className="bi bi-github" style={{fontSize: '1.5rem'}}></i>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;