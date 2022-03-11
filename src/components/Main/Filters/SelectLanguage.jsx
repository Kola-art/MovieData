import React from 'react';
import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import { SelectChoise } from '../../UI';

function SelectLanguage({language, setLanguage}) {
  return (
    <Accordion>
      <AccordionSummary
        aria-controls="panel1a-content"
        id="panel1a-header" sx={{marginBottom: '0px'}} 
      >
        <SelectChoise options ={
          [
            {value: 'cs', title: 'Český'},
            {value: 'de', title: 'Deutsch'},
            {value: 'it', title: 'Italiano'},
            {value: 'pl', title: 'Polski'},
            {value: 'ru', title: 'Pусский'},
            {value: 'uk', title: 'Український'},
            {value: 'en', title: 'English'},
            {value: 'be', title: 'Беларуская мова'},
            {value: 'tr', title: 'Türkçe'},
          ]} defaultValue= 'Select Language:' value={language} onChange={setLanguage}
        />   
      </AccordionSummary>
    </Accordion>
  );

}

SelectLanguage.propTypes = {
  language: PropTypes.string,
  setLanguage: PropTypes.func,
};

export default SelectLanguage;