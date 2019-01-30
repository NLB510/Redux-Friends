import React from "react"

import Friend from "./Friend"

import {connect} from "react-redux"

class FriendList extends React.Component {
  render(){
    return (
      <div>
        <Friend />
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    friends: state.friends
  }
}


export default connect(mapStateToProps, {})(FriendList);