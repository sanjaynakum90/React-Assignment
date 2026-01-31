import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="page-container">
      <Container className="text-center py-5">
        <div className="my-5">
          <h1 className="display-1 fw-bold text-primary">404</h1>
          <h2 className="mb-4">Page Not Found</h2>
          <p className="lead text-muted mb-4">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <Button as={Link} to="/" variant="primary" size="lg">
            <i className="bi bi-house-door me-2"></i>
            Go Back Home
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;