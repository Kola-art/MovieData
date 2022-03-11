import React, { forwardRef } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

// eslint-disable-next-line react/display-name
export const  RadioButtonsGroup = forwardRef((props, ref) =>{
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup row aria-label="gender" name="row-radio-buttons-group" {...props} >
        <FormControlLabel value="female" control={<Radio />} label="Female" inputRef={ref} />
        <FormControlLabel value="male" control={<Radio />} label="Male" inputRef={ref} />
      </RadioGroup>
    </FormControl>
  );
});
