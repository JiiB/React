import { INCREMENT, DECREMENT, ADD, SUB } from "../actions";

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
      break;
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
      break;
    case ADD:
      return {
        ...state,
        counter: state.counter + action.value
      };
      break;
    case SUB:
      return {
        ...state,
        counter: state.counter - action.value
      };
      break;
    default:
      return state;
  }
};

export default reducer;
