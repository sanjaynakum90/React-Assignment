import { Table, Button, Container, Form, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const ExpenseList = () => {
    const dispatch = useDispatch()

    const expenses = useSelector((state) => state.expense.expense)



    return (
        <>
            <Container className="my-3">
                <h4>Filters</h4>

                <Form>
                    <Row className="gy-2">
                        <Col md={3}>
                            <Form.Control type="text" placeholder="Search title..." />
                        </Col>

                        <Col md={3}>
                            <Form.Select>
                                <option value="all">All Types</option>
                                <option value="credit">Credit</option>
                                <option value="debit">Debit</option>
                            </Form.Select>
                        </Col>

                        <Col md={3}>
                            <Form.Select>
                                <option value="all">All Categories</option>
                                <option value="general">General</option>
                                <option value="travel">Travel</option>
                                <option value="food">Food</option>
                                <option value="shopping">Shopping</option>
                            </Form.Select>
                        </Col>

                        <Col md={3}>
                            <Form.Select>
                                <option value="latest">Latest</option>
                                <option value="oldest">Oldest</option>
                                <option value="ascending">Money Ascending</option>
                                <option value="descending">Money Descending</option>
                            </Form.Select>
                        </Col>
                    </Row>
                </Form>
            </Container>

            <Container>
                <h3 className="my-3">Expense List</h3>

                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Amount</th>
                            <th>Type</th>
                            <th>Category</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {expenses.map((l) => (
                            <tr key={l.id}>
                                <td>{l.title}</td>
                                <td>{l.amount}</td>
                                <td>{l.type}</td>
                                <td>{l.category}</td>

                                <td>
                                    <Button variant="warning">
                                        Edit
                                    </Button>
                                </td>

                                <td>
                                    <Button variant="danger">
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    );
};

export default ExpenseList;