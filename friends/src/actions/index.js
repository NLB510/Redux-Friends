import axios from "axios";

export const FETCH_DATA = 'FETCH_DATA'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'
export const ADDING_FRIEND = "ADDING_FRIEND"
export const CANCEL_ADD = `CANCEL_ADD`;

const baseURL = `http://localhost:5000`;

export const getFriends = () => dispatch => {
  dispatch({type: FETCH_DATA})
  axios.get(`${baseURL}/api/friends`)
  .then(res => dispatch({type: FETCH_SUCCESS, payload: res.data}))
  .catch(err => dispatch({type: FETCH_FAILURE, payload: err}))
}


export const addingFriend = (id) => dispatch => {
  dispatch({type: ADDING_FRIEND})
}

export const cancelAdd = () => dispatch => {
  dispatch({type: CANCEL_ADD})
}