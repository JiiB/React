import { STORE_RESULT, DELETE_RESULT } from "../actions";

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: Date.now(), value: action.result })
      };
      break;
    case DELETE_RESULT:
      const newArray = state.results.filter(result => result.id !== action.id);
      return {
        ...state,
        results: newArray
      };
      break;
    default:
      return state;
  }
};

export default reducer;
