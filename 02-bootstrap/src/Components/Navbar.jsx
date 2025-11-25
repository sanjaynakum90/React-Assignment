import React from "react";
import "./../style.css";

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

                {/* Mobile Menu Button */}
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

                {/* Navigation Links */}
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

                    {/* Social Icons (Desktop) */}
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
