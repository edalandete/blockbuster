import actionTypes from '../actions/actionTypes';
import Movies from '../../types/movies';

function moviesReducer(movies = [], action: {type: string, movies: Movies}) {
  if (action.type === actionTypes.LOAD_MOVIES) {
    return action.movies;
  }
  return movies;
}
export default moviesReducer;
