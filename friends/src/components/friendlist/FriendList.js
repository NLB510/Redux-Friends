import React from "react";

import Friend from "./Friend";

import { connect } from "react-redux";
import { getFriends, deletingFriend, deleteFriend } from "../../actions";

import styled from "styled-components";

class FriendList extends React.Component {
  componentDidMount() {
    //Fetch Data here
    this.props.getFriends();
  }

  

  deleteFriendHandler = (e, id) => {
    e.preventDefault();
    this.props.deleteFriend(id);
  };

  render() {
    const friendList = this.props.friends.map(friend => {
      return (
        <React.Fragment key={friend.id}>
          <Friend
            friend={friend}
           
            deleteFriendHandler={this.deleteFriendHandler}
          />
        </React.Fragment>
      );
    });

    return <FriendListContainer>{friendList}</FriendListContainer>;
  }
}

//Connecting FriendList to store, pulling in all data needed
const mapStateToProps = state => {
  // console.log(state.status);
  return {
    friends: state.friends,
    status: state.status
  };
};

/* 
==== Component Styles ====
*/

const FriendListContainer = styled.div`
  width: 70%;
  margin: 2% auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default connect(
  mapStateToProps,
  { getFriends, deletingFriend, deleteFriend }
)(FriendList);
