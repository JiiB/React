import React from "react";

import "./AddPerson.css";

class AddPerson extends React.Component {
  state = {
    name: "",
    age: ""
  };

  render() {
    return (
      <div className="AddPerson">
        <input
          required
          type="text"
          placeholder="Name"
          value={this.state.name}
          onChange={event => this.setState({ name: event.target.value })}
        />
        <input
          required
          type="number"
          placeholder="Age"
          value={this.state.age}
          onChange={event => this.setState({ age: event.target.value })}
        />
        <button
          onClick={() =>
            this.props.clicked({
              id: Date.now(),
              name: this.state.name,
              age: this.state.age
            })
          }
        >
          Add Person
        </button>
      </div>
    );
  }
}

export default AddPerson;
