import React, { Component } from "react";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";
import { connect } from "react-redux";
import { PERSON_ADD, PERSON_REMOVE } from "../reducers/action-types";

class Persons extends Component {
  state = {
    persons: []
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
        {this.props.savedPersons.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onPersonRemove(person.id)}
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
      dispatch({ type: PERSON_ADD, payload: newPerson }),
    onPersonRemove: id => dispatch({ type: PERSON_REMOVE, id: id })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
