import React, {useState, useEffect} from 'react'
// import React from 'react';
import axios from "axios";

import {Table, Modal, Button, Form} from 'react-bootstrap';

const Category = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name, setName] = useState('');
    const [image, setImage] = useState('');

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // Handling the name change
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };

    // // Handling the image change
    // const handleImage = (e) => {
    //     setImage(e.target.value);
    //     setSubmitted(false);
    // };


    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '') {
            setError(true);
        } else {

            axios.post(`http://127.0.0.1:8000/api/new-category`, {
                name,
            })
                .then(res => {
                    handleClose();
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                })
            //
        }
    };

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/categories`)
            .then((response) => {
                setCategories(response.data);
            })
    }, [])

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h1>Please enter all the fields</h1>
            </div>
        );
    };
    return (
        <div>
            <div className="container">
                <Button variant="primary" onClick={handleShow}>
                    Add Category
                </Button>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {categories.map((category) => {
                        return (
                            <tr  key={category.id}>
                                <td>{category.id}</td>
                                <td>{category.name}</td>
                                <td>Action</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> Add New Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label> Category Name</Form.Label>
                            <Form.Control value={name} onChange={handleName} type="text" placeholder="category name"
                                          name="name"
                                          className="form-control"/>
                        </Form.Group>
                        {/*<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">*/}
                        {/*    <Form.Label> Category Image</Form.Label>*/}
                        {/*    <Form.Control value={image}  onChange={handleImage} type="file"  name="image" className="form-control" />*/}
                        {/*</Form.Group>*/}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={handleSubmit} type='submit'>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>


        </div>
    );
};

export default Category;
