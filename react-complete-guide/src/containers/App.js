import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Auxiliary from '../hoc/Auxiliary';
import withClass from '../hoc/withClass';

class App extends PureComponent {


  constructor(props) {
    super(props);
    console.log('[App.js], Inside Constructor');
  }

  state = {
    persons: [
      { id: 1, name: 'Hans', age: 23 },
      { id: 2, name: 'Nino', age: 11 },
      { id: 3, name: 'Anna', age: 44 }
    ],
    original: true,
    showPersons: false,
    toggleClicked: 0
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    if (this.state.persons.length > 0) {
      this.setState((prevState, props) => {
        return {
          showPersons: !doesShow,
          toggleClicked: prevState.toggleClicked + 1
        }
      });
    }
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  nameChangedHanlder = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return (p.id === id);
    });
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    console.log(persons);

    this.setState({ persons: persons });
  }

  render() {
    console.log('[App.js], render()');
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangedHanlder} />;
    }

    return (
      <Auxiliary>
        <button onClick={() => { this.setState({ showPersons: true }) }}>Show Persns</button>
        <Cockpit click={this.togglePersonsHandler} persons={this.state.persons} showPersons={this.state.showPersons} />
        {persons}

      </Auxiliary>
    );
  }
}

export default withClass(App, classes.App);
