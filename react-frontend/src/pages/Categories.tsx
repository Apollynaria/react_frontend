import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Category from '../components/category/Category';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import CategoryType from '../types/CategoryType';
import { useCategories } from './Categories.context';


function Categories() {
  const {categories} = useCategories();

    useEffect(() => {
        console.log(categories)
    }, [])

  return (
    <div>
      <Link to="/addCategory">
        <Button variant="secondary" className='mb-2'>
          Добавить категорию
        </Button>
      </Link>
      <ListGroup>
        {categories.length > 0 ? (
          categories.map((category: CategoryType) => (
            <Link to={`/category/${category.id}`} key={category.id}>
              <ListGroup.Item>
                <Category id={category.id} />
              </ListGroup.Item>
            </Link>
          ))
        ) : "Подождите, идёт загрузка данных"}
      </ListGroup>
    </div>
  );
}

export default Categories;