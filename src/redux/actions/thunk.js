import { getMovies, getGenre, searchMovie, getMovie } from '../../api';
import { fetchMoviesSucces, fetchGenresSucces, searchMoviesSucces } from './moviesActions';
import { fetchMovieSucces } from './movieActions';

export const fetchMovies = (language, sortParam, page, genres) => {
  return async(dispatch) => {
    let movies = await Promise.resolve(getMovies(language, sortParam, page, genres));
    dispatch(fetchMoviesSucces(movies, language));
  };
};

export const searchMovies = (movieName, language, page) => {
  return async(dispatch) => {
    let movies = await Promise.resolve(searchMovie(movieName, language, page));
    dispatch(searchMoviesSucces(movies));
  };
};

export const fetchGenres = (language) => {
  return async(dispatch) => {
    let genres = await Promise.resolve(getGenre(language));
    dispatch(fetchGenresSucces(genres));
  };
};

export const fetchMovie = (movieId, language) => {
  return async(dispatch) => {
    let movie = await Promise.resolve(getMovie(movieId, language));
    dispatch(fetchMovieSucces(movie));
  };
};
