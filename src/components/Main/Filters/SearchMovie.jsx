import React from 'react';
import { Input } from '../../UI';
import PropTypes from 'prop-types';

function SearchMovie ({setSearch}) {
  const handleChange = (e)=> {
    setSearch(e.target.value);
  };
  return (
    <>
      <Input onChange={handleChange} label='Search Movie...'/>
    </>
  );
}
SearchMovie.propTypes = {
  setSearch: PropTypes.func,
};
export default SearchMovie;
