import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  root: {
    width: '100%',
    marginTop: '10px'
  }
};

export const Form = ({children, ...props}) => {
  return (
    <form noValidate {...props} sx={styles.root}>
      {children}
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.any,
};