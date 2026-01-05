import { Table, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteExpense, setEditExpense } from "../features/Expense/expenseSlice";

const ExpenseList = () => {
    const dispatch = useDispatch();
    const expenses = useSelector((state) => state.expense.expense);

    console.log("expenses", expenses);

    return (
        <Container className="my-4">
            <h3>Expense List</h3>

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
                    {expenses.map((item) => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.amount}</td>
                            <td>{item.type}</td>
                            <td>{item.category}</td>
                            <td>
                                <Button variant="warning" onClick={() => dispatch(setEditExpense(item))} >
                                    Edit
                                </Button>
                            </td>
                            <td>
                                <Button variant="danger" onClick={() => dispatch(deleteExpense(item.id))} >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}

                    {expenses.length === 0 && (
                        <tr>
                            <td colSpan="6" className="text-center">
                                No expenses found
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    );
};

export default ExpenseList;
