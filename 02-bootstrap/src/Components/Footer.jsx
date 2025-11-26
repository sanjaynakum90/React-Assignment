import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
    const Gallery = [
        "footer-img-1.jpg",
        "footer-img-2.jpg",
        "footer-img-3.jpg",
        "footer-img-3.jpg",
        "footer-img-1.jpg",
        "footer-img-2.jpg",
    ]
    return (
        <footer className="footer bg-dark text-white">
            <Container>

                <Row>
                    <Col lg={4} xs={12} className="mb-4 mb-lg-0">
                        <div className="mb-4 me-lg-5">
                            <img
                                src="logo-light.png"
                                alt="Logo"
                                height="40"
                                className="mb-4"
                            />

                            <p className="text-white opacity-75 fs-18">
                                Your happiness is at the core of what we do. Every detail and design
                                choice reflects your lifestyle. We measure success not just in
                                style, but in the smiles of clients who feel at home in the spaces
                                we've created.
                            </p>
                        </div>

                        <div>
                            <h6 className="text-uppercase mb-3 text-light">Connect With Us</h6>

                            <div className="d-flex align-items-center social-media gap-3">
                                <a href="https://twitter.com" >
                                    <div className="icon-back"><i className="fab fa-x-twitter"></i></div>
                                </a>

                                <a href="https://facebook.com" >
                                    <div className="icon-back"><i className="fab fa-facebook-f"></i></div>
                                </a>

                                <a href="https://instagram.com" >
                                    <div className="icon-back"><i className="fab fa-instagram"></i></div>
                                </a>

                                <a href="https://linkedin.com" >
                                    <div className="icon-back "><i className="fab fa-linkedin-in "></i></div>
                                </a>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4}>
                        <Row>
                            <Col sm={6} className="mb-4 mb-md-0">
                                <h5 className="text-uppercase fw-bold mb-3 text-light">Company</h5>
                                <ul className="list-unstyled">
                                    <li className="mb-3"><a href="#home" className="footer-link text-decoration-none">Home</a></li>
                                    <li className="mb-3"><a href="#about" className="footer-link text-decoration-none">About Us</a></li>
                                    <li className="mb-3"><a href="#services" className="footer-link text-decoration-none">Services</a></li>
                                    <li className="mb-3"><a href="#project" className="footer-link text-decoration-none">Projects</a></li>
                                    <li className="mb-3"><a href="#contact" className="footer-link text-decoration-none">Contact</a></li>
                                </ul>
                            </Col>

                            <Col sm={6} className="mb-4 mb-md-0">
                                <h5 className="text-uppercase fw-bold mb-3 text-light">Products</h5>
                                <ul className="list-unstyled">
                                    <li className="mb-3"><a href="#services" className="footer-link text-decoration-none">Residential</a></li>
                                    <li className="mb-3"><a href="#services" className="footer-link text-decoration-none">Commercial</a></li>
                                    <li className="mb-3"><a href="#services" className="footer-link text-decoration-none">Office</a></li>
                                    <li className="mb-3"><a href="#contact" className="footer-link text-decoration-none">Custom Designs</a></li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>

                    <Col lg={4} md={6} xs={12}>
                        <h5 className="text-uppercase fw-bold mb-4 text-md-start text-center text-light">
                            Our Gallery
                        </h5>

                        <Row className="justify-content-center align-items-center text-center g-3">
                            {Gallery.map((img, i) => (
                                <Col xs={4} key={i}>
                                    <a href="#" className="d-block overflow-hidden rounded-2">
                                        <img
                                            src={`${img}`}
                                            alt={`${i + 1}`}
                                            className="img-fluid w-100 hover-scale transition-md"
                                        />
                                    </a>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>

                <hr />

                <Row className="align-items-center">
                    <Col lg={6} className="text-center text-lg-start mb-3 mb-lg-0">
                        <p className="text-white mb-0">
                            <span className="opacity-50">&copy; {new Date().getFullYear()}</span>
                            <a href="" className="text-light text-decoration-none">Mantraksh Devs</a>
                            <span className="fw-bold text-white opacity-75">Interilu</span>
                            <span className="opacity-50">- All Rights Reserved. Crafted with</span>
                            <span className="text-danger">❤</span>
                        </p>
                    </Col>

                    <Col lg={6} className="text-center text-lg-end">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                                <a href="#" className="text-white-50 text-decoration-none">Privacy Policy</a>
                            </li>
                            <li className="list-inline-item">
                                <span className="text-white-50 mx-2">|</span>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="text-white-50 text-decoration-none">Terms of Service</a>
                            </li>
                            <li className="list-inline-item">
                                <span className="text-white-50 mx-2">|</span>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="text-white-50 text-decoration-none">Sitemap</a>
                            </li>
                        </ul>
                    </Col>
                </Row>

            </Container>
        </footer>
    );
}
