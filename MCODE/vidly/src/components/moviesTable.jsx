import React, { Component } from 'react';
import Like from './common/like';

class MoviesTable extends Component {
  raiseSort = path => {
    const sortColum = { ...this.props.sortColum };
    if (sortColum.path === path)
      sortColum.order = sortColum.order === 'asc' ? 'desc' : 'asc';
    else {
      sortColum.path = path;
      sortColum.order = 'asc';
    }
    this.props.onSort(sortColum);
  };

  render() {
    const { movies, onDelete, onLike } = this.props;
    return (
      <table className="table">
        <thead>
          {movies.length > 0 && (
            <tr>
              <th onClick={() => this.raiseSort('title')}>Title</th>
              <th onClick={() => this.raiseSort('genre.name')}>Genre</th>
              <th onClick={() => this.raiseSort('numberInStock')}>Stock</th>
              <th onClick={() => this.raiseSort('dailyRentalRate')}>Rete</th>

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
                  <Like
                    liked={movie.liked}
                    onLikeToggle={() => onLike(movie)}
                  />
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
  }
}

export default MoviesTable;
