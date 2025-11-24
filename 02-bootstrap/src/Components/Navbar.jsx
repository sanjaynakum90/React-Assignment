import { useState } from "react";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
// import { FaInstagram, FaFacebookF, FaLinkedinIn, FaXTwitter, FaHome, FaInfoCircle, FaCogs, FaProjectDiagram, FaBlog, FaEnvelope } from "react-icons/fa";

const NavigationBar = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar
            expand="xl"
            fixed="top"
            expanded={expanded}
            className="bg-transparent"
            collapseOnSelect
        >
            <Container className="nav-container">
                <Navbar.Brand href="/">
                    <img
                        src="/images/logo/logo-light.png"
                        alt="Logo"
                        height="40"
                        className="d-none d-lg-block"
                    />
                    <img
                        src="/images/logo/logo-sm.png"
                        alt="Logo"
                        height="40"
                        className="d-lg-none"
                    />
                </Navbar.Brand>

                <div className="d-xl-none d-flex align-items-center gap-2 ms-auto">
                    <a href="https://twitter.com" target="_blank" rel="noreferrer">
                        <div className="icon-back"><FaXTwitter /></div>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                        <div className="icon-back"><FaFacebookF /></div>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer">
                        <div className="icon-back"><FaInstagram /></div>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                        <div className="icon-back"><FaLinkedinIn /></div>
                    </a>
                </div>

                <Navbar.Toggle
                    aria-controls="mainNavbar"
                    className="border-0 p-0 ms-3"
                    onClick={() => setExpanded(expanded ? false : true)}
                />

                <Navbar.Collapse id="mainNavbar">
                    <Nav className="mx-auto">
                        <Nav.Link href="/"><FaHome className="me-1" /> Home</Nav.Link>
                        <NavDropdown title={<span><FaInfoCircle className="me-1" /> About</span>} id="aboutDropdown">
                            <NavDropdown.Item href="/ourvision.html">Our Vision & Philosophy</NavDropdown.Item>
                            <NavDropdown.Item href="/expertise.html">Expertise & Experience</NavDropdown.Item>
                            <NavDropdown.Item href="/clients.html">Client-Centric Approach</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/services.html"><FaCogs className="me-1" /> Services</Nav.Link>
                        <Nav.Link href="#project"><FaProjectDiagram className="me-1" /> Projects</Nav.Link>
                        <Nav.Link href="/blog.html"><FaBlog className="me-1" /> Blog</Nav.Link>
                        <Nav.Link href="/contact.html"><FaEnvelope className="me-1" /> Contact</Nav.Link>
                    </Nav>

                    <div className="d-none d-xl-flex align-items-center gap-3">
                        <a href="https://twitter.com" target="_blank" rel="noreferrer">
                            <div className="icon-back"><FaXTwitter /></div>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer">
                            <div className="icon-back"><FaFacebookF /></div>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">
                            <div className="icon-back"><FaInstagram /></div>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                            <div className="icon-back"><FaLinkedinIn /></div>
                        </a>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
