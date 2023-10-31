import React, { useState, useEffect } from 'react';
import http from "../../http-common";
import { Navigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CategoryData() {

    // useParams позволяет получить параметры из url
    const { id } = useParams();
    // Объявление состояния
    // category хранит состояние (имя задаётся разработчиком)
    // setCategory позволяет состояние изменять (имя задаётся разработчиком)
    const [category, setCategory] = useState({ // useState - стандартный метод для определения начального состояния
        id: id, // идентификатор из параметров
        name: "" // имя в начальном состоянии не заполняется
    });

    // Объявление состояния
    const [submitted, setSubmitted] = useState(false);

    // хук useEffect - аналог componentDidMount
    useEffect(() => {
        if (!id) {
            return;
        }

        function getCategory() {
            http.get("/category/" + id)
                .then(response => {
                    setCategory(prevCategory => ({
                        ...prevCategory,
                        name: response.data.name
                    }));
                })
                .catch(e => {
                    console.log(e);
                });
        }

        getCategory();
    }, [id]);


    function handleChange(event) {
        setCategory({
            ...category, // копируем все свойства объекта
            name: event.target.value // обновляем name
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        var data = {
            name: category.name
        };
        http
            .post("/updateCategory/" + category.id, data)
            .then(() => { // запрос выполнился успешно
                setSubmitted(true);
            })
            .catch(e => { // при выполнении запроса возникли ошибки
                console.log(e);
            });
    }

    function deleteCategory() {
        http
            .post("/deleteCategory/" + category.id)
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
                        value={category.name}
                        placeholder="Наименование"
                        onChange={handleChange}
                    />
                </Col>
                <Col>
                    <Button variant="primary" type="submit">Обновить</Button>{''}
                </Col>
            </Row>
        </Form.Group>
    </form>
        <Button variant="danger" className='mt-3' onClick={deleteCategory}>Удалить</Button>{''}
    </div>
        : <Navigate to="/listCategories" /> // автоматически переходим по ссылке
}

export default CategoryData;