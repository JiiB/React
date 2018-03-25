import React from 'react'
import classes from './Cockpit.css';
import Auxiliary from '../../hoc/Auxiliary';


const cockpit = (props) => {

    let btnClass = classes.button;
    if (props.showPersons) {
        btnClass = [classes.button, classes.red].join(' ');
    }

    const assignedClasses = [];
    if (props.persons.length < 1) {
      assignedClasses.push(classes.disabled);
    }

    return (
        <Auxiliary>
            <h1>Hi whats up?</h1>
            <button className={btnClass} onClick={props.click}>{(props.showPersons) ? 'Hide Persons' : 'Show Persons'}</button>
        </Auxiliary>
    );
};

export default cockpit;