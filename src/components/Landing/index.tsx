import React, { useEffect, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadMovies from '../../redux/actions/actionCreators';
import Store from '../../types/store';

const Landing: FC = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store: Store) => store.movies.results);

  useEffect(() => {
    dispatch(loadMovies());
  }, []);

  return (
    <>
      <h1>LANDING</h1>
      {movies && movies.length && movies.map((movie) => (
        <p>{movie.title}</p>
      ))}
    </>
  );
};

export default Landing;
