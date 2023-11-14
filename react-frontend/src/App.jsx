import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import Header from './layout/Header'
import Categories from './pages/Categories'
import Users from './pages/Users'
import Movies from './pages/Movies'
import AddCategory from './pages/AddCategory'
import AddUser from './pages/AddUser'
import CategoryData from './pages/CategoryData'
import UserData from './pages/UserData'


import { CategoryProvider } from './pages/Categories.context';


class App extends React.Component {
    render() {
        return (

            <BrowserRouter>
                <Container fluid className="g-0">
                    <Row className="m-0 g-0 w-100">
                        <Row className="g-0">
                            <Col><Header /></Col>
                        </Row>
                        <Row className="g-0">
                            <Col md={3} className="p-3">
                                <Button variant="light" className='w-100 mb-2' href={`/listMovies/1`}>
                                    Фильмы с высоким рейтингом
                                </Button>
                                <Button variant="light" className='w-100 mb-2' href={`/listMovies/2`}>
                                    <ListGroup.Item>
                                        Новинки
                                    </ListGroup.Item>
                                </Button>
                                <Button variant="light" className='w-100 mb-2' href={`/listMovies/3`}>
                                    <ListGroup.Item>
                                        Что посмотреть сегодня?
                                    </ListGroup.Item>
                                </Button>
                                <Button variant="light" className='w-100 mb-2' href={`/listMovies/4`}>
                                    <ListGroup.Item>
                                        Что посмотреть завтра?
                                    </ListGroup.Item>
                                </Button>
                            </Col>

                            
                            <Col md={9} className="p-3">
                                <Routes>
                                    <Route path='/listCategories' element={<CategoryProvider><Categories /></CategoryProvider>} />
                                    <Route path='/listUsers' element={<Users />} />
                                    <Route path='/listMovies/:id' element={<Movies />} />
                                    <Route path='/addCategory' element={<AddCategory />} />
                                    <Route path='/addUser' element={<AddUser />} />
                                    <Route path="/category/:id" element={<CategoryData />} />
                                    <Route path="/user/:id" element={<UserData />} />
                                </Routes>
                            </Col>
                        </Row>
                    </Row>

                </Container>
            </BrowserRouter>
        );
    }
}
export default App;