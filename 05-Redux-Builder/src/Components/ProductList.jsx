import { useSelector } from 'react-redux'

import { FaBoxOpen } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { AiOutlineProduct } from "react-icons/ai";

import { Button, Table, Container, Row, Col } from "react-bootstrap"

const ProductList = () => {

    const Products = useSelector((state) => state.Product.product)

    console.log("data", Products);


    return (

        <>
            <Container>
                <Row>
                    <Col>
                        <Table>
                            <thead>
                                <tr className='table-dark'>
                                    <td>Id</td>
                                    <td>Name</td>
                                    <td>Price</td>
                                    <td>Quantity</td>
                                    <td>Category</td>
                                    <td colSpan={2}>Actions</td>
                                </tr>
                            </thead>

                            <tbody>
                                {Products.map((prod, index) => (
                                    <tr key={prod.id}>
                                        <td>{index + 1}</td>
                                        <td>{prod.Name}</td>
                                        <td>{prod.Price}</td>
                                        <td>{prod.Quantity}</td>
                                        <td>{prod.Category}</td>
                                        <td>
                                            {
                                                <Button className='outline-info'>
                                                    <MdEdit fontSize={18} />
                                                </Button>
                                            }
                                        </td>

                                        <td>
                                            {

                                                <Button className='outline-danger' >
                                                    <MdDelete fontSize={18} />
                                                </Button>
                                            }
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </Table >
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ProductList