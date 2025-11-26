import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./../style.css";

export default function Header() {
    const social = ["x-twitter", "facebook-f", "instagram", "linkedin-in"]
    return (
        <Navbar expand="xl" fixed="top" className="navbar-dark bg-transparent">
            <Container className="nav-container">
                <a className="navbar-brand" href="/">
                    <img
                        src="logo-light.png"
                        alt="Logo"
                        height="40"
                        className="d-none d-lg-block"
                    />
                    <img
                        src="logo-sm.png"
                        alt="Logo"
                        height="40"
                        className="d-lg-none"
                    />
                </a>


                <div className="d-xl-none d-flex align-items-center social-media gap-2 ms-auto">
                    {social.map((icon, i) => (
                        <a key={i} href="#" className="text-decoration-none">
                            <div className="icon-back">
                                <i className={`fab fa-${icon}`}></i>
                            </div>
                        </a>
                    ))}
                </div>


                <Navbar.Toggle aria-controls="navbarNav" className="border-0 p-0 ms-3" />

                <Navbar.Collapse id="navbarNav">
                    <Nav className="mx-auto">

                        <Nav.Link href="/" className="nav-link">
                            <i className="fas fa-home me-1"></i>Home
                        </Nav.Link>

                        <Nav.Item className="dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#about"
                                data-bs-toggle="dropdown"
                            >
                                <i className="fas fa-info-circle me-1"></i> About
                            </a>
                            <ul className="dropdown-menu dropdown-menu-lg-center">
                                <li><a className="dropdown-item" href="ourvision.html">Our Vision & Philosophy</a></li>
                                <li><a className="dropdown-item" href="expertise.html">Expertise & Experience</a></li>
                                <li><a className="dropdown-item" href="clients.html">Client-Centric Approach</a></li>
                            </ul>
                        </Nav.Item>

                        <Nav.Link href="/services.html">
                            <i className="fas fa-cogs me-1"></i>Services
                        </Nav.Link>

                        <Nav.Link href="#project">
                            <i className="fas fa-project-diagram me-1"></i>Projects
                        </Nav.Link>

                        <Nav.Link href="/blog.html">
                            <i className="fas fa-blog me-1"></i>Blog
                        </Nav.Link>

                        <Nav.Link href="/contact.html">
                            <i className="fas fa-envelope me-1"></i>Contact
                        </Nav.Link>
                    </Nav>
                    <div className="d-none d-xl-flex align-items-center social-media gap-3">
                        {social.map((icon, i) => (
                            <a key={i} href="#" className="text-decoration-none">
                                <div className="icon-back">
                                    <i className={`fab fa-${icon}`}></i>
                                </div>
                            </a>
                        ))}
                    </div>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
