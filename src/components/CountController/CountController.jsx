import React from "react";
import classes from "./CountController.module.css";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import {
  counterIncrement,
  counterReset,
  counterDecrement,
} from "../../redux/counter/counterActions";

const CountController = () => {
  const dispatch = useDispatch();

  return (
    <div className={classes.countController}>
      <Button variant="inc" onClick={() => dispatch(counterIncrement())}>
        Increment
      </Button>
      <Button variant="reset" onClick={() => dispatch(counterReset())}>
        Reset
      </Button>
      <Button variant="dec" onClick={() => dispatch(counterDecrement())}>
        Decrement
      </Button>
    </div>
  );
};

export default CountController;
