import React from "react";
import classes from "./App.module.css";
import Counter from "./components/Counter/Counter";

const App = () => {
  return (
    <div className={classes.container}>
      <Counter />
    </div>
  );
};

export default App;
