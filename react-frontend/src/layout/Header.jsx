import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

class Header extends React.Component {
    render() {
        return (
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <Image className='img-header' src="https://celes.club/uploads/posts/2022-10/1666907888_27-celes-club-p-kot-v-solnechnikh-ochkakh-vkontakte-31.jpg" rounded />
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/listCategories">Список категорий</Nav.Link>
                            <Nav.Link href="/listUsers">Список пользователей</Nav.Link>
                            <Nav.Link href="/listMovies/1">Список фильмов</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}
export default Header;