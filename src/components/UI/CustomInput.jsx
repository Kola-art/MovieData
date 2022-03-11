import React, { forwardRef } from 'react';
import TextField from '@mui/material/TextField';

// eslint-disable-next-line react/display-name
export const Input = forwardRef((props, ref) => {
  return (
    <TextField variant='outlined' margin='normal' size="small" fullWidth inputRef={ref} {...props}/>
  );
});