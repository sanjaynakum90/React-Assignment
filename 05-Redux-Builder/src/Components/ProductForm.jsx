import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, updateProductData } from "../features/product/productSlice"

import { Container, Row, Col, Form, Card, Button } from "react-bootstrap"

const ProductForm = () => {

    const updateState = useSelector((state) => state.Product.updateState)

    const [product, setProduct] = useState({
        Name: "",
        Price: "",
        Quantity: "10",
        Category: "",

    })

    const Dispatch = useDispatch()

    useEffect(() => {
        if (updateState) {
            setProduct(updateState);
        }
    }, [updateState])

    const handleChange = (identiFier, e) => {
        setProduct((prev) => {
            return {
                ...prev,
                [identiFier]: e.target.value
            }
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (updateState) {
            Dispatch(updateProductData(product))

            setProduct({ Name: "", Price: "", Quantity: "", Category: "" });
        } else {

            Dispatch(
                addProduct({
                    id: new Date().getTime(),
                    ...product
                })
            )
            setProduct({ Name: "", Price: "", Quantity: "", Category: "" });

            alert("product added");
        }

    }


    return (
        <Container className='my-4 p-4 '>
            <Row>
                <Col>
                    <Card className='p-4 shadow'>
                        <h3 className='text-center'>Inventory System</h3>
                        <form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3 " >
                                <Form.Label>Name</Form.Label>
                                <Form.Control type='text' placeholder=" Enter Product Name..." value={product.Name} onChange={(e) => handleChange("Name", e)} />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Price</Form.Label>
                                <Form.Control type='number' placeholder="Enter Price" value={product.Price} onChange={(e) => handleChange("Price", e)} />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control type='number' placeholder="Enter Quantity" value={product.Quantity} onChange={(e) => handleChange("Quantity", e)} />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Category</Form.Label>
                                <Form.Control type='text' placeholder="Enter Category" value={product.Category} onChange={(e) => handleChange("Category", e)} />
                            </Form.Group>
                            <div className="text-center">
                                <Button type='submit' className='btn btn-primary '>
                                    {updateState ? "Update" : "Add Product"}
                                </Button>
                            </div>
                        </form>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductForm