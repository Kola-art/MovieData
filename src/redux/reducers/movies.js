import { FETCH_MOVIES_SUCCESS, FETCH_GENRES_SUCCESS, SEARCH_MOVIE_SUCCESS, FETCH_MOVIE_SUCCESS } from '../actions';

export const initialState = {
  movies: [],
  totalCount: 0,
  limit: 20,
  genres: [],
  language: 'en',
};

export function moviesReducer (state = initialState, action ) {
  switch (action.type) {
  case FETCH_MOVIES_SUCCESS: 
    return{
      ...state,
      movies: [...action.payload.movies.results],
      totalCount: action.payload.movies.total_results,
      language: action.payload.language,
    };
  case FETCH_MOVIE_SUCCESS: 
    return{
      ...state,
      movie: action.payload,
    };
  case SEARCH_MOVIE_SUCCESS: 
    return{
      ...state,
      movies: [...action.payload.results],
      totalCount: action.payload.total_results
    };
  case FETCH_GENRES_SUCCESS:
    return {
      ...state,
      genres: [...action.payload]
    };
  default: return state;
  }
}