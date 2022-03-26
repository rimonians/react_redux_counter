import React from "react";
import classes from "./Counter.module.css";
import CountView from "../CountView/CountView";
import CountController from "../CountController/CountController";

const Counter = () => {
  return (
    <>
      <div className={classes.counter}>
        <CountView />
        <CountController />
      </div>
    </>
  );
};

export default Counter;
