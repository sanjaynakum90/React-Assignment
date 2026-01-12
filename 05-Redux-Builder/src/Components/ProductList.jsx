import { useDispatch, useSelector } from 'react-redux'

import { FaBoxOpen } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { AiOutlineProduct } from "react-icons/ai";

import { Button, Table, Container, Row, Col, Card } from "react-bootstrap"
import { deleteProduct, setUpdateState } from '../features/product/productSlice';

const ProductList = () => {

    const Products = useSelector((state) => state.Product.product)


    console.log("peo", Products)

    const Dispatch = useDispatch()

    console.log("data", Products);


    return (

        <>
            <Container>
                <Row>
                    <Col>
                        {Products.length == 0 ?
                            (
                                <Container >
                                    <Card className='my-3 p-3 shadow'>
                                        <div className="text-center"><FaBoxOpen fontSize={50} /></div>
                                        <p className='text-center fs-4'>No Data Found</p>
                                        <span className='text-center'>Please Enter the Product Data.....</span>
                                    </Card>


                                </Container>
                            ) : (
                                <Table striped bordered hover shadow>
                                    <thead>
                                        <tr className='table-dark'>
                                            <td>Id</td>
                                            <td>Name</td>
                                            <td>Price</td>
                                            <td>Quantity</td>
                                            <td>Category</td>
                                            <td>Total price</td>
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
                                                <td>{prod.Quantity * prod.Price}</td>
                                                <td>
                                                    {
                                                        <Button variant='outline-warning' onClick={() => Dispatch(setUpdateState(prod))}>
                                                            <MdEdit fontSize={18} />
                                                        </Button>
                                                    }
                                                </td>

                                                <td>
                                                    {

                                                        <Button variant='outline-danger' onClick={() => Dispatch(deleteProduct(prod.id))}>
                                                            <MdDelete fontSize={18} />
                                                        </Button>
                                                    }
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>

                                </Table >
                            )}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ProductList