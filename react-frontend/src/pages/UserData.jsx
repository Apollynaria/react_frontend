import React, { useState, useEffect } from 'react';
import http from "../../http-common";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Navigate, useParams } from 'react-router-dom';

function UserData() {

    // useParams позволяет получить параметры из url
    const { id } = useParams();
    // Объявление состояния
    // user хранит состояние (имя задаётся разработчиком)
    // setUser позволяет состояние изменять (имя задаётся разработчиком)
    const [user, setUser] = useState({ // useState - стандартный метод для определения начального состояния
        id: id, // идентификатор из параметров
        name: "", // имя в начальном состоянии не заполняется
        login: "",
        password: "",
    });

    // Объявление состояния
    const [submitted, setSubmitted] = useState(false);

    // хук useEffect - аналог componentDidMount
    useEffect(() => {
        if (!id) {
            return;
        }

        function getUser() {
            http.get("/user/" + id)
                .then(response => {
                    setUser(prevUser => ({
                        ...prevUser,
                        name: response.data.name,
                        login: response.data.username,
                        password: response.data.password,
                    }));
                })
                .catch(e => {
                    console.log(e);
                });
        }

        getUser();
    }, [id]);


    function handleChange(event) {
        setUser({
            ...user, // копируем все свойства объекта
            name: event.target.value // обновляем name

        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        var data = {
            name: user.name,
            login: user.login,
            password: user.password
        };
        http
            .post("/updateUser/" + user.id, data)
            .then(() => { // запрос выполнился успешно
                setSubmitted(true);
            })
            .catch(e => { // при выполнении запроса возникли ошибки
                console.log(e);
            });
    }

    function deleteUser() {
        http
            .post("/deleteUser/" + user.id)
            .then(() => { // запрос выполнился успешно
                setSubmitted(true);
            })
            .catch(e => { // при выполнении запроса возникли ошибки
                console.log(e);
            });
    }

    return !submitted ? <div><form onSubmit={handleSubmit}>
        <Form.Group>
            <Row>
                <Form.Label>Категория</Form.Label>
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
                        name="login"
                        value={user.login}
                        placeholder="Логин"
                        onChange={handleChange}
                    />
                </Col>
                <Col>
                    <Form.Control
                        required
                        type="password"
                        name="password"
                        value=""
                        placeholder="Новый пароль"
                        onChange={handleChange}
                    />
                </Col>
                <Col>
                    <Button variant="primary" type="submit">Обновить</Button>{''}
                </Col>
            </Row>
        </Form.Group>
    </form>
        <Button variant="danger" className='mt-3' onClick={deleteUser}>Удалить</Button>{''}
    </div>
        : <Navigate to="/listUsers" /> // автоматически переходим по ссылке
}

export default UserData;