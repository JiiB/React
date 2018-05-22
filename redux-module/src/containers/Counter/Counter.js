import React, { Component } from "react";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import { connect } from "react-redux";
import {
  INCREMENT,
  DECREMENT,
  ADD,
  SUB,
  STORE_RESULT,
  DELETE_RESULT
} from "../../store/actions";

class Counter extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl label="Subtract 5" clicked={this.props.onSubCounter} />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Store Result
        </button>
        <ul>
          {this.props.storedResults.map(res => (
            <li
              key={`res-${res.id}`}
              onClick={() => this.props.onDeleteResult(res.id)}
            >
              {res.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: INCREMENT }),
    onDecrementCounter: () => dispatch({ type: DECREMENT }),
    onAddCounter: () => dispatch({ type: ADD, value: 5 }),
    onSubCounter: () => dispatch({ type: SUB, value: 5 }),
    onStoreResult: result => dispatch({ type: STORE_RESULT, result: result }),
    onDeleteResult: id => dispatch({ type: DELETE_RESULT, id: id })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
