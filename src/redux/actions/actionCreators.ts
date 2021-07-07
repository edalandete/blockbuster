import { Dispatch } from 'redux';
import axios from 'axios';
import actionTypes from './actionTypes';

const POPULAR_MOVIES_ENDPOINT = process.env.REACT_APP_POPULAR_MOVIES;
const apiKey = process.env.REACT_APP_MOVIEDB_APIKEY;

export default function loadMovies() {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await axios(`${POPULAR_MOVIES_ENDPOINT}?api_key=${apiKey}`);
      dispatch({
        type: actionTypes.LOAD_MOVIES,
        movies: data
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_MOVIES_ERROR
      });
    }
  };
}
