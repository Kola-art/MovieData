import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';

const styles ={
  title: {
    fontWeight: '700', 
    fontSize: '20px'
  },
  text: {
    fontSize: '17px',
    fontWeight: '400',
  },
  tagline: {
    marginTop: '10px',
    fontSize: '17px',
    fontWeight: '300',
  }
};

function MovieDescr({movie}){
  return (
    <Box component='div' sx={{width: '48%'}}>
      <Typography gutterBottom variant="h5" component="div" sx={styles.title}>
        {movie.title} ({movie.runtime} mins)
      </Typography>
      <Typography gutterBottom variant="h5" component="div" sx={styles.title}>
        Realised: {movie.release_date}
      </Typography>
      <Typography variant="body2" sx={styles.text} >
        Genre: { movie.genres.map(item =>  item.name).join(', ')} 
      </Typography>
      <Typography variant="body2" sx={styles.tagline} >
        { movie.tagline } 
      </Typography>
      <Rating name="customized-10" defaultValue={movie.vote_average} sx={{margin: '10px 0'}} max={10} precision={0.5} readOnly />
      <Typography variant="body2" sx={styles.text} >
        Description: <br /> {movie.overview}
      </Typography>
    </Box>
  );
}
MovieDescr.propTypes = {
  movie: PropTypes.object, 
};
export default MovieDescr;