import { Container, Row, Col } from "react-bootstrap";

export default function AboutSection() {
    return (
        <div className="section bg-white" id="about">
            <Container>
                <Row className="align-items-center">

                    <Col xs={12} lg={5} className="mb-lg-0 mb-5">
                        <div className="d-flex justify-content-center position-relative">
                            <img
                                src="img-2.jpg"
                                alt="About Us"
                                className="img-fluid rounded-4 aboutus-img main-img"
                            />
                            <img
                                src="img-3.jpg"
                                alt="About Us"
                                className="img-fluid rounded-4 aboutus-img top-img"
                            />
                            <img
                                src="img-6.jpg"
                                alt="About Us"
                                className="img-fluid rounded-4 aboutus-img bottom-img"
                            />
                        </div>
                    </Col>

                   
                    <Col xs={12} lg={6} className="offset-lg-1">
                        <div className="mt-4 mt-lg-0 bg-primary-1 p-5 rounded about-content-card">
                            <span className="badge bg-primary-1 text-primary-1 px-3 py-2 rounded-pill mb-3 d-inline-flex align-items-center">
                                <i className="fas fa-user me-2"></i> About Us
                            </span>

                            <h2 className="display-5 fw-bold mb-3 text-dark">
                                Where Creativity Meets <span className="text-primary-1">Comfort</span> and{" "}
                                <span className="text-primary-1">Elegance!</span>
                            </h2>

                            <p className="lead text-muted mb-4">
                                From cozy homes to modern offices, we design interiors that balance elegance and
                                functionality. Every space is thoughtfully crafted to reflect your unique personality,
                                lifestyle, and needs—resulting in timeless designs that feel personal, inspiring, and
                                effortlessly beautiful.
                            </p>

                            <div className="d-flex align-items-center mb-3">
                                <div className="bg-dark-1 text-center me-3 text-primary-1 avatar avatar-sm rounded-circle icon">
                                    <i className="fas fa-lightbulb"></i>
                                </div>
                                <h5 className="mb-0 text-muted">Our Vision & Philosophy</h5>
                            </div>

                            <div className="d-flex align-items-center mb-3">
                                <div className="bg-dark-1 text-center me-3 text-primary-1 avatar avatar-sm rounded-circle icon">
                                    <i className="fas fa-award"></i>
                                </div>
                                <h5 className="mb-0 text-muted">Expertise & Experience</h5>
                            </div>

                            <div className="d-flex align-items-center">
                                <div className="bg-dark-1 text-center me-3 text-primary-1 avatar avatar-sm rounded-circle icon">
                                    <i className="fas fa-user"></i>
                                </div>
                                <h5 className="mb-0 text-muted">Client-Centric Approach / Unique Value</h5>
                            </div>

                            <a href="#contact" className="btn btn-primary mt-4">
                                Get Started <i className="fas fa-arrow-right ms-2"></i>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
