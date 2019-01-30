import React from "react";

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
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state)
  }

  render() {
    return (
      <div>
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
        </form>
      </div>
    );
  }
}

export default FriendForm;
