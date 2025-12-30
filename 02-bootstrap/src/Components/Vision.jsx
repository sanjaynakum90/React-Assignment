<<<<<<< HEAD
import { Container, Row, Col } from "react-bootstrap";


export default function AboutShowcase() {
    const items = [
        {
            id: 1,
            bg: "bg-primary-1",
            icon: "fa-lightbulb",
            titleClass: "text-dark",
            title: "Our Vision & Philosophy",
            description:
                "At Interilu, we believe that every space deserves to be a reflection of its unique character and the people who inhabit it. Our vision is to create environments that inspire, comfort, and reflect the essence of your lifestyle."
        },
        {
            id: 2,
            bg: "bg-dark-1",
            icon: "fa-award",
            titleClass: "text-dark-1",
            title: "Expertise & Experience",
            description:
                "With over 15 years of experience, we create beautiful and functional spaces tailored to your needs and preferences. We'll work with you to craft a space that exceeds your expectations."
        },
        {
            id: 3,
            bg: "bg-primary-1",
            icon: "fa-user",
            titleClass: "text-dark",
            title: "Client-Centric Approach / Unique Value",
            description:
                "We take a client-centric approach to every project, ensuring that our unique value proposition is tailored to meet your specific needs and goals."
        }
    ];

    return (
        <div id="aboutShowcase">
            <Container fluid>
                <Row className="align-items-stretch justify-content-center">
                    {items.map((item) => (
                        <Col key={item.id} md={4} xs={12} className="p-0 text-center">
                            <div className={`${item.bg} p-5 h-100 w-100`}>
                                <div className="bg-dark-1 text-center text-primary-1 avatar avatar-md rounded-circle mb-4 icon mx-auto p-3">
                                    <i className={`fas ${item.icon}`}></i>
                                </div>
                                <h2 className={`${item.titleClass} aboutTitle`}>{item.title}</h2>
                                <p className="text-muted description">{item.description}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}
=======
import { Container, Row, Col } from "react-bootstrap";


export default function AboutShowcase() {
    return (
        <div id="aboutShowcase">
            <Container fluid>
                <Row className="align-items-stretch justify-content-center">
                   
                    <Col md={4} xs={12} className="p-0 text-center">
                        <div className="bg-primary-1 p-5 h-100 w-100">
                            <div className="bg-dark text-center text-primary-1 avatar avatar-md rounded-circle mb-4 icon mx-auto p-3">
                                <i className="fas fa-lightbulb"></i>
                            </div>
                            <h2 className="text-dark aboutTitle">Our Vision & Philosophy</h2>
                            <p className="text-muted description">
                                At Interilu, we believe that every space deserves to be a reflection of its unique character and the people who inhabit it. Our vision is to create environments that inspire, comfort, and reflect the essence of your lifestyle.
                            </p>
                        </div>
                    </Col>

                    
                    <Col md={4} xs={12} className="p-0 text-center">
                        <div className="bg-light p-5 h-100 w-100">
                            <div className="bg-dark text-center text-primary-1 avatar avatar-md rounded-circle mb-4 icon mx-auto p-3">
                                <i className="fas fa-award"></i>
                            </div>
                            <h2 className="text-dark aboutTitle">Expertise & Experience</h2>
                            <p className="text-muted description">
                                With over 15 years of experience, we create beautiful and functional spaces tailored to your needs and preferences. We'll work with you to craft a space that exceeds your expectations.
                            </p>
                        </div>
                    </Col>

                    
                    <Col md={4} xs={12} className="p-0 text-center">
                        <div className="bg-primary-1 p-5 h-100 w-100">
                            <div className="bg-dark text-center text-primary-1 avatar avatar-md rounded-circle mb-4 icon mx-auto p-3">
                                <i className="fas fa-user"></i>
                            </div>
                            <h2 className="text-dark aboutTitle">Client-Centric Approach / Unique Value</h2>
                            <p className="text-muted description">
                                We take a client-centric approach to every project, ensuring that our unique value proposition is tailored to meet your specific needs and goals.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
>>>>>>> 71747abb303e7a8da108d2208f0b3a9e4c7226f0
