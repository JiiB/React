import React, { PureComponent } from 'react'
import Person from './Person/Person';


class Persons extends PureComponent {

    render() {
        console.log('[Persons.js], render()');

        return this.props.persons.map((person, i) => {
            return <Person key={person.id} name={person.name} click={() => this.props.clicked(i)} changed={(event) => this.props.changed(event, person.id)} pos={i} age={person.age} />
        });
    }
}


export default Persons;