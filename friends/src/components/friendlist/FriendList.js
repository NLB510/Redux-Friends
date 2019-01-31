import React from "react";

import Friend from "./Friend";

import { connect } from "react-redux";
import { getFriends } from "../../actions";

class FriendList extends React.Component {
  componentDidMount() {
    //Fetch Data here
    this.props.getFriends();
  }

  render() {
    const friendList = this.props.friends.map(friend => {
      return <Friend key={friend.id} friend={friend} />;
    });

    return <div>{friendList}</div>;
  }
}

//Connecting FriendList to store, pulling in all data needed
const mapStateToProps = state => {
  console.log(state.status);
  return {
    friends: state.friends,
    status: state.status
  };
};

export default connect(
  mapStateToProps,
  {getFriends}
)(FriendList);
