import React from 'react';
import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import { SelectChoise } from '../../UI';

function SortMovies({sortValue, setSortValue}) {
  return (
    <Accordion>
      <AccordionSummary
        aria-controls="panel1a-content"
        id="panel1a-header" sx={{marginBottom: '0px'}} 
      >
        <SelectChoise options ={
          [
            {value: 'popularity.desc', title: 'Popularity descending'},
            {value: 'popularity.asc', title: 'Popularity ascending'},
            {value: 'vote_average.desc', title: 'Rating descending'},
            {value: 'vote_average.asc', title: 'Rating ascending'},
          ]} defaultValue= 'Sort movies by:' value={sortValue} onChange={setSortValue}
        />  
      </AccordionSummary>
    </Accordion>
  );

}

SortMovies.propTypes = {
  sortValue: PropTypes.string,
  setSortValue: PropTypes.func,
};

export default SortMovies;