import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  {
    /*Functions for upper case & lower case & clear Text */
  }

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To UpperCase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To LowerCase!", "success");
  };
  const handleClrText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };
  //copt text
  const handleCopy = () => {
    let text = document.querySelector("#myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed!", "success");
  };

  {
    /* function for write in text box  */
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === `dark` ? `white` : `black` }}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === `dark` ? `grey` : `white`,
              color: props.mode === `dark` ? `white` : `black`,
            }}></textarea>
        </div>
        {/* buttons for upper case & lower case  */}
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary" onClick={handleClrText}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-3" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-4"
        style={{ color: props.mode === `dark` ? `white` : `black` }}>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes To Read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0 ? text : "Enter Someting In Textbox To Preview It"}
        </p>
      </div>
    </>
  );
}
