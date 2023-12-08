import React, { useReducer, useContext, ChangeEvent, FormEvent } from 'react';
import http from "../../http-common";
import { Navigate } from 'react-router-dom';
import { CategoryContext } from './Categories.context';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { categoryReducer, initialState } from './AddCategory.state';

function AddCategory() {
    const categoryContext = useContext(CategoryContext);

    const { updateCategories } = categoryContext;

    const [state, localDispatch] = useReducer(categoryReducer, initialState);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        localDispatch({ type: 'CHANGE_NAME', payload: event.target.value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = {
            name: state.name,
        };

        try {
            await http.post("/addCategory", data);
            localDispatch({ type: 'SUBMIT_SUCCESS' });
            updateCategories(); // Вызываем функцию обновления категорий
        } catch (error) {
            localDispatch({ type: 'SUBMIT_ERROR', payload: error });
        }
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