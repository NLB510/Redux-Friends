import { FETCH_DATA, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";

const emptyFriend = {
  name: "",
  age: "",
  email: ""
};

const initialState = {
  status: {
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false
  },
  friends: [],
  friend: emptyFriend
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        status: {
          ...state.status,
          fetchingFriends: true
        }
      };
      case FETCH_SUCCESS: 
      return {
        ...state,
        friends: action.payload,
        status: {
          ...state.status,
          fetchingFriends: false,
          friendsFetched: true
        }
      }
      case FETCH_FAILURE: 
      return {
        ...state,
        status: {
          ...state.status,
          friendsFetched: false,
          fetchingFriends: true
        }
      }
    default:
      return state;
  }
};

export default reducer;
