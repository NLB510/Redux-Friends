import {
  FETCH_DATA,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  ADDING_FRIEND,
  CANCEL_ADD,
  DELETING_FRIEND,
  DELETE_FRIEND,
  DELETE_FAILURE
} from "../actions";

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
  friend: emptyFriend,
  error: ''

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
        },
        error: ''
      };
    case FETCH_FAILURE:
      return {
        ...state,
        status: {
          ...state.status,
          friendsFetched: false,
          fetchingFriends: true
        },
        error: action.payload
      };
    case ADDING_FRIEND: {
      return {
        ...state,
        status: {
          ...state.status,
          savingFriends: true
        }
      };
    }
    case CANCEL_ADD: {
      return {
        ...state,
        status: {
          ...state.status,
          savingFriends: false
        }
      };
    }
    case DELETING_FRIEND: 
    return {
      ...state,
      status: {
        ...state.status,
        deletingFriend: true,
        friendDeleted: false
      }
    }
    case DELETE_FRIEND: 
    return {
      ...state,
      friends: action.payload,
      status: {
        ...state.status,
        deletingFriend: false,
        friendDeleted: true
      },
      error: ''
    }
    case DELETE_FAILURE: 
    return {
      ...state,
      status: {
        ...state.status,
        deletingFriend: true,
      },
      error: action.payload

    }
    default:
      return state;
  }
};

export default reducer;
