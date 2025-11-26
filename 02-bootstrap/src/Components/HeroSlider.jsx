import React from "react";
import { Carousel, Button, Container, Row, Col } from "react-bootstrap";

export default function Hero() {
    const slides = [
        {
            img: "home_1.jpg",
            badge: "Premium Interior Solutions",
            title: <>Live in a Space That <span className="text-primary-1">Inspires</span> You</>,
            text: "Inspired spaces begin with inspired design — a thoughtful blend of vision, creativity, and functionality.",
            btn1: { label: "Start Your Project", link: "#contact" },
            btn2: { label: "View Portfolio", link: "#portfolio" }
        },
        {
            img: "home_2.jpg",
            badge: "Modern & Functional",
            title: <>Where <span className="text-primary-1">Comfort</span> Meets Style</>,
            text: "Elevate everyday living with intelligent design and effortlessly stylish interiors.",
            btn1: { label: "Our Services", link: "#services" },
            btn2: { label: "Contact Us", link: "#contact" }
        },
        {
            img: "home_3.jpg",
            badge: "Premium Design",
            title: <>Turning <span className="text-primary-1">Ideas</span> Into Reality</>,
            text: "Personalized interiors that exude luxury, warmth, and character.",
            btn1: { label: "Our Projects", link: "#project" },
            btn2: { label: "Learn More", link: "#about" }
        }
    ];

    return (
        <div className="min-vh-100 hero-section4 position-relative overflow-hidden">
            <Carousel fade interval={5000} className="hero4-carousel">

                {slides.map((slide, i) => (
                    <Carousel.Item key={i}>
                        <img
                            className="d-block w-100 object-fit-cover"
                            src={slide.img}
                            alt={`Slide ${i + 1}`}
                        />
                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"></div>

                        <Carousel.Caption className="z-2 d-flex flex-column justify-content-center">
                            <Container>
                                <Row className="justify-content-center">
                                    <Col xl={8} lg={10} className="text-center">

                                        <span className="badge bg-primary-1-3 text-primary-1 px-4 py-2 rounded-pill mb-3 d-inline-flex align-items-center">
                                            <i className="fas fa-cogs me-2"></i> {slide.badge}
                                        </span>

                                        <h1 className="display-4 text-white mb-4 title">{slide.title}</h1>

                                        <p className="lead text-white-75 mb-4">{slide.text}</p>

                                        <div className="d-flex flex-wrap justify-content-center gap-3">
                                            <Button href={slide.btn1.link} className="btn btn-primary-1 rounded-pill">
                                                {slide.btn1.label}
                                            </Button>
                                            <Button href={slide.btn2.link} className="btn btn-light rounded-pill">
                                                {slide.btn2.label}
                                            </Button>
                                        </div>

                                    </Col>
                                </Row>
                            </Container>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}

            </Carousel>
        </div>
    );
}
