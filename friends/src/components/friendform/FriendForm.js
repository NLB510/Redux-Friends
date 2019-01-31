import React from "react";

import { connect } from "react-redux";
import { addFriend, addingFriend, cancelAdd } from "../../actions";

class FriendForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      friend: {
        name: "",
        age: "",
        email: ""
      }
    };
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState(prevState => {
      return {
        friend: {
          ...prevState.friend,
          [name]: value
        }
      };
    });
    this.props.addingFriend();
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.addFriend(this.state.friend);
    this.setState({
      friend: {
        name: "",
        age: "",
        email: ""
      }
    });
  };

  cancelChange = e => {
    e.preventDefault();
    this.setState({
      friend: {
        name: "",
        age: "",
        email: ""
      }
    });
    this.props.cancelAdd();
  };

  render() {
    return (
      <div>
        {this.props.status.savingFriends ? (
          <h1>Add Friend</h1>
        ) : (
          <h1>Friend List</h1>
        )}
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              value={this.state.friend.name}
              onChange={this.handleChange}
              required
            />
            <input
              type="text"
              placeholder="Enter Age"
              name="age"
              value={this.state.friend.age}
              onChange={this.handleChange}
              required
            />
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              value={this.state.friend.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>

          {//Add cancel button only if user types in form
          this.props.status.savingFriends && (
            <button onClick={this.cancelChange}>Cancel</button>
          )}
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    status: state.status
  };
};

export default connect(
  mapStateToProps,
  { addFriend, addingFriend, cancelAdd }
)(FriendForm);
