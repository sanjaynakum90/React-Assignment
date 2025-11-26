import { Container, Row, Col } from "react-bootstrap";

const GallerySection = () => {
    return (
        <div className="section bg-secondary-1 gallery-section">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={10} className="text-center mb-4">
                        <span className="badge bg-primary-1 text-primary-1 px-3 py-2 rounded-pill mb-3 d-inline-flex align-items-center">
                            <i className="fa-regular fa-image me-2"></i> Our Gallery
                        </span>
                        <h2 className="display-5 fw-bold mb-3 text-white">
                            See the Beauty <span className="text-primary-1">We Create</span>
                        </h2>
                        <p className="lead text-light">
                            Discover our portfolio of stunning interior transformations that
                            blend creativity with functionality.
                        </p>
                    </Col>

                    <Col xs={12} className="mb-5">
                        <div className="gallery-masonry masonry-grid">
                            
                            {[
                                {
                                    size: "medium",
                                    img: "img-1.jpg",
                                    title: "Modern Living Room",
                                    desc: "Elegant design with natural lighting",
                                },
                                {
                                    size: "small",
                                    img: "img-2.jpg",
                                    title: "Cozy Bedroom",
                                    desc: "Warm and inviting atmosphere",
                                },
                                {
                                    size: "large",
                                    img: "img-7.jpg",
                                    title: "Luxury Kitchen",
                                    desc: "Modern design with premium finishes",
                                },
                                {
                                    size: "medium",
                                    img: "img-4.jpg",
                                    title: "Elegant Dining",
                                    desc: "Perfect for family gatherings",
                                },
                                {
                                    size: "medium",
                                    img: "img-5.jpg",
                                    title: "Chic Bathroom",
                                    desc: "Luxury spa-like experience",
                                },
                                {
                                    size: "small",
                                    img: "img-6.jpg",
                                    title: "Minimalist Office",
                                    desc: "Productivity meets style",
                                },
                                {
                                    size: "large",
                                    img: "img-11.jpg",
                                    title: "Modern Apartment",
                                    desc: "Urban living redefined",
                                },
                                {
                                    size: "medium",
                                    img: "img-8.jpg",
                                    title: "Luxury Bedroom",
                                    desc: "Your personal retreat",
                                },
                                {
                                    size: "small",
                                    img: "img-9.jpg",
                                    title: "Stylish Lounge",
                                    desc: "Perfect for relaxation",
                                },
                                {
                                    size: "small",
                                    img: "img-10.jpg",
                                    title: "Stylish Lounge",
                                    desc: "Perfect for relaxation",
                                },
                            ].map((item, index) => (
                                <div key={index} className={`masonry-item ${item.size}`}>
                                    <img src={item.img} alt={item.title} className="masonry-img" />
                                    <div className="masonry-overlay">
                                        <h5 className="text-white fw-bold mb-2">{item.title}</h5>
                                        <p className="small text-light mb-0">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>

                    <Col xs={12} className="text-center">
                        <a href="#contact" className="btn btn-outline-light btn-lg mt-4">
                            Start Your Project
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default GallerySection;
