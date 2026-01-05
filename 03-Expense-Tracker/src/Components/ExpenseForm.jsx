import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExpense, updateExpense } from "../features/Expense/expenseSlice";

import { Form, Button, Card, Container } from "react-bootstrap";

const ExpenseForm = () => {
    const dispatch = useDispatch();
    const editItem = useSelector((state) => state.expense.editItem);

    const [input, setInput] = useState({
        title: "",
        amount: "",
        type: "debit",
        category: "",
    });

    useEffect(() => {
        if (editItem) {
            setInput(editItem);
        }
    }, [editItem]);

    const handleChange = (key, e) => {
        setInput({
            ...input,

            [key]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editItem) {
            dispatch(
                updateExpense({
                ...input,
            })
            )
        }
        else {
            dispatch(
                addExpense({
                    title: input.title,
                    amount: Number(input.amount),
                    type: input.type,
                    category: input.category,
                })
            );
        }

        setInput({ title: "", amount: "", type: "debit", category: "" });
    };

    return (
        <Container className="mt-4">
            <Card className="p-4 shadow">
                <h4>{editItem ? "Edit Expense" : "Add Expense"}</h4>

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control value={input.title} onChange={(e) => handleChange("title", e)} required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type="number" value={input.amount} onChange={(e) => handleChange("amount", e)} required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Type</Form.Label>
                        <Form.Select value={input.type} onChange={(e) => handleChange("type", e)}>
                            <option value="debit">Debit</option>
                            <option value="credit">Credit</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Category</Form.Label>
                        <Form.Select value={input.category} onChange={(e) => handleChange("category", e)} required >
                            <option value="">Select</option>
                            <option value="general">General</option>
                            <option value="travel">Travel</option>
                            <option value="food">Food</option>
                            <option value="shopping">Shopping</option>
                        </Form.Select>
                    </Form.Group>

                    <Button type="submit" className="w-100">
                        {editItem ? "Update Expense" : "Add Expense"}
                    </Button>
                </Form>
            </Card>
        </Container>
    );
};

export default ExpenseForm;
