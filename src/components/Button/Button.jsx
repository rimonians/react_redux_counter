import React from "react";
import classes from "./Button.module.css";

const Button = ({ children, variant, ...rest }) => {
  return (
    <button {...rest} className={`${classes.btn} ${classes[variant]}`}>
      {children}
    </button>
  );
};

export default Button;
