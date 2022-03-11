import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import defaultMovieImage from '../assets/images/defaultMovie.jpg';
import MovieDescr from '../components/Main/Movie/MovieDescr';

const styles ={
  container: {
    display: 'flex',
    flexWrap: 'warp',
    justifyContent: 'space-between'
  }
};

function MoviePage() {
  const { movie } = useSelector(state => state.movies);
  console.log(movie);
  if(movie) {
    const imagePath = movie.backdrop_path || movie.poster_path;
    return (
      <>
        <CssBaseline />
        <Container maxWidth="lg" sx={styles.container}>
          <Box component='div'>
            <img src= {imagePath ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}` 
              : defaultMovieImage } />
          </Box>
          <MovieDescr movie={movie} />
        </Container>
      </>
    );
  }
  return <></>;
}

export default MoviePage;