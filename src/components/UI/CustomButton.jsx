import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

export function ButtonCreator({onClick, children, bg, type, view, size, disabled}) {
  return (
    <>
      <Button size={size} color={bg} variant={view} 
        disabled={disabled} type={type} onClick={onClick} >
        {children}
      </Button>
    </>
  );
}
ButtonCreator.propTypes = {
  children: PropTypes.any, 
  onClick: PropTypes.func,
  bg:  PropTypes.string, 
  type: PropTypes.string,
  view: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool
};