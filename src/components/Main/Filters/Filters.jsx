import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { PagePagination } from '../../UI';
import { fetchMovies, searchMovies } from '../../../redux/actions';
import { getPagesCount } from '../../../utils/getPagesCount';
import SortMovies from './SortMovies';
import GenreFilter from './GenreFilter';
import SelectLanguage from './SelectLanguage';
import SearchMovie from './SearchMovie';

function Filters() {
  const dispatch = useDispatch();
  const {totalCount, limit} = useSelector( state => state.movies);
  const [sortValue, setSortValue] = useState('popularity.desc');
  const [language, setLanguage] = useState('en');
  const [genreFilter, setGenreFilter] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  
  const pages = useMemo( () => getPagesCount(totalCount, limit),[limit, totalCount]);
  
  useEffect( () => {
    if(search.length > 0) {
      dispatch(searchMovies(search, language, 1));
      setPage(1);
    }
    else if(page > 1) {
      setPage(1);
    }
    else if (page === 1 ){
      dispatch(fetchMovies(language, sortValue, page, genreFilter.join(',')));
    }
  },[language, sortValue, genreFilter, search]);

  useEffect( () => {
    if(search.length > 0) {
      dispatch(searchMovies(search, language, page));
    }
    else dispatch(fetchMovies(language, sortValue, page, genreFilter.join(',')));
  },[page]);

  const onPageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Grid container spacing={2} >
      <Grid item xs={12}>
        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 700, padding: '20px 0 0 20px'}}>
        Movies: 
        </Typography>
      </Grid>
      <Grid item xs={12} >
        <SearchMovie setSearch={setSearch}/>
      </Grid>
      <Grid item xs={12} sm={6} md={12}>
        <SortMovies sortValue={sortValue} setSortValue={setSortValue} />
      </Grid>
      <Grid item xs={12} sm={6} md={12}>
        <SelectLanguage language={language} setLanguage={setLanguage} />
      </Grid>
      <Grid item xs={12} sm={6} md={12}>
        <GenreFilter genreFilter={genreFilter} setGenreFilter={setGenreFilter} language={language}/>
      </Grid>
      <Grid item xs={12} >
        <PagePagination page={page} count={pages} onPageChange={onPageChange}/>
      </Grid>
    </Grid>
  );
}
export default Filters;