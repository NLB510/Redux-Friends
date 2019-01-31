import React from "react";

import { connect } from "react-redux";
import { addingFriend, cancelAdd } from "../../actions";

class FriendForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nameInput: "",
      ageInput: "",
      emailInput: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
    this.props.addingFriend();
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  cancelChange = e => {
    e.preventDefault();
    this.setState({
      nameInput: "",
      ageInput: "",
      emailInput: ""
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
              name="nameInput"
              value={this.state.nameInput}
              onChange={this.handleChange}
            />
            <input
              type="text"
              placeholder="Enter Age"
              name="ageInput"
              value={this.state.ageInput}
              onChange={this.handleChange}
            />
            <input
              type="text"
              placeholder="Enter Email"
              name="emailInput"
              value={this.state.emailInput}
              onChange={this.handleChange}
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
  { addingFriend, cancelAdd }
)(FriendForm);
