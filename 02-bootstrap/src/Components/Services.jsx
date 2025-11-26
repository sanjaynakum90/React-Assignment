import { Container, Row, Col } from "react-bootstrap";

export default function ServicesSection() {
    const services = [
        { img: "1.jpg", title: "Planning" },
        { img: "2.jpg", title: "Furniture & Decor" },
        { img: "3.jpg", title: "Lighting" },
        { img: "4.jpg", title: "Woodwork" },
        { img: "5.jpg", title: "Consultation" },
        { img: "6.jpg", title: "Renovation" },

    ]
    return (
        <div className="section bg-primary-1" id="services">
            <Container>
                <Row className="justify-content-center text-center">
                    <Col md={10} className="mb-4">
                        <span className="badge bg-primary-1 text-primary-1 px-3 py-2 rounded-pill mb-3 d-inline-flex align-items-center">
                            <i className="fas fa-cogs me-2"></i>Our Services
                        </span>

                        <h2 className="display-5 fw-bold mb-3 text-dark">
                            Crafting <span className="text-primary-1">Comfort</span> &
                            <span className="text-primary-1"> Style</span>
                        </h2>

                        <p className="lead text-muted">
                            Discover our full range of interior design services, from concept development to turnkey execution, crafted to elevate every space with beauty and purpose.
                        </p>
                    </Col>

                    <Col xs={12}>
                        <Row className="justify-content-center align-items-center">
                            {services.map((service, index) => (
                                <Col key={index} lg={2} sm={6} xs={12} className="mb-4 mb-lg-0">
                                    <div className="d-flex flex-column align-items-center justify-content-center">
                                        <a href="#" className="bg-primar-1 rounded-circle p-3 mb-2 img-link">
                                            <img
                                                src={service.img}
                                                alt={service.title}
                                                className="w-100 h-100 object-fit-cover rounded-circle "
                                            />
                                        </a>
                                        <a href="#" className="fs-4 service-link text-decoration-none">{service.title}</a>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
