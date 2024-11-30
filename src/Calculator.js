import React, { useState } from "react";
import Button from "./Button";
import './Calculator.css';
import photo from "./photo.jpg";
import { evaluate } from "mathjs";

function KeyPadComponent(props) {
  const [text1, setText] = useState("");
  const [showImage, setShowImage] = useState(false); // false meaning at initial stage image is hidden 

  const ClickHandle = (e) => {
    const value = e.target.value;

    if (value === "C") {
      setText("");
    } else if (value === "=") {
      try {
        setText(evaluate(text1)); // this function from math.js library to evaluate arithmatic expression and stores in text1
      } catch {
        alert("Invalid expression");
      }
    } else if (value === "Show Me") {
      setShowImage(true);
    } else if (value === "Square") {
      setText((prev) => {
        const number = parseFloat(prev);
        return number ? (number * number).toString() : "";
      });
    } else {
      setText(text1 + value);
    }
  };

  return (
    <div className="Calculator" style={{ minHeight: "100vh" }}>
      <div className="screen-row">
        <input type="text" readOnly value={text1} /> 
        
      </div>

      <div className="button-row">
        <Button label="(" ClickHandle={ClickHandle} />
        <Button label="CE" ClickHandle={ClickHandle} />
        <Button label=")" ClickHandle={ClickHandle} />
        <Button label="C" ClickHandle={ClickHandle} />
      </div>

      <div className="button-row">
        <Button label="1" ClickHandle={ClickHandle} />
        <Button label="2" ClickHandle={ClickHandle} />
        <Button label="3" ClickHandle={ClickHandle} />
        <Button label="+" ClickHandle={ClickHandle} />
      </div>

      <div className="button-row">
        <Button label="4" ClickHandle={ClickHandle} />
        <Button label="5" ClickHandle={ClickHandle} />
        <Button label="6" ClickHandle={ClickHandle} />
        <Button label="-" ClickHandle={ClickHandle} />
      </div>

      <div className="button-row">
        <Button label="7" ClickHandle={ClickHandle} />
        <Button label="8" ClickHandle={ClickHandle} />
        <Button label="9" ClickHandle={ClickHandle} />
        <Button label="*" ClickHandle={ClickHandle} />
      </div>

      <div className="button-row">
        <Button label="." ClickHandle={ClickHandle} />
        <Button label="0" ClickHandle={ClickHandle} />
        <Button label="=" ClickHandle={ClickHandle} />
        <Button label="/" ClickHandle={ClickHandle} />
      </div>

      {/* New Buttons */}
      <div className="button-row">
        <Button label="Show Me" ClickHandle={ClickHandle} />
        <Button label="Square" ClickHandle={ClickHandle} style={{ textAlign: "left" }}/>
      </div>

      {/* Show Image */}
      {showImage && (
        <div className="image-container">
          <img
            src={photo}
            alt="Your Picture"
            className="user-image"
          />
        </div>
      )}
    </div>
  );
}

export default KeyPadComponent;
