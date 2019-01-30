import React from "react"

import Friend from "./Friend"

import {connect} from "react-redux"

class FriendList extends React.Component {
  
  componentDidMount() {
    //Fetch Data here
  }

  
  render(){
    const friendList = this.props.friends.map(friend => {
      return <Friend friend={friend} />
    })

    return (
      <div>
        {
          friendList
        }
      </div>
    )
  }
}


//Connecting FriendList to store, pulling in all data needed
const mapStateToProps = state => {
  console.log(state)
  return {
    friends: state.friends
  }
}


export default connect(mapStateToProps, {})(FriendList);