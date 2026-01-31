import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section text-center py-5 bg-primary text-white">
        <Container>
          <h1 className="display-3 fw-bold mb-4">Welcome to Navigator</h1>
          <p className="lead mb-4">
            Your ultimate solution for modern web navigation and routing
          </p>
          <Button as={Link} to="/services" variant="light" size="lg" className="me-3">
            Our Services
          </Button>
          <Button as={Link} to="/contact" variant="outline-light" size="lg">
            Get Started
          </Button>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features-section py-5">
        <Container>
          <h2 className="text-center mb-5">Why Choose Navigator?</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 text-center shadow-sm">
                <Card.Body>
                  <div className="feature-icon mb-3">
                    <i className="bi bi-lightning-charge-fill text-primary" style={{fontSize: '3rem'}}></i>
                  </div>
                  <Card.Title>Fast Performance</Card.Title>
                  <Card.Text>
                    Built with React for lightning-fast navigation and optimal performance.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 text-center shadow-sm">
                <Card.Body>
                  <div className="feature-icon mb-3">
                    <i className="bi bi-phone-fill text-success" style={{fontSize: '3rem'}}></i>
                  </div>
                  <Card.Title>Responsive Design</Card.Title>
                  <Card.Text>
                    Fully responsive design that works seamlessly on all devices.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 text-center shadow-sm">
                <Card.Body>
                  <div className="feature-icon mb-3">
                    <i className="bi bi-gear-fill text-warning" style={{fontSize: '3rem'}}></i>
                  </div>
                  <Card.Title>Easy Customization</Card.Title>
                  <Card.Text>
                    Modular architecture makes it easy to customize and extend.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5 bg-light">
        <Container className="text-center">
          <h2 className="mb-4">Ready to Get Started?</h2>
          <p className="lead mb-4">
            Join thousands of satisfied users who trust Navigator for their projects.
          </p>
          <Button as={Link} to="/contact" variant="primary" size="lg">
            Contact Us Today
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default Home;