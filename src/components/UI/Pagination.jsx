import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';

export function PagePagination({page, count, onPageChange}) {
  
  return (
    <Stack spacing={2}>
      <Pagination count={count} page={page} onChange={onPageChange} size="small" color="primary"/>
    </Stack>
  );
}

PagePagination.propTypes = {
  page: PropTypes.number,
  count: PropTypes.number,
  onPageChange: PropTypes.func,
};
 