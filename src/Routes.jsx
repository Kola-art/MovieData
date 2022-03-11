import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MoviesPage from './pages/MoviesPage';
import MoviePage from './pages/MoviePage';
import SignUp from './pages/SignUp';

function Routes() {
  return(
    <>
      <Switch>
        <Route path='/' exact component={MoviesPage} />
        <Route path='/movie/:id'component={MoviePage} />
        <Route path='/signUp'component={SignUp} />
      </Switch>
    </>
  );
}

export default Routes;