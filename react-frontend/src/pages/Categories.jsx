import React, { useState, useEffect } from 'react';
import http from "../../http-common";
import { Link } from 'react-router-dom';
import Category from '../components/category/Category';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';


function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    http
      .get("/categories")
      .then(response => {
        setCategories(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  const list = categories.map((category, index) => (
    <Link to={`/category/${category.id}`} param1={category.id} key={index}>
      <ListGroup.Item>
        <Category key={index} id={category.id} content={category.name} />
      </ListGroup.Item>
    </Link>
  ));

  return (
    <div>
      <Link to="/addCategory">
        <Button variant="secondary" className='mb-2'>
          Добавить категорию
        </Button>
      </Link>
      <ListGroup>
        {list.length > 0 ? list : "Подождите, идёт загрузка данных"}
      </ListGroup>
    </div>
  );
}

export default Categories;