import React, { Component } from 'react';
import Like from './common/like';
import TableHeader from './common/tableHeader';
import TableBody from './common/tableBody';

class MoviesTable extends Component {
  columns = [
    { path: 'title', label: 'Title' },
    { path: 'genre.name', label: 'Genre' },
    { path: 'numberInStock', label: 'Stock' },
    { path: 'dailyRentalRate', label: 'Rate' },
    {
      key: 'Like',
      content: movie => (
        <Like
          liked={movie.liked}
          onLikeToggle={() => this.props.onLike(movie)}
        />
      ),
    },
    {
      key: 'Delete',
      content: movie => (
        <button
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onDelete(movie)}
        >
          Delete
        </button>
      ),
    },
  ];
  render() {
    const { movies, onSort, sortColumn } = this.props;
    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          onSort={onSort}
          sortColumn={sortColumn}
        />
        <TableBody data={movies} columns={this.columns} />
        {/* <tbody>
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
        </tbody> */}
      </table>
    );
  }
}

export default MoviesTable;
