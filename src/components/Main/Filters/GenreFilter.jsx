import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchGenres } from '../../../redux/actions';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import { CustomMultipleSelect } from '../../UI';

function GenreFilter({ language, setGenreFilter }){
  const dispatch = useDispatch();
  const genres = useSelector(state => state.movies.genres);
  const [genreValue, setGenreValue] = useState([]);

  useEffect(()=>{
    dispatch(fetchGenres(language));
    setGenreValue([]);
  },[language]);

  useEffect( () => {
    setGenreFilter(
      genres.reduce((accum, genre) => {
        if(genreValue.indexOf(genre.name) > -1){
          accum.push(genre.id);
        }
        return accum;
      },[])
    );
  },[genreValue]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setGenreValue( 
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  
  return(
    <Accordion>
      <AccordionSummary
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <CustomMultipleSelect genres={genres} genreValue={genreValue} onChange={handleChange}/>
      </AccordionSummary>
    </Accordion>
  );
}

GenreFilter.propTypes = {
  language: PropTypes.string,
  setGenreFilter: PropTypes.func,
};

export default GenreFilter;