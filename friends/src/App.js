import React, { Component } from 'react';

import FriendList from "./components/friendlist/FriendList"


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>I'm the App</h1>
        <FriendList />
      </div>
    );
  }
}

export default App;
