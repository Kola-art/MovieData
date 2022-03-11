import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function SelectChoise({ options, defaultValue, value, onChange }){

  return (
    <Box sx={{ minWidth: 220 }}>
      <FormControl variant="standard" fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          {defaultValue}
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value= {value} 
          onChange = {(event) => onChange(event.target.value)}
        >
          {
            options.map(option => {
              return <MenuItem value={option.value} key={option.value}>{option.title}</MenuItem>;
            })
          } 
        </Select>
      </FormControl>
    </Box>
  );
}

SelectChoise.propTypes = {
  options: PropTypes.array,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};
 