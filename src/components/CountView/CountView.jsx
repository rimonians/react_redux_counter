import React from "react";
import classes from "./CountView.module.css";
import { useSelector } from "react-redux";

const CountView = () => {
  const counter = useSelector((state) => state.counter);
  return (
    <div className={classes.countView}>
      <h1>{counter.count}</h1>
    </div>
  );
};

export default CountView;
