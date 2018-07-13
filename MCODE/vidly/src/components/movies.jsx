import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handlDelete = movie => {
    this.setState({
      movies: this.state.movies.filter(s => s._id !== movie._id),
    });
  };

  render() {
    const { movies } = this.state;
    if (movies.length === 0) return <p>There are no movie in the database</p>;

    return (
      <div>
        <p>Showing {this.state.movies.length} movies in the database</p>
        <table className="table">
          <thead>
            {movies.length > 0 && (
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rete</th>
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
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => this.handlDelete(movie)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
