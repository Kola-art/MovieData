export const FETCH_MOVIE_SUCCESS = 'fetch movie success';

export const fetchMovieSucces = (movie) => ({
  type: FETCH_MOVIE_SUCCESS,
  payload: movie
});