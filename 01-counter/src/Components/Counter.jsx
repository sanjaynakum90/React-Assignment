import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);
    const [input, setInput] = useState(0);

    useEffect(() => {
        console.log("Count updated:", count);
    }, [count]);

    const increment = () => setCount(prev => prev + step);
    const decrement = () => setCount(prev => prev - step);
    const reset = () => setCount(0);

    const handleStepChange = (e) => {
        const value = Number(e.target.value);
        if (value >= 1) setStep(value);
    };

    const handleInput = (e) => {
        setInput(Number(e.target.value));
    };

    const incrementByInput = () => {
        setCount(prev => prev + input);
    };

    const decrementByInput = () => {
        setCount(prev => prev - input);
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Card className="p-4 shadow-lg" style={{ width: "380px", borderRadius: "20px" }}>
                <h2 className="text-center mb-4">📊 Counter</h2>

                <h1 className="text-center display-3 mb-3">{count}</h1>

                <Row className="text-center mb-3">
                    <Col>
                        <Button variant="danger" className="w-100" onClick={decrement}>
                            −
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="secondary" className="w-100" onClick={reset}>
                            Reset
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="success" className="w-100" onClick={increment}>
                            +
                        </Button>
                    </Col>
                </Row>

                <Form.Group className="mb-3">
                    <Form.Label>Step Value</Form.Label>
                    <Form.Control
                        type="number"
                        min="1"
                        value={step}
                        onChange={handleStepChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Custom Increment / Decrement</Form.Label>
                    <Form.Control
                        type="number"
                        min="0"
                        value={input}
                        onChange={handleInput}
                    />
                </Form.Group>

                <Row>
                    <Col>
                        <Button variant="primary" className="w-100" onClick={incrementByInput}>
                            Increment by Input
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="warning" className="w-100" onClick={decrementByInput}>
                            Decrement by Input
                        </Button>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
};

export default Counter;
