import { Carousel, Button, Container, Row, Col } from "react-bootstrap";

const HeroSlider = () => {
    const slides = [
        {
            id: 1,
            img: "home_1.jpg",
            badge: "Premium Interior Solutions",
            title: (
                <>
                    Live in a Space That <span className="text-primary">Inspires</span> You
                </>
            ),
            desc: "Inspired spaces begin with inspired design — a thoughtful blend of vision, creativity, and functionality.",
            btn1: { text: "Start Your Project", link: "#contact", variant: "primary" },
            btn2: { text: "View Portfolio", link: "#portfolio", variant: "light" },
        },
        {
            id: 2,
            img: "home_2.jpg",
            badge: "Modern & Functional",
            title: (
                <>
                    Where <span className="text-primary">Comfort</span> Meets Style
                </>
            ),
            desc: "Elevate everyday living with intelligent design and effortlessly stylish interiors.",
            btn1: { text: "Our Services", link: "#services", variant: "primary" },
            btn2: { text: "Contact Us", link: "#contact", variant: "light" },
        },
        {
            id: 3,
            img: "home_3.jpg",
            badge: "Premium Design",
            title: (
                <>
                    Turning <span className="text-primary">Ideas</span> Into Reality
                </>
            ),
            desc: "Personalized interiors that exude luxury, warmth, and character.",
            btn1: { text: "Our Projects", link: "#project", variant: "primary" },
            btn2: { text: "Learn More", link: "#about", variant: "light" },
        },
    ];

    return (
        <section className="min-vh-100 hero-section4 position-relative overflow-hidden">
            <Carousel
                fade
                interval={5000}
                indicators
                controls={false}
                className="hero4-carousel overflow-hidden"
            >
                {slides.map((slide) => (
                    <Carousel.Item key={slide.id} className="position-relative">
                        <img
                            className="w-100 object-fit-cover"
                            src={slide.img}
                            alt={slide.title}
                            style={{ height: "100vh" }}
                        />


                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"></div>

                        <Carousel.Caption className="z-2">
                            <Container>
                                <Row className="justify-content-center">
                                    <Col lg={10} xl={8} className="text-center">

                                        <span className="badge bg-primary-3 text-primary px-4 py-2 rounded-pill mb-3 d-inline-flex align-items-center">
                                            <i className="fas fa-cogs me-2"></i>
                                            {slide.badge}
                                        </span>

                                        <h1 className="display-4 title text-white mb-4">
                                            {slide.title}
                                        </h1>

                                        <p className="lead text-white-75">{slide.desc}</p>

                                        <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
                                            <Button
                                                href={slide.btn1.link}
                                                variant={slide.btn1.variant}
                                                className="rounded-pill"
                                            >
                                                {slide.btn1.text}
                                            </Button>

                                            <Button
                                                href={slide.btn2.link}
                                                variant={slide.btn2.variant}
                                                className="rounded-pill"
                                            >
                                                {slide.btn2.text}
                                            </Button>
                                        </div>

                                    </Col>
                                </Row>
                            </Container>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </section>
    );
};

export default HeroSlider;
