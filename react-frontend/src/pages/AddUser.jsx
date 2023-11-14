import React, { useState } from 'react';
import http from "../../http-common";
import { Navigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AddUser() {
    const [user, setUser] = useState({ name: "", username: "", password: "" });
    const [submitted, setSubmitted] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            name: user.name,
            username: user.username,
            password: user.password,
        };
        http
            .post("/addUser", data)
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
                    <Form.Label>Создание нового пользователя</Form.Label>
                    <Col>
                        <Form.Control
                            required
                            type="text"
                            name="name"
                            value={user.name}
                            placeholder="Имя"
                            onChange={handleChange}
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            required
                            type="text"
                            name="username"
                            value={user.username}
                            placeholder="Логин"
                            onChange={handleChange}
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            required
                            type="password"
                            name="password"
                            value={user.password}
                            placeholder="Пароль"
                            onChange={handleChange}
                        />
                    </Col>
                    <Col>
                        <Button variant="success" type="submit">Добавить</Button>{''}
                    </Col>
                </Row>
            </Form.Group>
        </form>
    ) : (
        <Navigate to="/listUsers" />
    );
}

export default AddUser;