import React, { useReducer } from 'react';
import http from "../../http-common";
import { Navigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { categoryReducer, initialState } from './AddCategory.state';

function AddCategory() {
    const [state, dispatch] = useReducer(categoryReducer, initialState);

    const handleChange = (event) => {
        dispatch({ type: 'CHANGE_NAME', payload: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            name: state.name,
        };
        http
            .post("/addCategory", data)
            .then(() => {
                dispatch({ type: 'SUBMIT_SUCCESS' });
            })
            .catch((e) => {
                dispatch({ type: 'SUBMIT_ERROR', payload: e });
            });
    };

    const { name, submitted, error } = state;

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
                        <Button variant="success" type="submit">Добавить</Button>
                        {error && <p>Произошла ошибка при добавлении категории: {error.message}</p>}
                    </Col>
                </Row>
            </Form.Group>
        </form>
    ) : (
        <Navigate to="/listCategories" />
    );
}

export default AddCategory;