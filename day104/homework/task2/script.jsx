import React from 'react';

const MovieList = () => {
  const arrMovieNames = ['Inception', 'The Matrix', 'Interstellar', 'Avatar', 'Titanic'];

  return (
    <ul>
      {arrMovieNames.map((movie, index) => (
        <li key={index}>{movie}</li>
      ))}
    </ul>
  );
};

export default MovieList;
