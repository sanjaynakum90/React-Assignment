import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function NewsletterSection() {
    return (
        <div className="overflow-hidden py-4 bg-light" id="newsletter">
            <Container>
                <Row className="justify-content-center align-items-center">

                    <Col lg={6} xs={12} className="order-lg-1 order-2">
                        <h2 className="fw-bold text-dark">Ready to transform your space?</h2>

                        <p className="lead mb-4 text-muted">
                            Stay inspired with our latest updates! From design tips to project
                            highlights, our newsletter brings you the newest ideas and insights
                            straight to your inbox.
                        </p>

                        <Form className="mb-4">
                            <Form.Control
                                as="textarea"
                                id="quotes"
                                rows={3}
                                placeholder="Ask anything..."
                                required
                                className="bg-transparent border border-1 border-secondary-subtle"
                            />
                        </Form>

                        <div className="text-lg-start text-center">
                            <Button href="#contact" variant="dark">
                                Get a Free Quote
                            </Button>
                        </div>
                    </Col>


                    <Col lg={5} xs={12} className="offset-lg-1 order-lg-2 order-1">
                        <img
                            src="ctaimg.png"
                            alt="ctaimg"
                            className="img-fluid"
                        />
                    </Col>

                </Row>
            </Container>
        </div>
    );
}
