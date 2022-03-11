import { API_URL, API_KEY_3 } from './moviesApi';

export function getMovie(movieID, language) {
  const link = `${API_URL}/movie/${movieID}?&api_key=${API_KEY_3}&language=${language}`;
  let data = fetch(link).then(response => response.json())
    .then(data => {
      return data;
    }
    );
  return data;
}