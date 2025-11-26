import { Container, Row, Col } from "react-bootstrap";


export default function AboutShowcase() {
    return (
        <div id="aboutShowcase">
            <Container fluid>
                <Row className="align-items-stretch justify-content-center">
                   
                    <Col md={4} xs={12} className="p-0 text-center">
                        <div className="bg-primary-1 p-5 h-100 w-100">
                            <div className="bg-dark text-center text-primary-1 avatar avatar-md rounded-circle mb-4 icon mx-auto p-3">
                                <i className="fas fa-lightbulb"></i>
                            </div>
                            <h2 className="text-dark aboutTitle">Our Vision & Philosophy</h2>
                            <p className="text-muted description">
                                At Interilu, we believe that every space deserves to be a reflection of its unique character and the people who inhabit it. Our vision is to create environments that inspire, comfort, and reflect the essence of your lifestyle.
                            </p>
                        </div>
                    </Col>

                    
                    <Col md={4} xs={12} className="p-0 text-center">
                        <div className="bg-light p-5 h-100 w-100">
                            <div className="bg-dark text-center text-primary-1 avatar avatar-md rounded-circle mb-4 icon mx-auto p-3">
                                <i className="fas fa-award"></i>
                            </div>
                            <h2 className="text-dark aboutTitle">Expertise & Experience</h2>
                            <p className="text-muted description">
                                With over 15 years of experience, we create beautiful and functional spaces tailored to your needs and preferences. We'll work with you to craft a space that exceeds your expectations.
                            </p>
                        </div>
                    </Col>

                    
                    <Col md={4} xs={12} className="p-0 text-center">
                        <div className="bg-primary-1 p-5 h-100 w-100">
                            <div className="bg-dark text-center text-primary-1 avatar avatar-md rounded-circle mb-4 icon mx-auto p-3">
                                <i className="fas fa-user"></i>
                            </div>
                            <h2 className="text-dark aboutTitle">Client-Centric Approach / Unique Value</h2>
                            <p className="text-muted description">
                                We take a client-centric approach to every project, ensuring that our unique value proposition is tailored to meet your specific needs and goals.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
