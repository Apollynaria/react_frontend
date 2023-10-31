import React, { useState } from 'react';
import http from "../../http-common";
import { Navigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AddCategory() {
    const [name, setName] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            name: name,
        };
        http
            .post("/addCategory", data)
            .then(() => {
                setSubmitted(true);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return !submitted ? (
        <form onSubmit={handleSubmit}>
            <Form.Group>
                <Row>
                <Form.Label>Создание новой категории</Form.Label>
                    <Col>
                        <Form.Control
                            required
                            name="name"
                            value={name}
                            placeholder="Наименование категории"
                            onChange={handleChange}
                            type="text"
                        />
                    </Col>
                    <Col>
                        <Button variant="success" type="submit">Добавить</Button>{''}
                    </Col>
                </Row>
            </Form.Group>
        </form>
    ) : (
        <Navigate to="/listCategories" />
    );
}

export default AddCategory;