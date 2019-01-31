import React, { Component } from 'react';



import FriendList from "./components/friendlist/FriendList"
import FriendForm from "./components/friendform/FriendForm"

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <FriendForm />
        <FriendList />
      </div>
     
    );
  }
}

export default App;
