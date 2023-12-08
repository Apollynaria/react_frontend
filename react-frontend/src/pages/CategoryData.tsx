import React, { useState, useReducer, useContext, useEffect, ChangeEvent, FormEvent} from 'react';

import http from "../../http-common";
import {CategoryContext, useCategories} from './Categories.context';

import { Navigate, useParams } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CategoryData() {

    // useParams позволяет получить параметры из url
    const { id } = useParams();

    const { categories } = useCategories();

    const categoryContext = useContext(CategoryContext);
    const { updateCategories } = categoryContext;

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

        const value = categories.find((item) => item.id.toString() === id);
        if (value){
            setCategory({
                ...value,
                id: value.id.toString()
            });
        }
    }, [categories]);


    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCategory({
            ...category, // копируем все свойства объекта
            name: event.target.value // обновляем name
        });
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        var data = {
            name: category.name
        };
        try {
            await http.post("/updateCategory/" + category.id, data);
            setSubmitted(true);
            updateCategories();
        } catch (error) {
            console.log(error);
        }
    }

    const deleteCategory = async () => {
        try {
            await http.post("/deleteCategory/" + category.id);
            setSubmitted(true);
            updateCategories();
        } catch (error) {
            console.log(error);
        }
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