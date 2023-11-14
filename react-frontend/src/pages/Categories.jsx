import React from 'react';
import http from "../../http-common";
import { Link } from 'react-router-dom';
import Category from '../components/category/Category';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { useCategories } from './Categories.context';


function Categories() {
  const categories = useCategories();

  return (
    <div>
      <Link to="/addCategory">
        <Button variant="secondary" className='mb-2'>
          Добавить категорию
        </Button>
      </Link>
      <ListGroup>
        {categories.length > 0 ? (
          categories.map((category, index) => (
            <Link to={`/category/${category.id}`} param1={category.id} key={index}>
              <ListGroup.Item>
                <Category id={category.id} />
              </ListGroup.Item>
            </Link>
          ))
        ) : "Подождите, идёт загрузка данных"}
      </ListGroup>
    </div>
    //   <ListGroup>
    //     {list.length > 0 ? list : "Подождите, идёт загрузка данных"}
    //   </ListGroup>
  );
}

export default Categories;