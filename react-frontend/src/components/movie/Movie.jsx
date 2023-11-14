import React from 'react';

function Movie({ movie }) {

    const imageStyle = {
        width: "160px",
        height: "200px",
    };

    return (
        <div className="movie-item d-flex row justify-content-center text-center align-self-center">
            <img src={movie.poster.previewUrl} style={imageStyle}/>
            <h5 className='mt-2'>{movie.name}</h5>
            <p>Год выпуска: {movie.year}
                <br/>
                Рейтинг на КиноПоиске: {movie.rating.kp}
            </p>
        </div>
    );
}
export default Movie;