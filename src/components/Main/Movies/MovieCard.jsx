import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { fetchMovie } from '../../../redux/actions';
import defaultMovieImage from '../../../assets/images/defaultMovie.jpg';
import { useHistory } from 'react-router';

const styles = {
  cursor: 'pointer',
  ':hover': {
    color: 'lightBlue'
  },
  fontSize: '22px',
  fontWeight: 700
};

function MovieCard ({ movie }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const language = useSelector(state => state.movies.language);
  const imagePath = movie.backdrop_path || movie.poster_path;

  const handleClick = (id) => {
    dispatch(fetchMovie(id, language));
    history.push(`/movie/${id}`);
  };
 
  return (
    <Card sx={{height: '400px', display: 'flex', flexWrap: 'wrap'}}>
      <CardMedia component="img" alt="movie banner" sx={{height: '240px', objectFit: 'cover'}} 
        image={imagePath ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}` 
          : defaultMovieImage }
      />
      <CardContent sx={{alignSelf: 'flex-end'}}>
        <Typography gutterBottom variant="h5" component="div" sx={styles} onClick={ () => handleClick(movie.id)}>
          {movie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary"  >
          {movie.release_date}
        </Typography>
        <Rating name="customized-10" defaultValue={movie.vote_average} max={10} precision={0.5} readOnly />
      </CardContent>
    </Card>
  );

}
MovieCard.propTypes = {
  movie: PropTypes.object, 
};
export default MovieCard;