export const API_URL = 'https://api.themoviedb.org/3';
export const API_KEY_3 = 'fed3f224689aa424f5f7c4d2d9f703be';
export const API_KEY_4 = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWQzZjIyNDY4OWFhNDI0ZjVmN2M0ZDJkOWY3MDNiZSIsInN1YiI6IjYxNTIxNjMyNjdkY2M5MDAyYTYzNGU2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PU-xnfwBSJnU06bJfJopdi1XPrHXU8VtniVUQxpMcbM';

export function getMovies(language, sortParam, page, genres) {
  const link = `${API_URL}/discover/movie?api_key=${API_KEY_3}&language=${language}&sort_by=${sortParam}&page=${page}&with_genres=${genres}`;
  let data = fetch(link).then(response => response.json())
    .then(data => {
      return data;
    }
    );
  return data;
}

export function searchMovie(movieName, language, page) {
  const movielink = `${API_URL}/search/movie?api_key=${API_KEY_3}&language=${language}&query=${movieName}&page=${page}`;
  let movie = fetch(movielink).then(response => response.json())
    .then(data => {
      return data;
    }
    );
  return movie;
}

export function getGenre(language) {
  const link = `${API_URL}/genre/movie/list?api_key=${API_KEY_3}&language=${language}`;
  let genres = fetch(link).then(response => response.json())
    .then(data => {
      return data.genres;
    }
    );
  return genres;
}