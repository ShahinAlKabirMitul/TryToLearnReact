import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';
import { getGenres } from '../services/fakeGenreService';
import { getMovie } from '../services/fakeMovieService';
import { saveMovie } from './../services/fakeMovieService';
class MovieForm extends Form {
  state = {
    data: { title: '', genreId: '', numberInStock: '', dailyRentalRate: '' },
    genres: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string()
      .required()
      .label('Title'),
    genreId: Joi.string()
      .required()
      .label('Genre'),

    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label('Number In Stock'),

    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label('DailyRentalRate'),
  };

  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });
    const movieId = this.props.match.params.id;
    if (movieId === 'new') return;
    const movie = getMovie(movieId);
    if (!movie) return this.props.history.replace('/not-found');
    this.setState({ data: this.topToViewModel(movie) });
  }
  topToViewModel = movie => {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  };

  doSummit = () => {
    saveMovie(this.state.data);
    this.props.history.push('/movies');
  };
  render() {
    const { match, history } = this.props;
    return (
      <div>
        <h1>Movie Form</h1>
        {this.renderInput('title', 'Title')}
        {this.renderInput('numberInStock', 'Stock')}
        {this.renderInput('dailyRentalRate', 'Rate')}
        {this.renderButton('Save')}
      </div>
    );
  }
}

export default MovieForm;
