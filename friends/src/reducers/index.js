const emptyFriend = {
  name: "",
  age: "",
  email: ""
};

const initialState = {
  friends: [
    {
      id: 1,
      name: "Ben",
      age: 30,
      email: "ben@lambdaschool.com"
    },
    {
      id: 2,
      name: "Austen",
      age: 45,
      email: "austen@lambdaschool.com"
    },
    {
      id: 3,
      name: "Ryan",
      age: 15,
      email: "ryan@lambdaschool.com"
    },
    {
      id: 4,
      name: "Sean",
      age: 35,
      email: "sean@lambdaschool.com"
    },
    {
      id: 5,
      name: "Michelle",
      age: 67,
      email: "michelle@gmail.com"
    }
  ],
  friend: emptyFriend
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
