import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Like from './common/like';
import Pagination from './common/Pagination';
class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 10,
  };

  handlDelete = movie => {
    this.setState({
      movies: this.state.movies.filter(s => s._id !== movie._id),
    });
  };
  handlLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlPageChange = page => {
    console.log(page);
  };

  render() {
    const { movies } = this.state;
    const { length: count } = this.state.movies;
    if (count === 0) return <p>There are no movie in the database</p>;

    return (
      <div>
        <p>Showing {count} movies in the database</p>
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
                    <Like
                      liked={movie.liked}
                      onLikeToggle={() => this.handlLike(movie)}
                    />
                  </td>
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
        <Pagination
          itemsCount={count}
          pageSize={this.state.pageSize}
          onPageChange={this.handlPageChange}
        />
      </div>
    );
  }
}

export default Movies;
