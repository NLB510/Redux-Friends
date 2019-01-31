import axios from "axios";

export const FETCH_DATA = 'FETCH_DATA'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'

const baseURL = `http://localhost:5000`;

export const getFriends = () => dispatch => {
  dispatch({type: FETCH_DATA})
  axios.get(`${baseURL}/api/friends`)
  .then(res => dispatch({type: FETCH_SUCCESS, payload: res.data}))
  .catch(err => dispatch({type: FETCH_FAILURE, payload: err}))
}