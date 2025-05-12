import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const handleLowClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };

    const handleExtraSpaces = () => {
    let words = text.split(" ").filter((word) => word !== "");
    setText(words.join(" "));
  };

  const handleOnChange = (event) => {
    console.log(text)
    setText(event.target.value);
  };

  const handleClearClick = () => {
    setText("");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied successfully","success")
  };



  const handleHeadlineClick = () => {
    let ar = text.split(" ");
    let sentence = "";
    ar.forEach((word) => {
      if (word) {
        sentence = sentence + word[0].toUpperCase() + word.slice(1).toLowerCase() + " ";
      }
    });
    setText(sentence.slice(0,-1));
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style = {{color : props.mode==='dark'?'white':'#042743'}}>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
          <textarea
            value={text}
            className="form-control"
            id="mybox"
            rows="8"
            onChange={handleOnChange}
            style = {{backgroundColor : props.mode==='light'?'white':'#042743',color : props.mode==='dark'?'white':'#042743'}}
          ></textarea>
        </div>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
        Convert to UPPERCASE
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>
        Convert to lowercase
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleHeadlineClick}>
        Convert to HeadLine
      </button>
      <button disabled={text.length===0} className="btn btn-danger mx-2 my-2" onClick={handleClearClick}>
        Clear text
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
        Copy text
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>
        Remove extra spaces
      </button>
      <div className="container my-2" style = {{color : props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words</p>
        <p>{text.length} characters</p>
        <p>Reading time - {(text.split(" ").filter((element)=>{return element.length!==0}).length) / 125} minutes</p>
        <h2>Preview</h2>
        <p>{text?text:"Nothing to preview"}</p>
      </div>
    </>
  );
}
