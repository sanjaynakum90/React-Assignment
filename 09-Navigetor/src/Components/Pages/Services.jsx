import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      icon: 'bi-code-slash',
      color: 'primary',
      description: 'Custom web applications built with modern technologies and best practices.',
      features: ['React.js', 'Node.js', 'Responsive Design', 'API Integration']
    },
    {
      id: 2,
      title: 'UI/UX Design',
      icon: 'bi-palette',
      color: 'success',
      description: 'Beautiful and intuitive user interfaces that enhance user experience.',
      features: ['Wireframing', 'Prototyping', 'User Research', 'Design Systems']
    },
    {
      id: 3,
      title: 'Mobile Development',
      icon: 'bi-phone',
      color: 'info',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['React Native', 'Flutter', 'iOS', 'Android']
    },
    {
      id: 4,
      title: 'Cloud Solutions',
      icon: 'bi-cloud',
      color: 'warning',
      description: 'Scalable cloud infrastructure and deployment solutions.',
      features: ['AWS', 'Azure', 'Docker', 'Kubernetes']
    },
    {
      id: 5,
      title: 'E-Commerce',
      icon: 'bi-cart',
      color: 'danger',
      description: 'Complete e-commerce solutions with payment integration and inventory management.',
      features: ['Shopping Cart', 'Payment Gateway', 'Inventory', 'Analytics']
    },
    {
      id: 6,
      title: 'Consulting',
      icon: 'bi-chat-dots',
      color: 'secondary',
      description: 'Expert technical consulting to help you make the right technology decisions.',
      features: ['Architecture', 'Strategy', 'Code Review', 'Training']
    }
  ];

  return (
    <div className="services-page page-container">
      <Container>
        {/* Header */}
        <Row className="mb-5">
          <Col>
            <h1 className="display-4 mb-3">Our Services</h1>
            <p className="lead text-muted">
              Comprehensive solutions tailored to your business needs
            </p>
          </Col>
        </Row>

        {/* Services Grid */}
        <Row>
          {services.map((service) => (
            <Col key={service.id} lg={4} md={6} className="mb-4">
              <Card className="service-card h-100 shadow-sm">
                <Card.Body>
                  <div className={`service-icon text-${service.color} mb-3`}>
                    <i className={`bi ${service.icon}`}></i>
                  </div>
                  <Card.Title className="h4">{service.title}</Card.Title>
                  <Card.Text className="text-muted mb-3">
                    {service.description}
                  </Card.Text>
                  <ul className="service-features list-unstyled mb-3">
                    {service.features.map((feature, index) => (
                      <li key={index}>
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    as={Link} 
                    to={`/services/${service.id}`} 
                    variant={service.color}
                    className="w-100"
                  >
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* CTA Section */}
        <Row className="mt-5">
          <Col>
            <Card className="bg-primary text-white text-center p-5">
              <Card.Body>
                <h2 className="mb-3">Need a Custom Solution?</h2>
                <p className="lead mb-4">
                  We're here to help you build exactly what you need
                </p>
                <Button as={Link} to="/contact" variant="light" size="lg">
                  Get in Touch
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;