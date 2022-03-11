export const FETCH_MOVIES_SUCCESS = 'fetch movies success';
export const SEARCH_MOVIE_SUCCESS = 'search movie';
export const FETCH_GENRES_SUCCESS = 'fetch genre success';

export const fetchMoviesSucces = (movies, language) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: { movies, language }
});

export const searchMoviesSucces = (movie) => ({
  type: SEARCH_MOVIE_SUCCESS,
  payload: movie
});

export const fetchGenresSucces = (genres) => ({
  type: FETCH_GENRES_SUCCESS,
  payload: genres
});