import axios from "axios";

export const FETCH_DATA = 'FETCH_DATA'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'
export const ADDING_FRIEND = "ADDING_FRIEND"
export const CANCEL_ADD = `CANCEL_ADD`;
export const DELETING_FRIEND = `DELETING_FRIEND`
export const DELETE_FRIEND = `DELETE_FRIEND`;
export const DELETE_FAILURE = `DELETE_FAILURE`;

const baseURL = `http://localhost:5000`;

// Fetches data on FriendList ComponentDidMount
// Changes fetching statuses during fetching, success, failure
export const getFriends = () => dispatch => {
  dispatch({type: FETCH_DATA})
  axios.get(`${baseURL}/api/friends`)
  .then(res => dispatch({type: FETCH_SUCCESS, payload: res.data}))
  .catch(err => dispatch({type: FETCH_FAILURE, payload: err}))
}

// Changes status of savingFriend to true when user types in the form
export const addingFriend = (id) => dispatch => {
  dispatch({type: ADDING_FRIEND})
}


// Cancels changes made to form and resets add/update statuses
export const cancelAdd = () => dispatch => {
  dispatch({type: CANCEL_ADD})
}



export const deletingFriend = () => dispatch => {
  dispatch({ type: DELETING_FRIEND })
}

export const deleteFriend = (id) => dispatch => {
axios.delete(`${baseURL}/api/friends/${id}`)
.then(res => dispatch({type: DELETE_FRIEND, payload: res.data}))
.catch(err => dispatch({type: DELETE_FAILURE, payload: err}))
}
