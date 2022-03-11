import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Filters from '../components/Main/Filters/Filters';
import MoviesList from '../components/Main/Movies/MoviesList';

function MoviesPage() {
  return (
    <Container  maxWidth="lg" sx={{marginTop: '50px'}}>
      <Grid container spacing={2} >
        <Grid item xs={12} md={4} lg={3}>
          <Filters />
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          <MoviesList />
        </Grid>
      </Grid>
    </Container>
  );
}

export default MoviesPage;