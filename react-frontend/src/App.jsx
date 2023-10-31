import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

import Header from './layout/Header'
import Categories from './pages/Categories'
import Users from './pages/Users'
import AddCategory from './pages/AddCategory'
import AddUser from './pages/AddUser'
import CategoryData from './pages/CategoryData'
import UserData from './pages/UserData'


class App extends React.Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Container fluid className="g-0">
                        <Row className="m-0 g-0 w-100">
                            <Row className="g-0">
                                <Col><Header /></Col>
                            </Row>
                            <Row className="g-0">
                                <Col md={3} className="p-3">
                                    <ListGroup>
                                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                    </ListGroup>
                                </Col>
                                <Col md={9} className="p-3">
                                    <Routes>
                                        <Route path='/listCategories' element={<Categories />} />
                                        <Route path='/listUsers' element={<Users />} />
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
            </>
        );
    }
}
export default App;