import { useState } from "react";
import { Row, Col, Form, Button, Card, Container } from "react-bootstrap";
import { useDispatch } from "react-redux"


const ExpenseForm = () => {

    const dispatch = useDispatch()

    const [input, setInput] = useState({
        title: "",
        amount: "",
        type: "debit",
        category: "",
    });


    const handleChange = (identifire, e) => {
        setInput({
            ...input,
            [identifire]: e.target.value
        })

    }

    const handleSubmit = () => {
        e.prevntDefault()



        setInput({ title: "", amount: "", type: "debit", category: "" });
    }



    return (
        <>
            <Container className="mt-4 p-4">
                <Row>
                    <Col md={12}>
                        <Card md={12} className="p-4 shadow-lg mb-4">
                            <h4 className="mb-3"> Add Expense</h4>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                        value={input.title}
                                        onChange={(e) => handleChange("title", e)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Amount</Form.Label>
                                    <Form.Control
                                        type="number"
                                        value={input.amount}
                                        onChange={(e) => handleChange("amount", e)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Type</Form.Label>
                                    <Form.Select
                                        value={input.type}
                                        onChange={(e) => handleChange("type", e)}
                                    >
                                        <option value="debit">Debit</option>
                                        <option value="credit">Credit</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Category</Form.Label>
                                    <Form.Select
                                        value={input.category}
                                        onChange={(e) => handleChange("category", e)}
                                    >
                                        <option value="">Select</option>
                                        <option value="general">General</option>
                                        <option value="travel">Travel</option>
                                        <option value="food">Food</option>
                                        <option value="shopping">Shopping</option>
                                    </Form.Select>
                                </Form.Group>

                                <Button type="submit" variant="primary" className="w-100">
                                    Add
                                </Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ExpenseForm