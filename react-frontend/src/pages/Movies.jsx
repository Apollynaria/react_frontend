import React, { useEffect, useState } from 'react';
import { KinopoiskDev } from '@openmoviedb/kinopoiskdev_client';
const kp = new KinopoiskDev('S3VAYG5-7CF4R05-Q7JHC9S-C3MP859');
import { Navigate, useParams } from 'react-router-dom';
import MovieItem from '../components/movie/Movie';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Movies() {
    const [movies, setMovies] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getRelatedWithoutQueryBuilderMovies = async (query) => {
            const { data, error, message } = await kp.movie.getByFilters(query);
            setMovies(data.docs);
        };

        let query = '';
        switch(id){
            case '1':
                query = {
                    'selectFields': ['id', 'name', 'rating', 'poster', 'year'],
                    'name': '!null',
                    'year': '2020-2023',
                    'rating.kp': '7.5-10',
                    'poster.url': '!null',
                    'sortField': 'rating.kp',
                    'sortType': '-1',
                    'page': 1,
                    'limit': 10,
                };
            break;

            case '2':
                query = {
                    'selectFields': ['id', 'name', 'rating', 'poster', 'year'],
                    'name': '!null',
                    'year': '2020-2023',
                    'rating.kp': '7.5-10',
                    'poster.url': '!null',
                    'sortField': 'year.kp',
                    'sortType': '-1',
                    'page': 1,
                    'limit': 10,
                }
            break;

            case '3':
                query = {
                    'selectFields': ['id', 'name', 'rating', 'poster', 'year'],
                    'year': '2017-2018',
                    'rating.kp': '7.5-10',
                    'poster.url': '!null',
                    'sortField': 'rating.kp',
                    'sortType': '-1',
                    'page': 3,
                    'limit': 10,
                };
            break;

            case '4':
                query = {
                    'selectFields': ['id', 'name', 'rating', 'poster', 'year'],
                    'year': '2018-2019',
                    'rating.kp': '7.5-10',
                    'poster.url': '!null',
                    'sortField': 'rating.kp',
                    'sortType': '-1',
                    'page': 10,
                    'limit': 10,
                };
            break;

            
        }
        getRelatedWithoutQueryBuilderMovies(query);
        
    }, []);

    return (
        <div>
            <Container fluid>
                <Row>
                    {movies.map((movie) => (
                        <Col sm={3} className='p-3'><MovieItem key={movie.id} movie={movie} /></Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Movies;