import React, { Component } from 'react'
import PropTypes from 'prop-types';
import classes from '././Person.css';
import withClass from '../../../hoc/withClass';
import Auxiliary from '../../../hoc/Auxiliary';

class Person extends Component {

    componentDidMount() {
        if(this.props.pos === 0) {
            this.inputElement.focus();
        }
    }

    render() {
        return (
        <Auxiliary>
            <div onClick={this.props.click} className={classes.delete}>x</div>
            <strong>{this.props.name}</strong>
            <p><strong>Age: </strong>{this.props.age}</p>
            <p>{this.props.children}</p>
            <input ref={(inp) => {this.inputElement = inp}} type="text" onChange={this.props.changed} value={this.props.name} />
        </Auxiliary>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);