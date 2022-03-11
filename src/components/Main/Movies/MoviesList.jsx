import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MovieCard from './MovieCard';

function MoviesList() {
  const movies = useSelector(state => state.movies.movies);
  return (
    <Box sx={{ flexGrow: 1, marginLeft: '20px' }}>
      <Grid container spacing={2} >
        {
          movies.map(movie => {
            return (
              <Grid item xs={12} key={movie.id} sm={6} lg={4}>
                <MovieCard movie={movie} />
              </Grid>
            );
          })
        }
      </Grid>
    </Box>  
  );

}

export default MoviesList;