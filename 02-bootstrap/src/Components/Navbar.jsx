<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./../style.css";

export default function Header() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const social = ["x-twitter", "facebook-f", "instagram", "linkedin-in"];

    return (
        <Navbar
            expand="xl"
            fixed="top"
            className={`navbar-dark ${scrolled ? "navbar-flat" : "navbar-rounded"} bg-transparent`}
        >
            <Container className="nav-container">


                <a className="navbar-brand" href="/">
                    <img src="logo-light.png" alt="Logo" height="40" className="d-none d-lg-block" />
                    <img src="logo-sm.png" alt="Logo" height="40" className="d-lg-none" />
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

                        <Nav.Item>
                            <a href="/" className="nav-link">
                                <i className=" fas fa-home me-1 "></i>Home
                            </a>
                        </Nav.Item>

                        <Nav.Item className="dropdown">
                            <a className="nav-link dropdown-toggle" href="#about" data-bs-toggle="dropdown">
                                <i className="fas fa-info-circle me-1"></i> About
                            </a>
                            <ul className="dropdown-menu dropdown-menu-lg-center">
                                <li><a className="dropdown-item" href="ourvision.html">Our Vision & Philosophy</a></li>
                                <li><a className="dropdown-item" href="expertise.html">Expertise & Experience</a></li>
                                <li><a className="dropdown-item" href="clients.html">Client-Centric Approach</a></li>
                            </ul>
                        </Nav.Item>
                        <Nav.Item>
                            <a href="/" className="nav-link">
                                <i className="fas fa-cogs me-1"></i>Services
                            </a>
                        </Nav.Item>

                        <Nav.Item>
                            <a href="/" className="nav-link">
                                <i className="fas fa-project-diagram me-1"></i>Projects
                            </a>
                        </Nav.Item>


                        <Nav.Item>
                            <a href="/" className="nav-link">
                                <i className="fas fa-blog me-1"></i>Blog
                            </a>
                        </Nav.Item>
                        <Nav.Item>
                            <a href="/" className="nav-link">
                                <i className="fas fa-envelope me-1"></i>Contact
                            </a>
                        </Nav.Item>

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
=======
import React from "react";


export default function Header() {
    return (
        <nav className="navbar fixed-top navbar-expand-xl">
            <div className="container nav-container">

                
                <a className="navbar-brand" href="index.html">
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

                
                <div className="d-xl-none d-flex align-items-center justify-content-center social-media gap-2 ms-auto">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <div className="icon-back"><i className="fab fa-x-twitter"></i></div>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <div className="icon-back"><i className="fab fa-facebook-f"></i></div>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <div className="icon-back"><i className="fab fa-instagram"></i></div>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <div className="icon-back"><i className="fab fa-linkedin-in"></i></div>
                    </a>
                </div>

                <button
                    className="navbar-toggler collapsed border-0 p-0 ms-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="index.html" aria-current="page">
                                <i className="fas fa-home me-1"></i>Home
                            </a>
                        </li>

                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="/"
                                data-bs-toggle="dropdown"
                            >
                                <i className="fas fa-info-circle me-1"></i> About
                            </a>
                            <ul className="dropdown-menu dropdown-menu-lg-center">
                                <li><a className="dropdown-item" href="ourvision.html">Our Vision & Philosophy</a></li>
                                <li><a className="dropdown-item" href="expertise.html">Expertise & Experience</a></li>
                                <li><a className="dropdown-item" href="clients.html">Client-Centric Approach</a></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/services.html">
                                <i className="fas fa-cogs me-1"></i>Services
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#project">
                                <i className="fas fa-project-diagram me-1"></i>Projects
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/blog.html">
                                <i className="fas fa-blog me-1"></i>Blog
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/contact.html">
                                <i className="fas fa-envelope me-1"></i> Contact
                            </a>
                        </li>
                    </ul>

                    <div className="d-none d-xl-flex align-items-center mt-lg-0 mt-4 justify-content-center social-media gap-3">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <div className="icon-back"><i className="fab fa-x-twitter"></i></div>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <div className="icon-back"><i className="fab fa-facebook-f"></i></div>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <div className="icon-back"><i className="fab fa-instagram"></i></div>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <div className="icon-back"><i className="fab fa-linkedin-in"></i></div>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
>>>>>>> 71747abb303e7a8da108d2208f0b3a9e4c7226f0
