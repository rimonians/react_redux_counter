import {
  COUNTER_INCREMENT,
  COUNTER_RESET,
  COUNTER_DECREMENT,
} from "./counterTypes";

export const counterIncrement = () => {
  return {
    type: COUNTER_INCREMENT,
  };
};

export const counterReset = () => {
  return {
    type: COUNTER_RESET,
  };
};

export const counterDecrement = () => {
  return {
    type: COUNTER_DECREMENT,
  };
};
