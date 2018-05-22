import React, { Component } from "react";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";
import { connect } from "react-redux";

class Persons extends Component {
  state = {
    persons: []
  };

  personAddedHandler = () => {
    const newPerson = {
      id: Date.now(),
      name: "Max",
      age: Math.floor(Math.random() * 40)
    };
    this.setState(prevState => {
      return { persons: prevState.persons.concat(newPerson) };
    });
  };

  personDeletedHandler = personId => {
    this.setState(prevState => {
      return {
        persons: prevState.persons.filter(person => person.id !== personId)
      };
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <AddPerson clicked={this.props.onPersonAdd} />
        {this.state.persons.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.personDeletedHandler(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    savedPersons: state.persons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPersonAdd: newPerson =>
      dispatch({ type: "PERSON_ADD", payload: newPerson })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
