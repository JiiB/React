import { PERSON_ADD, PERSON_REMOVE } from "./action-types";

const initialState = {
  persons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PERSON_ADD:
      return {
        ...state,
        persons: state.persons.concat(action.payload)
      };
      break;
    case PERSON_REMOVE:
      return {
        ...state,
        persons: state.persons.filter(person => person.id !== action.id)
      };
      break;
    default:
      return state;
  }
};

export default reducer;
