import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Badge, ProgressBar, Alert } from "react-bootstrap";
import './event.css';

const ProductShowcase = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [email, setEmail] = useState("");
    const [rating, setRating] = useState(0);
    const [showNotification, setShowNotification] = useState(false);
    const [subscribed, setSubscribed] = useState(false);
    const [theme, setTheme] = useState("light");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [cartItems, setCartItems] = useState(0);

    const handleSearch = () => {
        if (searchQuery) {
            alert(`Searching for: ${searchQuery}`);
        } else {
            alert("Please enter a search term!");
        }
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setShowNotification(true);
            setTimeout(() => setShowNotification(false), 3000);
        }
    };

    const handleRating = (star) => {
        setRating(star);
        alert(`You rated ${star} stars!`);
    };

    const addToCart = () => {
        setCartItems(cartItems + 1);
        alert("Item added to cart!");
    };

    let categoryMessage;
    let categoryVariant;
    let categoryEmoji;

    if (selectedCategory === "electronics") {
        categoryMessage = "Electronics - Latest gadgets and technology";
        categoryVariant = "primary";
        categoryEmoji = "💻";
    } else if (selectedCategory === "fashion") {
        categoryMessage = "Fashion - Trendy styles and accessories";
        categoryVariant = "warning";
        categoryEmoji = "👗";
    } else if (selectedCategory === "home") {
        categoryMessage = "Home & Living - Comfort and decor";
        categoryVariant = "info";
        categoryEmoji = "🏠";
    } else {
        categoryMessage = "All Categories - Browse everything";
        categoryVariant = "secondary";
        categoryEmoji = "🛍️";
    }

    return (
        <div className={`showcase-container ${theme === "dark" ? "dark-theme" : ""}`}>
            <Container className="my-5">
                <div className="showcase-header">
                    <h1 className="showcase-title">
                        🛒 Product Showcase Platform
                    </h1>
                    <p className="showcase-subtitle">
                        Discover Amazing Products & Interactive Features
                    </p>
                    <Badge bg="info" className="cart-badge">
                        🛒 Cart Items: {cartItems}
                    </Badge>
                </div>

                {showNotification && (
                    <Alert variant="success" className="notification-alert">
                        ✅ Successfully subscribed to our newsletter!
                    </Alert>
                )}

                <Row className="g-4">
                    <Col md={6} className="fade-in-1">
                        <Card className="feature-card">
                            <Card.Body>
                                <Card.Title>
                                    <span className="card-emoji">🔍</span>
                                    Product Search
                                </Card.Title>
                                <p className="card-text">
                                    Search for your favorite products
                                </p>
                                <Form.Control
                                    className="search-input mb-3"
                                    type="text"
                                    placeholder="Search products..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <Button
                                    className="action-btn search-btn"
                                    onClick={handleSearch}
                                >
                                    Search Now 🚀
                                </Button>
                                {searchQuery && (
                                    <div className="info-box">
                                        🔎 Searching for: <strong>{searchQuery}</strong>
                                    </div>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} className="fade-in-2">
                        <Card className="feature-card">
                            <Card.Body>
                                <Card.Title>
                                    <span className="card-emoji">⭐</span>
                                    Rate Our Service
                                </Card.Title>
                                <p className="card-text">
                                    Click on stars to rate your experience
                                </p>
                                <div className="star-rating">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span
                                            key={star}
                                            className={`star ${star <= rating ? 'active' : ''}`}
                                            onClick={() => handleRating(star)}
                                        >
                                            ⭐
                                        </span>
                                    ))}
                                </div>
                                {rating > 0 && (
                                    <div className="info-box mt-3">
                                        Your Rating: <strong>{rating} / 5</strong> ⭐
                                    </div>
                                )}
                                <ProgressBar 
                                    now={(rating / 5) * 100} 
                                    variant="warning" 
                                    className="mt-3"
                                />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} className="fade-in-3">
                        <Card className="feature-card">
                            <Card.Body>
                                <Card.Title>
                                    <span className="card-emoji">📧</span>
                                    Newsletter Subscription
                                </Card.Title>
                                <p className="card-text">
                                    Subscribe to get exclusive offers
                                </p>
                                <Form onSubmit={handleSubscribe}>
                                    <Form.Control
                                        className="email-input mb-3"
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        disabled={subscribed}
                                    />
                                    <Button
                                        className={`action-btn ${subscribed ? 'subscribed-btn' : 'subscribe-btn'}`}
                                        type="submit"
                                        disabled={subscribed}
                                    >
                                        {subscribed ? "✓ Subscribed" : "Subscribe Now 📬"}
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} className="fade-in-4">
                        <Card className="feature-card">
                            <Card.Body>
                                <Card.Title>
                                    <span className="card-emoji">🛍️</span>
                                    Add to Cart
                                </Card.Title>
                                <p className="card-text">
                                    Add items to your shopping cart
                                </p>
                                <div className="product-preview">
                                    <div className="product-image">📦</div>
                                    <div className="product-info">
                                        <h6>Premium Product</h6>
                                        <p className="price">$99.99</p>
                                    </div>
                                </div>
                                <Button
                                    className="action-btn cart-btn"
                                    onClick={addToCart}
                                >
                                    Add to Cart 🛒
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={12} className="fade-in-5">
                        <Card className="feature-card">
                            <Card.Body>
                                <Card.Title>
                                    <span className="card-emoji">🎨</span>
                                    Advanced Features & Settings
                                </Card.Title>
                                <p className="card-text">
                                    Customize your experience with multiple options
                                </p>

                                <div className="settings-section">
                                    <h5 className="settings-header">
                                        🌓 Theme Settings
                                    </h5>
                                    <div className="theme-controls">
                                        <Button
                                            className={`theme-btn ${theme === "light" ? 'active-theme' : ''}`}
                                            onClick={() => setTheme("light")}
                                        >
                                            ☀️ Light Mode
                                        </Button>
                                        <Button
                                            className={`theme-btn ${theme === "dark" ? 'active-theme' : ''}`}
                                            onClick={() => setTheme("dark")}
                                        >
                                            🌙 Dark Mode
                                        </Button>
                                    </div>
                                </div>

                                <div className="section-divider"></div>

                                
                                <div className="category-section">
                                    <h5 className="settings-header">
                                        📁 Category Filter
                                    </h5>
                                    <div className="category-buttons">
                                        <Button
                                            className={`category-btn ${selectedCategory === "all" ? 'active-category' : ''}`}
                                            onClick={() => setSelectedCategory("all")}
                                        >
                                            🛍️ All
                                        </Button>
                                        <Button
                                            className={`category-btn ${selectedCategory === "electronics" ? 'active-category' : ''}`}
                                            onClick={() => setSelectedCategory("electronics")}
                                        >
                                            💻 Electronics
                                        </Button>
                                        <Button
                                            className={`category-btn ${selectedCategory === "fashion" ? 'active-category' : ''}`}
                                            onClick={() => setSelectedCategory("fashion")}
                                        >
                                            👗 Fashion
                                        </Button>
                                        <Button
                                            className={`category-btn ${selectedCategory === "home" ? 'active-category' : ''}`}
                                            onClick={() => setSelectedCategory("home")}
                                        >
                                            🏠 Home
                                        </Button>
                                    </div>
                                    <div style={{ marginTop: '20px' }}>
                                        <Badge
                                            bg={categoryVariant}
                                            className="category-info-badge"
                                        >
                                            {categoryEmoji} {categoryMessage}
                                        </Badge>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                
            </Container>
        </div>
    );
};

export default ProductShowcase;