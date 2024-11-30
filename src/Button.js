import React from "react";
import './Calculator.css';

// Create our Button component as a functional component.
const Button = (props) => {
  return (
    <button className="ButtonStyle" value={props.label} onClick={props.ClickHandle}>
      {props.label}
    </button>
  );
};

// Export our button component.
export default Button;
