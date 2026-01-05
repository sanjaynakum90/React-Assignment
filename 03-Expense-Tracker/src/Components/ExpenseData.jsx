import { Card, Row, Col, Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const ExpenseData = () => {
    const expenseData = useSelector((state) => state.expense.expense)


    const credit = expenseData.filter((l) => l.type === "credit").reduce((acc, curr) => {

        acc = acc + Number(curr.amount)

        return acc
    }, 0)


    const debit = expenseData.filter((l) => l.type === "debit").reduce((acc, curr) => {

        acc = acc + Number(curr.amount)

        return acc
    }, 0)

    const balance = credit - debit


    return (
        <Container className="">
            <Row className="my-4 text-center">
                <Col xs={4} className="mb-2">
                    <Card className="p-3 text-center shadow-sm h-100">
                        <h5>Total Credit</h5>
                        <h2 className="text-success">{credit}</h2>
                    </Card>
                </Col>

                <Col xs={4} className="mb-2">
                    <Card className="p-3 text-center shadow-sm h-100">
                        <h5>Total Debit</h5>
                        <h2 className="text-danger">{debit}</h2>
                    </Card>
                </Col>

                <Col xs={4} className="mb-2">
                    <Card className="p-3 text-center shadow-sm h-100">
                        <h5>Balance</h5>
                        <h2>{balance}</h2>
                    </Card>
                </Col>
            </Row>
        </Container >
    );
};

export default ExpenseData;