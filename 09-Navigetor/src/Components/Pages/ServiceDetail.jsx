import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge, ListGroup } from 'react-bootstrap';
import './ServiceDetail.css';

const ServiceDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Service data (matches the data from Services.jsx)
    const services = {
        1: {
            title: 'Web Development',
            icon: 'bi-code-slash',
            color: 'primary',
            description: 'Custom web applications built with modern technologies and best practices.',
            fullDescription: 'We create modern, scalable web applications using cutting-edge technologies. Our team specializes in building responsive, user-friendly websites that not only look great but also perform exceptionally well. From simple landing pages to complex enterprise applications, we deliver solutions tailored to your specific needs.',
            features: ['React.js', 'Node.js', 'Responsive Design', 'API Integration'],
            benefits: [
                'Fast loading times and optimal performance',
                'SEO-friendly architecture',
                'Cross-browser compatibility',
                'Scalable and maintainable code',
                'Modern UI/UX design'
            ],
            technologies: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs', 'GraphQL'],
            pricing: 'Starting from $2,999'
        },
        2: {
            title: 'UI/UX Design',
            icon: 'bi-palette',
            color: 'success',
            description: 'Beautiful and intuitive user interfaces that enhance user experience.',
            fullDescription: 'Our design team creates beautiful, intuitive interfaces that users love. We follow a user-centered design approach, combining aesthetics with functionality to deliver experiences that engage and delight your audience.',
            features: ['Wireframing', 'Prototyping', 'User Research', 'Design Systems'],
            benefits: [
                'Increased user engagement',
                'Higher conversion rates',
                'Improved user satisfaction',
                'Consistent brand experience',
                'Data-driven design decisions'
            ],
            technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Framer'],
            pricing: 'Starting from $1,999'
        },
        3: {
            title: 'Mobile Development',
            icon: 'bi-phone',
            color: 'info',
            description: 'Native and cross-platform mobile applications for iOS and Android.',
            fullDescription: 'Build powerful mobile applications that work seamlessly across iOS and Android platforms. We develop high-performance mobile apps using the latest frameworks and technologies, ensuring your app provides a native-like experience for all users.',
            features: ['React Native', 'Flutter', 'iOS', 'Android'],
            benefits: [
                'Single codebase for multiple platforms',
                'Native-like performance',
                'Faster time to market',
                'Cost-effective development',
                'Easy maintenance and updates'
            ],
            technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS Amplify'],
            pricing: 'Starting from $4,999'
        },
        4: {
            title: 'Cloud Solutions',
            icon: 'bi-cloud',
            color: 'warning',
            description: 'Scalable cloud infrastructure and deployment solutions.',
            fullDescription: 'Leverage the power of cloud computing to scale your applications efficiently. We provide comprehensive cloud solutions including infrastructure setup, deployment automation, monitoring, and optimization for major cloud platforms.',
            features: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
            benefits: [
                'Scalable infrastructure',
                'High availability and reliability',
                'Cost optimization',
                'Automated deployments',
                'Enhanced security'
            ],
            technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitLab CI/CD'],
            pricing: 'Starting from $3,499'
        },
        5: {
            title: 'E-Commerce',
            icon: 'bi-cart',
            color: 'danger',
            description: 'Complete e-commerce solutions with payment integration and inventory management.',
            fullDescription: 'Build a complete online store with our comprehensive e-commerce solutions. We integrate secure payment gateways, inventory management systems, and analytics to help you run a successful online business.',
            features: ['Shopping Cart', 'Payment Gateway', 'Inventory', 'Analytics'],
            benefits: [
                'Secure payment processing',
                'Real-time inventory tracking',
                'Customer management',
                'Sales analytics and reporting',
                'Mobile-responsive design'
            ],
            technologies: ['Shopify', 'WooCommerce', 'Magento', 'Stripe', 'PayPal', 'Square'],
            pricing: 'Starting from $3,999'
        },
        6: {
            title: 'Consulting',
            icon: 'bi-chat-dots',
            color: 'secondary',
            description: 'Expert technical consulting to help you make the right technology decisions.',
            fullDescription: 'Get expert guidance on your technology strategy and implementation. Our consultants bring years of experience to help you make informed decisions, improve your development processes, and achieve your business goals.',
            features: ['Architecture', 'Strategy', 'Code Review', 'Training'],
            benefits: [
                'Expert technical guidance',
                'Best practices implementation',
                'Risk mitigation',
                'Team skill development',
                'Long-term strategic planning'
            ],
            technologies: ['Various based on project needs'],
            pricing: 'Starting from $199/hour'
        }
    };

    const service = services[id];

    if (!service) {
        return (
            <Container className="py-5 text-center">
                <h2>Service Not Found</h2>
                <Button as={Link} to="/services" variant="primary" className="mt-3">
                    Back to Services
                </Button>
            </Container>
        );
    }

    return (
        <div className="service-detail-page page-container">
            <Container>
                {/* Back Button */}
                <Button
                    variant="outline-secondary"
                    className="mb-4"
                    onClick={() => navigate(-1)}
                >
                    <i className="bi bi-arrow-left me-2"></i>
                    Back to Services
                </Button>

                {/* Service Header */}
                <Row className="mb-5">
                    <Col>
                        <div className="d-flex align-items-center mb-3">
                            <div className={`service-detail-icon text-${service.color} me-3`}>
                                <i className={`bi ${service.icon}`} style={{ fontSize: '3rem' }}></i>
                            </div>
                            <div>
                                <h1 className="display-5 mb-0">{service.title}</h1>
                                <Badge bg={service.color} className="mt-2">{service.pricing}</Badge>
                            </div>
                        </div>
                        <p className="lead">{service.description}</p>
                    </Col>
                </Row>

                <Row>
                    {/* Main Content */}
                    <Col lg={8} className="mb-4">
                        <Card className="shadow-sm mb-4">
                            <Card.Body>
                                <h3 className="mb-3">Overview</h3>
                                <p className="text-muted">{service.fullDescription}</p>
                            </Card.Body>
                        </Card>

                        <Card className="shadow-sm mb-4">
                            <Card.Body>
                                <h3 className="mb-3">Key Benefits</h3>
                                <ListGroup variant="flush">
                                    {service.benefits.map((benefit, index) => (
                                        <ListGroup.Item key={index} className="border-0 ps-0">
                                            <i className="bi bi-check-circle-fill text-success me-2"></i>
                                            {benefit}
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </Card.Body>
                        </Card>

                        <Card className="shadow-sm">
                            <Card.Body>
                                <h3 className="mb-3">Technologies We Use</h3>
                                <div className="d-flex flex-wrap gap-2">
                                    {service.technologies.map((tech, index) => (
                                        <Badge key={index} bg="light" text="dark" className="p-2">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Sidebar */}
                    <Col lg={4}>
                        <Card className="shadow-sm mb-4">
                            <Card.Body>
                                <h4 className="mb-3">What's Included</h4>
                                <ListGroup variant="flush">
                                    {service.features.map((feature, index) => (
                                        <ListGroup.Item key={index} className="border-0 ps-0">
                                            <i className={`bi bi-check2 text-${service.color} me-2`}></i>
                                            {feature}
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </Card.Body>
                        </Card>

                        <Card className={`shadow-sm bg-${service.color} text-white`}>
                            <Card.Body className="text-center">
                                <h4 className="mb-3">Ready to Get Started?</h4>
                                <p className="mb-4">
                                    Let's discuss how we can help bring your project to life.
                                </p>
                                <Button
                                    as={Link}
                                    to="/contact"
                                    variant="light"
                                    size="lg"
                                    className="w-100"
                                >
                                    <i className="bi bi-envelope me-2"></i>
                                    Contact Us
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ServiceDetail;