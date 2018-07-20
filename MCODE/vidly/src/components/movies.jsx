import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Like from './common/like';
import Pagination from './common/Pagination';
import { paginate } from '../utils/paginate';
import ListGroup from './common/listgroup';
class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
  };

  componentDidMount() {
    const genres = [{ name: 'All Genres' }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

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
    this.setState({ currentPage: page });
  };

  handlGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };
  render() {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
    } = this.state;
    const fitered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(c => c.genre._id === selectedGenre._id)
        : allMovies;
    const movies = paginate(fitered, currentPage, pageSize);
    const { length: count } = fitered;
    if (count === 0) return <p>There are no movie in the database</p>;

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handlGenreSelect}
          />
        </div>
        <div className="col">
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
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlPageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
