import {
  COUNTER_INCREMENT,
  COUNTER_RESET,
  COUNTER_DECREMENT,
} from "./counterTypes";

const initialCounterState = {
  count: 0,
};

const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return { ...state, count: state.count + 1 };
    case COUNTER_RESET:
      return { ...state, count: 0 };
    case COUNTER_DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default counterReducer;
