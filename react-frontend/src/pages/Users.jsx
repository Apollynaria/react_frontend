import React, { useState, useEffect } from 'react';
import http from "../../http-common";
import { Link } from 'react-router-dom';
import User from '../components/user/User';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    http
      .get("/users")
      .then(response => {
        setUsers(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  const list = users.map((user, index) => (
    <Link to={`/user/${user.id}`} param1={user.id} key={index}>
      <ListGroup.Item>
        <User key={index} id={user.id} content={user.name} />
      </ListGroup.Item>
    </Link>
  ));

  return (
    <div>
      <Link to="/addUser">
        <Button variant="secondary" className='mb-2'>
          Добавить пользователя
        </Button>
      </Link>
      <ListGroup>
        {list.length > 0 ? list : "Подождите, идёт загрузка данных"}
      </ListGroup>
    </div>
  );
}

export default Users;