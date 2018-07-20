import React from 'react';
import Like from './common/like';
const MoviesTable = props => {
  const { movies, onDelete, onLike } = props;
  return (
    <table className="table">
      <thead>
        {movies.length > 0 && (
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rete</th>
            <th />
            <th />
          </tr>
        )}
      </thead>
      <tbody>
        {movies &&
          movies.map(movie => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like liked={movie.liked} onLikeToggle={() => onLike(movie)} />
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(movie)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
