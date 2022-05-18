import React, { useState } from "react";

export default function Textbox(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    // console.log("handled onChange!!");
    setText(event.target.value);
  };

  function handleUpperCase() {
    // console.log("uppercase-btn-clicked !!!");
    let newUpText = text.toUpperCase();
    setText(newUpText);
    // console.log(text + " converts succesfully to ->" + newUpText);
  }

  function handleLowerCase() {
    // console.log("lowercase-btn-clicked!!!");
    let newLowText = text.toLowerCase();
    setText(newLowText);
    // console.log(text + " converts succesfully to ->" + newLowText);
  }

  const handleExtraSpace = () => {
    let noExtraSpaceText = text.split(/[ ] +/);
    setText(noExtraSpaceText.join(" "));
  };

  function handleClearText() {
    // console.log("Remove text-btn-clicked!!!");
    let newTrimText = "";
    setText(newTrimText);
    // console.log(text + " converts succesfully to ->" + newTrimText);
  }

  function handleCopyText() {
    // console.log("Copy text-btn-clicked!!!");
    let text = document.getElementById("mytextbox");
    text.select();
    navigator.clipboard.writeText(text.value);
    // alert("Copied to clipboard!")
    props.showAlert("Copied to clipboard!", "success");
    // console.log(text + " converts succesfully to ->" + text);
  }

  return (
    <>
      <div className={`text-${props.mode === "light" ? "dark" : "light"}`}>
        <h2>Text Utilities</h2>
        <div className="mb-3 my-3">
          <textarea
            className="form-control"
            id="mytextbox"
            rows="10"
            placeholder="Start typing..."
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor:
                props.mode === "light" ? "whitesmoke" : "#e6f2ff",
            }}
          ></textarea>
        </div>

        <button className="btn btn-primary my-1 mx-1" onClick={handleUpperCase}>
          Convert to Uppercasse
        </button>

        <button className="btn btn-primary my-1 mx-1" onClick={handleLowerCase}>
          Convert to Lowercasse
        </button>

        <button
          className="btn btn-primary my-1 mx-1"
          onClick={handleExtraSpace}
        >
          Remove extra spaces
        </button>

        <button className="btn btn-primary my-1 mx-1" onClick={handleClearText}>
          Clear Text
        </button>

        <button className="btn btn-primary my-1 mx-1" onClick={handleCopyText}>
          Copy Text
        </button>

        <div className="mb-3 my-4">
          <h3>Text Summary</h3>
          <p>
            This text contains {text.split(" ").length} word(s) and{" "}
            {text.length} characters.
            <br />
            {(0.005 * text.split(" ").length).toFixed(2)} Minute read.
          </p>
        </div>

        <h3>Text Preview</h3>
        <div className="card my-3">
          <p className={`card-body text-dark`}>{text}</p>
        </div>
      </div>
    </>
  );
}
