import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function ProjectSection() {
    const projects = [
        {
            img: "projectimg/img-2.jpg",
            title: "Living Room Makeover",
            location: "Bergen, Fana",
            size: "800 sq.ft",
            duration: "4 Weeks",
            desc: "Transform your living space into a cozy retreat with our expert design solutions."
        },
        {
            img: "projectimg/img-3.jpg",
            title: "Office Interior",
            location: "Stavanger, Hinna",
            size: "1200 sq.ft",
            duration: "6 Weeks",
            desc: "Productivity meets style in our thoughtfully designed workspaces."
        },
        {
            img: "projectimg/img-4.jpg",
            title: "Apartment Design",
            location: "Oslo, Majorstuen",
            size: "5000 sq.ft",
            duration: "3 Weeks",
            desc: "Maximizing space and style in compact living environments."
        },
        {
            img: "projectimg/img-1.jpg",
            title: "University Spaces",
            location: "Trondheim, Moholt",
            size: "2500 sq.ft",
            duration: "8 Weeks",
            desc: "Inspiring learning environments that foster creativity and focus."
        },
        {
            img: "projectimg/img-5.jpg",
            title: "Kids’ Playroom",
            location: "Copenhagen, Denmark",
            size: "500 sq.ft",
            duration: "10 Weeks",
            desc: "Designing safe and nurturing spaces for children to grow and develop."
        }
    ];

    return (
        <div className="section bg-white" id="project">
            <Container>
                <Row className="justify-content-center text-center">
                    <Col md={10} className="mb-5">
                        <span className="badge bg-primary-1 text-primary-1 px-3 py-2 rounded-pill mb-3 d-inline-flex align-items-center">
                            <i className="fas fa-star me-2"></i>Our Projects
                        </span>

                        <h2 className="display-5 fw-bold mb-3 text-dark">
                            Crafted with <span className="text-primary-1">Emotion</span>, Designed with{" "}
                            <span className="text-primary-1">Purpose</span>
                        </h2>

                        <p className="lead text-muted mb-4">
                            Explore our portfolio of stunning interior transformations that blend
                            creativity with functionality.
                        </p>

                        <a href="portfolio.html" className="btn btn-primary rounded-pill">
                            View All Projects <i className="fas fa-arrow-right ms-2"></i>
                        </a>
                    </Col>
                </Row>

                <Row className="justify-content-center align-items-center">
                    {projects.map((project, index) => (
                        <Col key={index} md={6} xl={4} className="mb-4">
                            <Card className="project-card h-100 shadow border-0">
                                <div className="position-relative overflow-hidden">
                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        className="card-img h-100 w-100 object-fit-cover"
                                    />

                                    <div className="card-img-overlay">
                                        <div className="card-content">
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <span className="badge px-2 py-1">
                                                    <i className="fas fa-map-marker-alt text-white me-1"></i>
                                                    {project.location}
                                                </span>

                                                <Button
                                                    size="sm"
                                                    className="rounded-circle p-2 d-flex align-items-center justify-content-center"
                                                >
                                                    <i className="fas fa-arrow-right"></i>
                                                </Button>
                                            </div>

                                            <h5 className="card-title fw-bold mb-1 text-white">
                                                {project.title}
                                            </h5>

                                            <p className="card-text text-light small mb-2">
                                                {project.desc}
                                            </p>

                                            <div className="d-flex justify-content-between text-light small">
                                                <span>
                                                    <i className="fas fa-ruler-combined me-1"></i>
                                                    {project.size}
                                                </span>
                                                <span>
                                                    <i className="far fa-clock me-1"></i>
                                                    {project.duration}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}
